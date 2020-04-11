import { Game } from './game';

window.gi = {};
window.globalOptions = {
    marks: true,
};

document.addEventListener("DOMContentLoaded", function() {
    let g = function() {
        this.game = new Game({
            cols: 40,
            rows: 20,
            mineCount: 30,
            globalOptions: window.globalOptions,
        });
    };
    g.call(window.gi)
});