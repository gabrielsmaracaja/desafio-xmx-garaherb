export async function renderModules(moduleRegistry) {
  const mountedModules = await Promise.all(
    moduleRegistry.map(async (moduleDefinition) => {
      const slot = document.querySelector(moduleDefinition.slot);

      if (!slot) {
        return null;
      }

      try {
        const response = await fetch(moduleDefinition.view);

        if (!response.ok) {
          throw new Error(`Falha ao carregar ${moduleDefinition.name}: ${response.status}`);
        }

        slot.innerHTML = await response.text();
        slot.dataset.moduleMounted = moduleDefinition.name;

        if (typeof moduleDefinition.init === 'function') {
          moduleDefinition.init(slot);
        }

        return moduleDefinition.name;
      } catch (error) {
        slot.innerHTML = `
          <section class="module-error">
            <div class="container module-error__content">
              <p>Não foi possível carregar o módulo ${moduleDefinition.name}.</p>
            </div>
          </section>
        `;
        console.error(error);
        return null;
      }
    }),
  );

  return mountedModules.filter(Boolean);
}