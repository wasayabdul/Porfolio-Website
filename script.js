//--------------------TITLE CURSOR ANIMATION-------------------------//

const text = "hi, Wasay here!";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
    } else {
        document.querySelector(".cursor").classList.add('blinking');
    }
}

document.addEventListener("DOMContentLoaded", type);



