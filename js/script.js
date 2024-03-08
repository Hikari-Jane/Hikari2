/* ローディングアニメーション　↓ */
const loading = document.querySelector('#loading'); 

const loaded = () => {
    loading.classList.add('loaded');
};

window.addEventListener('load',loaded);

/* ローディングアニメーション　↑ */

/* top-content アニメーション↓ */

const topContent = document.querySelectorAll('.top-content');

const keyframes = {
    filter : ['blur(20px)','blur(0)'],
};

const options = {
    duration : 2000,
    fill : 'forwards',
}

topContent[0].animate(keyframes, options);

const keyframes2 = {
    borderRadius : [
        '60% 40% 79% 21% / 58% 50% 50% 42%',
        '56% 44% 57% 43% / 50% 44% 56% 50%',
        '33% 67% 30% 70% / 64% 74% 26% 36%',
        '33% 67% 63% 37% / 43% 45% 55% 57%',
    ],
};

const options2 = {
    duration: 5000,
    direction: 'alternate',
    iterations: Infinity,
};

topContent[0].animate(keyframes2, options2);

/* top-content アニメーション↑ */ 

