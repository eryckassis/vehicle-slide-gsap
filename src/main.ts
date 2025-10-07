import "./style.css";
class AccordionSlider {
  private slides: NodeListOf<HTMLElement>;
  private botaoVoltarSlide: HTMLElement | null;
  private botaoProximoSlide: HTMLElement | null;
  private indexAtual: number;

  constructor() {
    this.slides = document.querySelectorAll<HTMLElement>(".slide");
    this.botaoVoltarSlide = document.querySelector<HTMLElement>(".nav-prev");
    this.botaoProximoSlide = document.querySelector<HTMLElement>(".nav-next");
    this.indexAtual = -1;

    this.init();
  }

  private init(): void {
    this.setupSlideClickListeners();
    this.setupNavigationListeners();
    this.setupKeyboardListeners();
  }

  private setupSlideClickListeners(): void {
    this.slides.forEach((slide, index) => {
      slide.addEventListener("click", () => this.setActiveSlide(index));
    });
  }

  private setupNavigationListeners(): void {
    this.botaoVoltarSlide?.addEventListener("click", () =>
      this.previousSlide()
    );
    this.botaoProximoSlide?.addEventListener("click", () => this.nextSlide());
  }

  private setupKeyboardListeners(): void {
    document.addEventListener("keydown", (e: KeyboardEvent) =>
      this.handleKeyboardNavigation(e)
    );
  }

  private handleKeyboardNavigation(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      this.previousSlide();
      return;
    }
    if (event.key === "ArrowRight") {
      this.nextSlide();
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
    this.slides.forEach((slide) => slide.classList.remove("active"));
  }

  private resetCurrentIndex(): void {
    this.indexAtual = -1;
  }

  private activateSlide(index: number): void {
    this.deactivateAllSlides();
    this.slides[index].classList.add("active");
    this.indexAtual = index;
  }

  private nextSlide(): void {
    const nextIndex = this.calculateNextIndex();
    this.setActiveSlide(nextIndex);
  }

  private previousSlide(): void {
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

class SliderInitializer {
  static initialize(): void {
    document.addEventListener("DOMContentLoaded", () => {
      new AccordionSlider();
    });
  }
}

SliderInitializer.initialize();
