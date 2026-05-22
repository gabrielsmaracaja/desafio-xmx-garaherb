# garaherb
Solução natural para vitalidade masculina

## Links do projeto

- Ambiente publicado na Vercel: https://desafio-xmx-garaherb-test.vercel.app
- Vídeo no YouTube: https://youtu.be/BV0ucgLP2AM

## Estrutura da landing page

- `/index.html`: shell principal da página, com slots para montagem dos módulos.
- `/assets/scripts/main.js`: bootstrap da aplicação estática.
- `/assets/scripts/core`: orquestração mínima de montagem dos módulos.
- `/assets/styles/main.scss`: ponto de entrada do Sass.
- `/assets/styles/main.css`: CSS compilado usado pelo navegador.
- `/modules/<nome-do-modulo>/view`: fragmentos HTML dos módulos.

## Módulos atuais

- `hero`
- `preco`
- `sobre`
- `ingredientes`
- `beneficios`
- `depoimento`
- `frete`
- `oferta`
- `faq`
- `barra-rodape`
- `footer`

## Como rodar localmente

Instale a dependência de Sass uma vez:

```bash
npm install
```

Compile os estilos:

```bash
npm run build:styles
```

Para desenvolvimento contínuo dos estilos:

```bash
npm run watch:styles
```

Suba um servidor local:

```bash
npm run serve
```

Depois acesse `http://localhost:8080`.

Importante: a página usa carregamento de fragmentos HTML por `fetch`, então abrir o `index.html`
diretamente em `file://` não é suficiente.

## Decisões técnicas

- Implementação sem frameworks, usando HTML fragmentado por módulo, JavaScript nativo e Sass.
- `index.html` reduzido a shell de composição, sem lógica visual acoplada.
- Organização modular por seção da landing page, com fragmentos HTML, estilos por módulo e inicialização JavaScript apenas onde necessário.
- Node é usado somente como tooling de desenvolvimento para compilar Sass; a entrega final continua sendo uma página estática em HTML, CSS e JavaScript.
