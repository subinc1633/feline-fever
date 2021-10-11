import Controls from "./scripts/controls.js";
import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 900;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    const game = new Game();
    new Controls(game, ctx, canvas.width, canvas.height);
});