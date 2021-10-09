import Game from "./scripts/game.js";
import Controls from "./scripts/controls.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 900;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    const game = new Game();
    const controls = new Controls(game, ctx, canvas.width, canvas.height);
    controls.run();
});