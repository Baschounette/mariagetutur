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
        <div>
            <span>${days}</span>
            <p class="temp">jours</p>
        </div>
        <div>
            <span>${formatNumber(hours)}</span>
            <p>heures</p>
        </div>
        <div>
            <span>${formatNumber(minutes)}</span>
            <p>min</p>
        </div>
        <div>
            <span>${formatNumber(seconds)}</span>
            <p>sec</p>
        </div>
    `;

    setTimeout(updateCountdown, 1000);
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

updateCountdown();