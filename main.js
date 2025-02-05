// Store compliments and tasks
const compliments = [
    "Your smile brightens everyone's day! ☀️",
    "You make the world a better place just by being you! 🌟",
    "Your kindness is contagious! 💖",
    "You're stronger than you know! 💪",
    "Your creativity knows no bounds! 🎨",
    "You inspire others without even trying! ✨",
    "Your heart is made of pure gold! 💝",
    "You're absolutely amazing! 🌈",
    "Your presence is a gift to everyone around you! 🎁",
    "You have the power to make dreams come true! ⭐"
];

// Initialize notes from localStorage
let notes = JSON.parse(localStorage.getItem('gratitudeNotes')) || [];

// Load existing notes
function loadNotes() {
    const container = document.getElementById('notes-container');
    container.innerHTML = '';
    
    notes.forEach((note, index) => {
        const noteElement = createNoteElement(note, index);
        container.appendChild(noteElement);
    });
}

// Create a new note element
function createNoteElement(text, index) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.style.animationDelay = `${index * 0.1}s`;
    noteDiv.textContent = text;
    
    // Random pastel background color
    const hue = Math.random() * 360;
    noteDiv.style.backgroundColor = `hsl(${hue}, 100%, 95%)`;
    
    noteDiv.onclick = () => showNoteDetails(text);
    return noteDiv;
}

// Add a new note
function addNote() {
    const input = document.getElementById('noteInput');
    const text = input.value.trim();
    
    if (text) {
        notes.push(text);
        localStorage.setItem('gratitudeNotes', JSON.stringify(notes));
        
        const container = document.getElementById('notes-container');
        const noteElement = createNoteElement(text, notes.length - 1);
        container.appendChild(noteElement);
        
        input.value = '';
        
        // Add floating animation
        noteElement.style.animation = 'float 3s infinite ease-in-out';
    }
}

// Show random compliment
function showRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    showModal(compliments[randomIndex]);
}

// Show note details
function showNoteDetails(text) {
    showModal(text);
}

// Modal functionality
function showModal(text) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    
    modalText.textContent = text;
    modal.style.display = 'flex';
    
    // Add click outside to close
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Easter egg: Type "love" to trigger heart animation
document.getElementById('noteInput').addEventListener('input', (e) => {
    if (e.target.value.toLowerCase() === 'love') {
        createHeartAnimation();
        setTimeout(() => {
            e.target.value = '';
        }, 1000);
    }
});

// Create heart animation
function createHeartAnimation() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '2rem';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.animation = 'floatUp 2s ease-in-out';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 2000);
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize the app
document.addEventListener('DOMContentLoaded', loadNotes);