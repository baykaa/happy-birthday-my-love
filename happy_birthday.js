const blowButton = document.getElementById('blowButton');

blowButton.addEventListener('click', handleBlowClick);

function handleBlowClick() {
    blowCandle()
    // blowButton.disabled = true; // Disable the button after blowing the candle
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
    // const audio = new Audio('sounds/blow_candle.mp3');
    // audio.play().catch(error => {
    //     console.error("Error playing sound:", error);
    // });
}