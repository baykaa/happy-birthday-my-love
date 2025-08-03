document.addEventListener('DOMContentLoaded', () => {
    birthdaySong();
});

const blowButton = document.getElementById('blowButton');

blowButton.addEventListener('click', handleBlowClick);

function handleBlowClick() {
    blowCandle()
    blowButton.disabled = true; 
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    
    changeMessage()
}

function handleGoBackClick() {
    window.location.href = "index.html";
}

function blowCandle() {
    const cakeContainer = document.querySelector('.cake_container');
    const cakeImage = cakeContainer.querySelector('img');

    cakeImage.src = "images/cake_blow.gif";
    // Change the image to the blown out candle
    setTimeout(() => {
        cakeImage.src = "images/cake_blowed.png";
    }, 900); // Delay to simulate the blowing action

    // Optionally, you can add a sound effect here
    const audio = new Audio('sounds/firework.mp3');
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}

function birthdaySong() {
    const audio = new Audio('sounds/hb_song.mp3');
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}

function changeMessage() {
    const messageElement = document.querySelector('.message');

    const messages = [
        "I love you more than words can say and",
        "I am so grateful for every moment we share.",
        "I hope our future is filled with even more love, laughter, and happiness.",
        "I LOVE YOU (My lovie dovie dubie hair) ❤️",
    ];
    
    let index = 0;
    
    setInterval(() => {
        messageElement.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 5000); // Change message every 5 seconds
}