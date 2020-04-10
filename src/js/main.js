import { Game } from './game';

document.addEventListener("DOMContentLoaded", function() {
    window.gi = (function() {
        this.game = new Game({
            cols: 40,
            rows: 20,
            mineCount: 30,
        });
    })();
})