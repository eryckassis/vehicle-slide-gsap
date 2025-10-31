import './style.css';
class CarSliders {
  private slides: NodeListOf<HTMLElement>;
  private botaoVoltarSlide: HTMLElement | null;
  private botaoProximoSlide: HTMLElement | null;
  private indexAtual: number;

  constructor() {
    this.slides = document.querySelectorAll<HTMLElement>('.slide');
    this.botaoVoltarSlide = document.querySelector<HTMLElement>('.nav-prev');
    this.botaoProximoSlide = document.querySelector<HTMLElement>('.nav-next');
    this.indexAtual = -1;

    this.iniciar();
  }

  private iniciar(): void {
    this.setupSlideClickListeners();
    this.setupNavigationListeners();
    this.setupKeyboardListeners();
  }

  private setupSlideClickListeners(): void {
    this.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        this.setActiveSlide(index);
      });
    });
  }

  private setupNavigationListeners(): void {
    this.botaoVoltarSlide?.addEventListener('click', () => {
      this.voltarSlide();
    });
    this.botaoProximoSlide?.addEventListener('click', () => {
      this.proximoSlide();
    });
  }

  private setupKeyboardListeners(): void {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      this.handleKeyboardNavigation(e);
    });
  }

  private handleKeyboardNavigation(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.voltarSlide();
      return;
    }
    if (event.key === 'ArrowRight') {
      this.proximoSlide();
    }
  }

  private setActiveSlide(index: number): void {
    if (this.isCurrentSlideActive(index)) {
      this.deactivateAllSlides();
      this.resetCurrentIndex();
      return;
    }
    this.activateSlide(index);
  }

  private isCurrentSlideActive(index: number): boolean {
    return this.indexAtual === index;
  }

  private deactivateAllSlides(): void {
    this.slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }

  private resetCurrentIndex(): void {
    this.indexAtual = -1;
  }

  private activateSlide(index: number): void {
    this.deactivateAllSlides();
    this.slides[index].classList.add('active');
    this.indexAtual = index;
  }

  private proximoSlide(): void {
    const nextIndex = this.calculateNextIndex();
    this.setActiveSlide(nextIndex);
  }

  private voltarSlide(): void {
    const prevIndex = this.calculatePreviousIndex();
    this.setActiveSlide(prevIndex);
  }

  private calculateNextIndex(): number {
    if (this.isNoSlideActive()) {
      return 0;
    }
    return (this.indexAtual + 1) % this.slides.length;
  }

  private calculatePreviousIndex(): number {
    if (this.isNoSlideActive()) {
      return this.slides.length - 1;
    }
    return (this.indexAtual - 1 + this.slides.length) % this.slides.length;
  }

  private isNoSlideActive(): boolean {
    return this.indexAtual === -1;
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  new CarSliders();
});
