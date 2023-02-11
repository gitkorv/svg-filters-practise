const cursor = document.querySelector('.cursor-image');
const mouseTarget = document.querySelector('.mousetarget');
console.log(mouseTarget);

document.addEventListener('mousemove', e => {
    cursor.x = e.pageX;
    cursor.y = e.pageY;
    cursor.style.filter = "url(#filter1)";

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