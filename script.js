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

//--------------------BINARY CODE ANIMATION-------------------------//
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

// Function to resize the canvas to full window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Add event listener to handle window resize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

// Initialize rainDrops array to match the number of columns
const rainDrops = Array.from({ length: columns }).map(() => 1);

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#EE4B2B';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

