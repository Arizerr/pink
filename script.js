/*const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];*/

const messages = [
    "km yakin nih? 🥺",
    "beneran yakin?? 😳",
    "fix nggak berubah pikiran? 🤨",
    "sayang plis... 🥹💖",
    "coba pikirin lagi sayang! 🤔✨",
    "kalau km ga sayang, aku bakal sedih banget... 😭",
    "ak jadi sediiih banget... 😭💔",
    "ak jadi sedih banget banget banget... 😭💔💔💔",
    "yaudah deh, ak berhenti nanya... 😞",
    "ehhh boong, bilang iya dong plsss! ❤️🥰"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
