import Controls from "./scripts/controls.js";
import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 900;
    canvas.height = 530;
    const ctx = canvas.getContext("2d");
    const game = new Game();
    const controls = new Controls(game, ctx, canvas.width, canvas.height);
    const modal = document.getElementById("modal");
    const ending = document.getElementById("ending");

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", event => {
        canvas.style.display = "block";
        controls.start();
    });

    const howToPlay = document.getElementById("directions");
    const closeButton = document.getElementById("ok");
    howToPlay.onclick = () => { modal.style.display = "block"; }
    closeButton.onclick = () => { modal.style.display = "none"; }
    window.onclick = (e) => { if (e.target === modal) { modal.style.display = "none" }};

    const endButton = document.getElementById("play-again");
    endButton.addEventListener("click", event => {
        canvas.style.display = "block";
        ending.style.display = "none";
        controls.game = new Game();
        controls.start();
    })
});