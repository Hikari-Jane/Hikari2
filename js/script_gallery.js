/* gallery アニメーション↓ */

const references = document.querySelectorAll('#references img');
for (let i = 0; i<references.length; i++) {
    references[i].addEventListener('mouseover', () => {
        references[i].animate({filter:['blur(10px)','blur(0)']}, 500);
    });
};

/* gallery アニメーション↑ */