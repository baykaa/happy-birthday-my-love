document.addEventListener('DOMContentLoaded', () => {
    runCryingSound()
});

function runCryingSound() {
    const audio = new Audio('sounds/crying_sound.mp3');
    audio.loop = true; // Loop the crying sound
    audio.volume = 0.5; // Set volume to a reasonable level
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}
