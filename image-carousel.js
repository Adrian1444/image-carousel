class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.images = this.getAttribute('images').split(',');
        this.currentIndex = 0;

        this.shadowRoot.innerHTML = `
            <style>
                .carousel {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                .carousel img {
                    width: 100%;
                    display: none;
                }
                .carousel img.active {
                    display: block;
                }
                .controls {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    transform: translateY(-50%);
                }
                .controls button {
                    background-color: rgba(0, 0, 0, 0.5);
                    border: none;
                    color: white;
                    padding: 10px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .controls button:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
                .indicators {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                }
                .indicators span {
                    background-color: rgba(0, 0, 0, 0.5);
                    width: 10px;
                    height: 10px;
                    margin: 0 5px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .indicators span.active {
                    background-color: rgba(255, 255, 255, 0.8);
                }
            </style>
            <div class="carousel">
                ${this.images.map((img, index) => `<img src="${img}" class="${index === 0 ? 'active' : ''}">`).join('')}
                <div class="controls">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                <div class="indicators">
                    ${this.images.map((_, index) => `<span class="${index === 0 ? 'active' : ''}" data-index="${index}"></span>`).join('')}
                </div>
            </div>
        `;

        this.prevButton = this.shadowRoot.querySelector('#prev');
        this.nextButton = this.shadowRoot.querySelector('#next');
        this.indicators = this.shadowRoot.querySelectorAll('.indicators span');

        this.prevButton.addEventListener('click', () => this.showPrevImage());
        this.nextButton.addEventListener('click', () => this.showNextImage());
        this.indicators.forEach(indicator => indicator.addEventListener('click', (e) => this.showImage(parseInt(e.target.dataset.index))));
    }

    showPrevImage() {
        this.showImage((this.currentIndex - 1 + this.images.length) % this.images.length);
    }

    showNextImage() {
        this.showImage((this.currentIndex + 1) % this.images.length);
    }

    showImage(index) {
        this.shadowRoot.querySelectorAll('img')[this.currentIndex].classList.remove('active');
        this.shadowRoot.querySelectorAll('img')[index].classList.add('active');
        this.indicators[this.currentIndex].classList.remove('active');
        this.indicators[index].classList.add('active');
        this.currentIndex = index;
    }
}

customElements.define('image-carousel', ImageCarousel);
