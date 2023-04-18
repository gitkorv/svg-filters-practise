const cursor = document.querySelector('.cursor-image');

const hoverWords = document.querySelectorAll(".text-container span");
console.log(hoverWords);

function showHoverImage(word) {
    const wordId = word.getAttribute('id');
    console.log(wordId);

    word.addEventListener('mouseenter', e => {
        cursor.classList.add(`${wordId}--show`);
    })
    word.addEventListener('mouseleave', e => {
        cursor.classList.remove(`${wordId}--show`);
    })

    window.addEventListener('mousemove', e => {
        cursor.x = e.pageX;
        cursor.y = e.pageY;
        cursor.style.filter = "url(#filter1)";
    
        function checkForMouseMove() {
            if (cursor.x === e.pageX && cursor.y === e.pageY) {
                cursor.style.filter = "none";
            }
        }
        setTimeout(checkForMouseMove, 500);
    
        cursor.style.top = e.pageY -200 + "px";
        cursor.style.left = e.pageX -200 + "px";          
    } )
}

hoverWords.forEach(entry => {
    showHoverImage(entry);
})


document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})