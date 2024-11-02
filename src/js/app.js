class Collapse {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.collapse-btn');
        this.text = this.element.querySelector('.collapse-text');
        this.button.addEventListener('click', () => {
            this.toggle();
        });
    }
    toggle() {
        if (this.element.classList.contains('active')) {

            this.element.classList.remove('active');
        } else {

            this.element.classList.add('active');
        }
    }
}
const col = new Collapse(document.querySelector('.collapse-container'));

// popup

class Popup {
    constructor(element) {
        this.element = element;
        this.open = this.element.querySelector('.open');
        this.modal = this.element.querySelector('.modal-content');
        this.close = this.modal.querySelector('.close');
        this.open.addEventListener('click', () => {
            this.modal.classList.remove('hidden');
            this.modal.classList.add('active');
            this.open.classList.remove('active');
            this.open.classList.add('hidden');
        });
        this.close.addEventListener('click', () => {
            this.modal.classList.remove('active');
            this.modal.classList.add('hidden');
            this.open.classList.remove('hidden');
            this.open.classList.add('active');
        })
    }
}

const popup = new Popup(document.querySelector('.popup-container'));


// likes

import src from '../img/heart.png';

class Like {
    constructor(element) {
        this.element = element;
        this.open = this.element.querySelector('.like-btn');
        this.styles = ['left', 'right', 'center-right', 'center-left'];
        this.open.addEventListener('click', () => {

            let randomIndex = Math.floor(Math.random() * this.styles.length);
            let randomWay = this.styles[randomIndex];
            console.log(randomWay)
            let heart = document.createElement('div');
            heart.classList.add('heart');
            this.element.append(heart);
            let heartImg = document.createElement('img');
            heartImg.src = src;
            heart.append(heartImg);
            heart.classList.add(randomWay)

            heart.addEventListener('animationend', () => {
                const rect = heart.getBoundingClientRect();
                const containerRect = this.element.getBoundingClientRect();
                if (rect.top < containerRect.top) {
                    heart.remove();
                }
            })
        });

    }
}

const like = new Like(document.querySelector('.hearts-container'));
