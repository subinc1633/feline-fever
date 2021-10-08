import Arrow from "./scripts/arrow.js";
import Avatar from "./scripts/avatar.js";
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    canvas.width = Game.X_DIM;
    canvas.height = Game.Y_DIM;
    const ctx = canvas.getContext("2d");
    // const game = new Game();
});