let homeCount = 0;
let guestCount = 0;
let homeScoreCount = document.getElementById("home-score");
let guestScoreCount = document.getElementById("guest-score");

function updateScore(team, points) {
    if (team === "home") {
        homeCount += points;
        homeScoreCount.textContent = homeCount;
    } else if (team === "guest") {
        guestCount += points;
        guestScoreCount.textContent = guestCount;
    }
}