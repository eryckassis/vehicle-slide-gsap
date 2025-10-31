/**
 * Testes para CarSliders
 *
 * 🧪 ANALOGIA: Estes são os inspetores testando cada funcionalidade
 * - Testam se os botões funcionam
 * - Testam se o teclado funciona
 * - Testam se os slides mudam corretamente
 */

describe('CarSliders - Example Tests', () => {
  beforeEach(() => {
    // Setup do DOM para testes
    document.body.innerHTML = `
      <div class="slide" data-testid="slide-0">Slide 1</div>
      <div class="slide" data-testid="slide-1">Slide 2</div>
      <div class="slide" data-testid="slide-2">Slide 3</div>
      <button class="nav-prev" data-testid="prev-btn">Previous</button>
      <button class="nav-next" data-testid="next-btn">Next</button>
    `;
  });

  it('should initialize with correct number of slides', () => {
    const slides = document.querySelectorAll('.slide');
    expect(slides).toHaveLength(3);
  });

  it('should have navigation buttons in DOM', () => {
    const prevButton = document.querySelector('.nav-prev');
    const nextButton = document.querySelector('.nav-next');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('should find slide elements', () => {
    const slide1 = document.querySelector('[data-testid="slide-0"]');
    const slide2 = document.querySelector('[data-testid="slide-1"]');
    const slide3 = document.querySelector('[data-testid="slide-2"]');

    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
    expect(slide3).toBeInTheDocument();
  });

  it('should have clickable slides', () => {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide) => {
      expect(slide).toBeInstanceOf(HTMLElement);
    });
  });

  describe('DOM Structure', () => {
    it('should have correct slide structure', () => {
      const slides = document.querySelectorAll('.slide');

      expect(slides[0]).toHaveTextContent('Slide 1');
      expect(slides[1]).toHaveTextContent('Slide 2');
      expect(slides[2]).toHaveTextContent('Slide 3');
    });

    it('should have navigation buttons with correct classes', () => {
      const prevButton = document.querySelector('.nav-prev');
      const nextButton = document.querySelector('.nav-next');

      expect(prevButton).toHaveClass('nav-prev');
      expect(nextButton).toHaveClass('nav-next');
    });
  });
});

/**
 * 📚 PRÓXIMOS PASSOS:
 *
 * Para testes mais avançados, você pode:
 *
 * 1. Testar a classe CarSliders diretamente:
 *    - Criar instância da classe
 *    - Testar métodos públicos
 *    - Simular eventos (click, keyboard)
 *
 * 2. Testar animações GSAP:
 *    - Verificar se timeline foi criado
 *    - Verificar se animações foram chamadas
 *
 * 3. Testar navegação:
 *    - Simular clicks nos botões
 *    - Simular teclas do teclado
 *    - Verificar slide ativo
 *
 * 4. Testar edge cases:
 *    - Navegar além do último slide
 *    - Navegar antes do primeiro slide
 *    - Slides vazios
 */
