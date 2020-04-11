import { Game } from './game';

window.gi = {};
window.globalOptions = {
    marks: true,
    resize: true,
};

window.addEventListener("load", function() {
    window.g = function() {
        this.game = new Game({
            cols: 40,
            rows: 20,
            mineCount: 30,
            globalOptions: window.globalOptions,
        });
    };
    g.call(window.gi)
});