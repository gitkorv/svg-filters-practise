const hoverimage = document.querySelector('#hoverimage');
const mouseTarget = document.querySelector('.mousetarget');
console.log(mouseTarget);

window.addEventListener('mouseover', e => {
    // SEE MOUSE ATTRIBUTES BY:
    console.log(e);

    // MOVE DIV ALONG CURSOR METHOD 1:
    // cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    
    // Add show class to element
    // hoverimage.classList.add('show');




    // MOVE DIV ALONG CURSOR METHOD 2:
    hoverimage.style.top = e.pageY -10 + "px";
    hoverimage.style.left = e.pageX -10 + "px";
} )

// mouseTarget.addEventListener('mouseover', e => {
    
// })

mouseTarget.addEventListener('mouseleave', e => {
    // SEE MOUSE ATTRIBUTES BY:
    console.log(e);

    // MOVE DIV ALONG CURSOR METHOD 1:
    // cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    
    // Add show class to element
    hoverimage.classList.remove('show');

    // MOVE DIV ALONG CURSOR METHOD 2:
    // hoverimage.style.top = e.pageY -10 + "px";
    // hoverimage.style.left = e.pageX -10 + "px";
} )















// document.addEventListener('click', () => {
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500)
// })

// function interval() {
//     while (true) {
//         setInterval(showImage, 1);
//     }
// }

// function showImage() {

//     var x = clientX;
//     var y = clientY;
//     var image = document.getElementById("hoverimage");
//     image.style.left = x;
//     image.style.top = y;
//  }