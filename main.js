// Définir la date cible (1er juin 2024 à 14h30, heure française)
const targetDate = new Date("2024-06-01T14:30:00+02:00");

function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <p>${days} Jours</p>
        <span>${formatNumber(hours)}h</span>
        <span>${formatNumber(minutes)}m</span>
        <span>${formatNumber(seconds)}s</span>
    `;

    setTimeout(updateCountdown, 1000);
}


var prevScrollpos = window.scrollY;

window.onscroll = function() {
    if (window.scrollY > currentScrollPos) {
        document.getElementById("menuburger").style.position = "floatable";
        document.getElementById("menu").style.position = "floatable";
    } else {
        document.getElementById("menuburger").style.position = "fixed";
        document.getElementById("menu").style.disppositionlay = "fixed";
    }
};

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

updateCountdown();