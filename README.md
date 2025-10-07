# Veicle Slide GSAP — Slider de Veículos com Vite + TypeScript

Uma experiência de vitrine online para carros esportivos e de luxo, construída com Vite, TypeScript e animações com GSAP. O projeto prioriza código limpo, arquitetura simples e extensível, acessibilidade, SEO semântico e performance.

---

## Visão geral

Este projeto implementa um slider/galeria no estilo “accordion” para destacar veículos com fotos em alta qualidade, especificações e microinterações suaves. Ideal para lojas de carros que desejam apresentar seu estoque online de forma moderna, responsiva e com animações fluidas.

Principais objetivos:

- Código limpo, legível e fácil de manter
- Tipagem com TypeScript para segurança e escalabilidade
- Animações suaves com GSAP
- Acessibilidade via semântica HTML, navegação por teclado e aria-labels
- Baseada em Vite para DX rápida (HMR), build performático e estrutura moderna

---

## Recursos principais

- Layout de slides “accordion” com destaque do item ativo
- Navegação por clique, setas de navegação e teclas de seta (esquerda/direita)
- Conteúdo semântico: uso de `<article>`, `<header>`, `<dl>`/`<dt>`/`<dd>` para specs
- Preparado para animações com GSAP nas entradas de texto e elementos visuais
- Estrutura pronta para evoluir para React sem reescrever a base

---

## Arquitetura e decisões de design

### Clean Code e manutenibilidade

- Classes coesas: `AccordionSlider` encapsula a lógica do slider; `SliderInitializer` controla o bootstrap.
- Métodos pequenos e com nomes claros: `activateSlide`, `deactivateAllSlides`, `calculateNextIndex`, etc.
- Early returns: reduzem nesting e facilitam leitura.
- Sem efeitos colaterais surpresa: cada método faz apenas o que o nome indica.

### TypeScript para segurança e escalabilidade

- Tipos explícitos em elementos do DOM (`NodeListOf<HTMLElement>`, `KeyboardEvent>`).
- Operador de encadeamento opcional em listeners (`this.prevBtn?.addEventListener(...)`) evita null pointer.
- Facilita refatorações futuras (por exemplo, migração para React) sem quebrar comportamentos.

### Animações com GSAP

- GSAP selecionado por oferecer timeline robusta, easings avançados e excelente performance.
- Estratégia: animar elementos de texto e detalhes (título, subtítulo, badges) ao ativar um slide.
- Eases recomendados: `power3.out` ou `expo.out` para suavidade.

### Acessibilidade e SEO semântico

- Navegação por teclado: setas esquerda/direita para mudar de slide.
- Atributos ARIA: `role`, `aria-label` e hierarquia semântica consistente.
- Tags semânticas melhoram SEO e compatibilidade com leitores de tela.

---

## Estrutura de pastas

```text
veicle-slide-gsap/
├─ index.html               # HTML de entrada do Vite
├─ package.json             # Scripts e dependências
├─ tsconfig.json            # Configuração TypeScript
├─ public/                  # Assets estáticos (se necessário)
├─ src/
│  ├─ main.ts               # Lógica do slider (TypeScript)
│  └─ style.css             # Estilos base
└─ README.md
```

Arquivos relevantes fora do Vite (ex.: protótipo HTML/CSS/JS puro) foram migrados e consolidados dentro desta estrutura moderna. O `index.html` do Vite importa o TypeScript via `<script type="module" src="/src/main.ts"></script>`.

---

## Tecnologias utilizadas

- Vite — bundler e dev server com HMR
- TypeScript — tipagem estática e melhor DX
- GSAP (GreenSock Animation Platform) — animações suaves e performáticas
- HTML semântico + CSS moderno

Libs:

- `gsap` (GreenSock)

---

## Como executar

Pré-requisitos: Node.js LTS e npm.

1. Instale as dependências:

```bash
npm install
```

1. Rode em desenvolvimento (com HMR):

```bash
npm run dev
```

1. Gere o build de produção:

```bash
npm run build
```

1. Faça o preview do build:

```bash
npm run preview
```

Observação: o GSAP deve estar presente em `dependencies`. Caso esteja iniciando do zero, instale:

```bash
npm i gsap
```

---

## Uso e integração em lojas de carro

- Substitua os conteúdos dos `<article class="slide">` com fotos e specs reais do seu estoque.
- Cada slide suporta marca, nome do modelo, subtítulo e uma lista de especificações com `<dl>`.
- Os botões de navegação permitem percorrer os veículos; teclas de seta garantem usabilidade.
- Integre com seu backend para carregar os veículos dinamicamente (futuro upgrade com React facilita isso com estados e props).

Exemplos de expansão:

- Filtros por marca/ano/preço
- Integração com analytics para medir interesse por modelo
- Botão “Adicionar à cotação”/“Fale com vendedor” com eventos rastreáveis

