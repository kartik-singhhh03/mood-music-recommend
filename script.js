// Playlist data for each mood
const playlists = {
    happy: {
        title: "Happy Vibes ✨",
        url: "https://youtube.com/playlist?list=PLgzTt0k8mXzF2fleyxQ17JxeccHFC8Gxp&si=6zFX1NYCUaEqyZcY"
    },
    romantic: {
        title: "Romantic Dreams 💝",
        url: "https://youtube.com/playlist?list=PLgzTt0k8mXzE6H9DDgiY7Pd8pKZteis48&si=Jayw9vsIfMD-StxR"
    },
    chill: {
        title: "Chill Mode 🌙",
        url: "https://youtube.com/playlist?list=PLHLua7lnY9X-uAKqwp0T23h3A4d-ZajTO&si=E822N4BpxQbFVuTb"
    },
    energetic: {
        title: "Energy Boost ⚡",
        url: "https://youtube.com/playlist?list=PLsPuP67OZewQWatUGt60Uovhs2H4TAB6J&si=i4qUXoXrAPAW6qWH"
    },
    dreamy: {
        title: "Dreamy Tunes 🌈",
        url: "https://youtube.com/playlist?list=PLcUsLiAHCnpj-yMWmbL-1KCBrzB_pNUs8&si=ymynDgA73W1V-KPK"
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initGlitter();
    initFloatingHearts();
    initMoodButtons();
});

// Initialize mood buttons
function initMoodButtons() {
    const buttons = document.querySelectorAll('.mood-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            showPlaylist(mood);
            createHeartBurst();
        });
    });
}

// Show playlist for selected mood
function showPlaylist(mood) {
    const playlist = playlists[mood];
    const card = document.getElementById('playlistCard');
    const title = document.getElementById('playlistTitle');
    const frame = document.getElementById('playlistFrame');

    title.textContent = playlist.title;
    frame.src = playlist.url;
    card.classList.remove('hidden');
}

// Close playlist
function closePlaylist() {
    const card = document.getElementById('playlistCard');
    card.classList.add('hidden');
    const frame = document.getElementById('playlistFrame');
    frame.src = '';
}

// Initialize glitter effect
function initGlitter() {
    const container = document.querySelector('.glitter-container');
    setInterval(() => {
        createGlitter(container);
    }, 200);
}

// Create glitter particles
function createGlitter(container) {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.style.left = Math.random() * 100 + 'vw';
    glitter.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(glitter);

    setTimeout(() => {
        container.removeChild(glitter);
    }, 5000);
}

// Initialize floating hearts
function initFloatingHearts() {
    setInterval(() => {
        createFloatingHeart();
    }, 3000);
}

// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
    document.querySelector('.floating-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create heart burst effect on button click
function createHeartBurst() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
}