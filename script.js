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

function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const mainMessage = document.querySelector('.subheader_message');
    mainMessage.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.1}px`;
    kissAnimation();
    kissCount++;
}

function kissAnimation() {
    const normalPhoto = document.querySelector('.normal_photo img');
    normalPhoto.src = "images/kiss.png";
    setTimeout(() => {
        normalPhoto.src = "images/normal.png";
    }, 200);
}

function handleNoClick() {
    window.location.href = "no_page.html";
}