---

## Boas práticas aplicadas

### Código limpo

- Nomes descritivos e consistentes para variáveis e métodos
- Métodos pequenos, coesos e com responsabilidade única
- Early returns para simplificar fluxos
- Separação clara de inicialização vs. comportamento

### Acessibilidade (a11y)

- `role`, `aria-label` e semântica adequada em headers, listas de specs e botões
- Navegação por teclado implementada (setas)
- Foco gerenciável nos elementos interativos

### SEO e semântica

- Estrutura coerente com `<main>`, `<section>`, `<article>`, `<header>`
- Conteúdos textuais indexáveis e significativos
- Atributos alt/labels e descrições claras

### Performance

- Vite para desenvolvimento rápido e builds otimizados
- Animações GSAP com easings suaves e mínimo layout thrashing
- Evita reflows desnecessários com atualizações coesas de classe/estado

---

## Animações com GSAP

O projeto está pronto para animar os elementos de cada slide quando ativados. Um exemplo de abordagem (resumida) no `main.ts`:

```ts
// import { gsap } from 'gsap'

private animateSlideText(index: number): void {
  const slide = this.slides[index]
  const targets = [
    slide.querySelector('.car-name'),
    slide.querySelector('.car-subtitle'),
    ...slide.querySelectorAll('.badge') as unknown as HTMLElement[],
  ].filter(Boolean) as HTMLElement[]

  if (!targets.length) return

  // Estado inicial seguro
  gsap.set(targets, { opacity: 0, y: 24 })

  // Entrada suave com stagger
  gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.12,
    overwrite: 'auto',
  })
}
```

Essa estratégia evita jumps, define estado inicial consistente e cria uma impressão de fluidez profissional.

---

## Erros/bugs encontrados e soluções

Durante a migração e ajustes, problemas típicos incluem:

1. Seletores que retornam `null`

- Sintoma: erro ao tentar adicionar listeners em `prevBtn`/`nextBtn` quando o elemento não existe no DOM.
- Solução: usar encadeamento opcional (`?.addEventListener`) e/ou validação antes do uso.

1. Conflito entre `index.html` raiz e `veicle-slide-gsap/index.html`

- Sintoma: o HTML fora do Vite não reconhece o TS, ou dois HTMLs causando confusão.
- Solução: padronizar o HTML do Vite como entrada principal e migrar o conteúdo visual para ele.

1. Navegação por teclado sem slide ativo

- Sintoma: índices negativos ou mod nos limites produzindo comportamentos inesperados.
- Solução: funções `isNoSlideActive`, `calculateNextIndex` e `calculatePreviousIndex` para cobrir estados sem ativo.

1. Animações “não tão suaves”

- Sintoma: textos entrando de forma abrupta.
- Solução: GSAP com `fromTo`/`set` + `to`, easings `power3.out`/`expo.out`, e `stagger`.

1. Assets e caminhos em produção

- Sintoma: imagens externas ou caminhos relativos quebrando em ambientes diferentes.
- Solução: preferir assets na pasta `public/` ou URLs absolutas estáveis; revisar `base` do Vite se publicar em subpath.

---

## Extensibilidade e futuro upgrade para React

- A classe `AccordionSlider` foi escrita de forma coesa e isolada, facilitando a migração para um componente React (por exemplo, `AccordionSlider.tsx`).
- O estado (`currentIndex`) mapeia naturalmente para `useState` e os listeners para `useEffect`/handlers.
- Com React, fica simples carregar dados de uma API e renderizar os slides dinamicamente a partir de um array de veículos.

Direção sugerida:

- Criar um hook `useAccordionSlider` ou um componente controlado com props para `initialIndex`, `onChange`, etc.
- Introduzir testes unitários para funções puras (`calculateNextIndex`, `calculatePreviousIndex`).

---

## Impacto para empresas e pessoas

- Redução de custo de manutenção: tipagem, estrutura clara e separação de responsabilidades.
- Escalabilidade: adicionar novos veículos, filtros e integrações sem reescrever a base.
- Melhor conversão: experiência rica e animações suaves melhoram engajamento e percepção de qualidade.
- Acessibilidade e SEO elevam alcance e encontram o público certo.

---

## Roadmap

- [ ] Integrar animações GSAP completas com timelines
- [ ] Carregar veículos a partir de um JSON/API
- [ ] Migração para React com componentes e testes
- [ ] Modo acessível com foco/aria mais refinado
- [ ] Suporte a touch/gestos (mobile)

---

## Como contribuir

1. Faça um fork do repositório
2. Crie uma branch de feature: `feat/nome-da-feature`
3. Commit com mensagens claras e descritivas
4. Abra um PR explicando o que mudou e por quê

---

## Licença

Este repositório segue a licença do autor/empresa responsável.
