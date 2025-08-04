document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('interaction-overlay');
    const container = document.querySelector('.container');
    const audio = new Audio('sounds/crying_sound.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    const startExperience = () => {
        // Try to play audio - this is now initiated by a user click
        audio.play().catch(error => {
            console.error("Error playing sound:", error);
        });

        // Show the main content
        overlay.style.display = 'none';
        container.classList.remove('hidden');
    };

    overlay.addEventListener('click', startExperience, { once: true });
});
