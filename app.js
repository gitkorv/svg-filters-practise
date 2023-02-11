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
}

hoverWords.forEach(entry => {
    showHoverImage(entry);
})


window.addEventListener('mousemove', e => {
    cursor.x = e.pageX;
    cursor.y = e.pageY;
    cursor.style.filter = "url(#filter1)";
    // cursor.style.display = "none";

    const myTimeout = setTimeout(checkForMouseMove, 500);

    function checkForMouseMove() {
        if (cursor.x === e.pageX && cursor.y === e.pageY) {
            cursor.style.filter = "none";
        }
    }

    cursor.style.top = e.pageY -200 + "px";
    cursor.style.left = e.pageX -200 + "px";
    
    // console.log(cursor.onmousemove);
            
} )


document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})