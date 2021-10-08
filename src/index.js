import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    const game = new Game();
    debugger
    game.draw(ctx);
    debugger
});