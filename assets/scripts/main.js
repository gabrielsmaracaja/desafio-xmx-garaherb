import { renderModules } from './core/module-loader.js';
import { moduleRegistry } from './core/module-registry.js';

async function bootstrapPage() {
  await renderModules(moduleRegistry);
}

window.addEventListener('DOMContentLoaded', bootstrapPage);
