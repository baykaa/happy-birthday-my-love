const messages = [
    "Aww... <br>  Do you want one more? 😘",
    "You sure? <br> I might not stop after this one... 😏",
    "Mmm... Your lips are addictive. <br> Shall we go for round 3? 🔥",
    "Uh-oh... I’m heating up 😳 <br> Just one more? Or two?",
    "You’re making it really hard to stop... 😈 <br> Wanna make out instead?",
    "My heart's pounding... <br> I think I need CPR — from your lips. 😮‍💨❤️",
    "This is getting dangerous. <br> One more kiss... or should we just cuddle forever? 💋",
    "You’ve officially broken the kiss counter 😵‍💫 <br> Shall we upgrade to birthday cuddles?",
    "You're the reason I believe in magic. <br> One last kiss before your surprise? 🎉💖"
];

let messageIndex = 0;
let kissCount = 0;
const gifInitialSize = 150; // Initial size of the GIF in pixels
const gifSizeIncrement = 40; // How much the GIF grows with each kiss

function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const mainMessage = document.querySelector('.subheader_message');

    if (kissCount >= messages.length) {
        kissAnimation();
        kissSound(); // Show the kiss animation one last time

        // Disable buttons to prevent further clicks
        yesButton.disabled = true;
        noButton.disabled = true;

        setTimeout(() => {
            window.location.href = "happy_birthday.html";
        }, 1500); // Delay to ensure the last kiss is shown before redirecting
        return;
    }
    kissAnimation();
    kissSound();
    mainMessage.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.1}px`;
    kissCount++;
}

function kissAnimation() {
    const normalPhoto = document.querySelector('.normal_photo img');
    const gifContainer = document.querySelector('.gif_container');
 
    normalPhoto.src = "images/kiss.png"; // Show the kiss image
 
    // After a short delay, show the animated GIF
    setTimeout(() => {
        // Calculate the new size for the GIF
        const newGifSize = gifInitialSize + kissCount * gifSizeIncrement;
 
        // Add a unique timestamp to the GIF's src to force it to replay the animation
        const gifSrc = `images/hearts.gif?t=${new Date().getTime()}`;
 
        // Set the GIF and its size, then display it
        gifContainer.innerHTML = `<img src="${gifSrc}" alt="Kiss GIF" style="width: ${newGifSize}px;">`;
        gifContainer.style.display = 'block';
 
        // Hide the GIF overlay after it has played for a bit
        setTimeout(() => {
            gifContainer.style.display = 'none';
        }, 1000); // GIF will be visible for 1 second
    }, 200); // 200ms delay before the GIF appears
 
    setTimeout(() => {
        normalPhoto.src = "images/normal.png"; // Revert to normal image
    }, 700);
}

function kissSound() {
    let kissSoundNum = [1, 2];
    kissSoundNum = kissSoundNum[Math.floor(Math.random() * kissSoundNum.length)];
    const audio = new Audio();

    if (kissCount >= messages.length) {
        audio.src = "sounds/final_kiss.mp3";
    } else {
        audio.src = `sounds/kiss_sound_${kissSoundNum}.mp3`;
    }
    
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}

function handleNoClick() {
    window.location.href = "no_page.html";
}