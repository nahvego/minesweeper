import { Game } from './game';

window.gi = {};

document.addEventListener("DOMContentLoaded", function() {
    let g = function() {
        this.game = new Game({
            cols: 40,
            rows: 20,
            mineCount: 1,
        });
    };
    g.call(window.gi)
});