import Controls from "./scripts/controls.js";
import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 900;
    canvas.height = 530;
    const ctx = canvas.getContext("2d");
    const game = new Game();
    const controls = new Controls(game, ctx, canvas, canvas.width, canvas.height);

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", event => {
        canvas.style.display = "block";
        controls.start();
    });

    const endButton = document.getElementById("play-again");
    endButton.addEventListener("click", event => {
        controls.restart();
    })
});