import "./style.css";

class VeiculeSlider {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.previewButton = document.querySelectorAll(".nav-prev");
    this.nextButton = document.querySelectorAll(".nav-next");
    this.currentIndex = -1;
    this.inicio();
  }

  inicio() {
    this.setupSlideClickListeners();
    this.setupNavigationListeners();
    this.setupKeyboardListeners();
  }

  sed;
}
