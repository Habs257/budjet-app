let date, hr, min, sec;

function rafrechirHorloge() {
    date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    document.querySelector(".hr").style.transform = `translate(-50%, -100%) rotate(${hr * 360 / 12 + min * 30 / 60}deg)`;
    document.querySelector(".mn").style.transform = `translate(-50%, -100%) rotate(${min * 360 / 60 + sec * 6 / 60}deg)`;
    document.querySelector(".sec").style.transform = `translate(-50%, -100%) rotate(${sec * 360 / 60}deg)`;
}

rafrechirHorloge();
window.setInterval(rafrechirHorloge, 1000);
