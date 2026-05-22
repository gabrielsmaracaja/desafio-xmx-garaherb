import { initHero } from '../../../modules/hero/service/hero.js';
import { initPreco } from '../../../modules/preco/service/preco.js';
import { initFaq } from '../../../modules/faq/service/faq.js';

const moduleNames = [
  'hero',
  'preco',
  'sobre',
  'ingredientes',
  'beneficios',
  'depoimento',
  'frete',
  'oferta',
  'faq',
  'barra-rodape',
  'footer',
];

export const moduleRegistry = moduleNames.map((moduleName) => {
  const moduleDefinition = {
    name: moduleName,
    slot: `[data-module-slot="${moduleName}"]`,
    view: new URL(`../../../modules/${moduleName}/view/${moduleName}.html`, import.meta.url).href,
  };

  if (moduleName === 'hero') {
    moduleDefinition.init = initHero;
  }

  if (moduleName === 'preco') {
    moduleDefinition.init = initPreco;
  }

  if (moduleName === 'faq') {
    moduleDefinition.init = initFaq;
  }

  return moduleDefinition;
});