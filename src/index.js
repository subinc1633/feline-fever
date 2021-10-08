import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    // ctx.fillStyle = "#ecd8f1";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    const game = new Game();
    new GameView(game, ctx).run();
});