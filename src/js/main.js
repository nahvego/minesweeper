import { Game } from './game';
const GAME_MODES = {
    "Beginner": {
        rows: 10,
        cols: 10,
        mineCount: 10,
    },
    "Intermediate": {
        rows: 16,
        cols: 16,
        mineCount: 40,
    },
    "Expert": {
        rows: 16,
        cols: 31,
        mineCount: 99,
    },
    "Custom": {
        rows: 1,
        cols: 1,
        mines: 1,
    },
};

window.gi = {};
window.globalOptions = {
    marks: true,
    resize: true,
    difficulty: "Intermediate",
};

window.addEventListener("load", function() {
    window.g = function() {
        let params = {
            globalOptions: window.globalOptions,
        };
        Object.assign(params, GAME_MODES[window.globalOptions.difficulty]);
        this.game = new Game(params);
    };

    function newGame() {
        if (window.gi && window.gi.game) {
            window.gi.game.destroy();
        }
        window.gi = {};
        g.call(window.gi);
    }

    function changeDifficulty(difficulty) {
        document.querySelector("li.checked[data-action=change-difficulty]").classList.remove("checked");
        document.querySelector(`li[data-action="change-difficulty"][data-difficulty="${difficulty}"]`).classList.add("checked");
        window.globalOptions.difficulty = difficulty;
        newGame();
    }

    function toggleMarks() {
        window.globalOptions.marks = !window.globalOptions.marks;

        document.querySelector("li[data-action=toggle-marks]").classList.toggle("checked");
    }

    newGame();

    document.getElementById("face-button").addEventListener("click", function() {
        newGame();
    });

    Array.from(document.querySelectorAll("#menubar > li")).forEach(li => {
        li.addEventListener("click", function() {
            if (li.classList.contains("open")) {
                li.classList.remove("open");
            } else {
                Array.from(document.querySelectorAll("#menubar > li.open")).forEach(l => {
                    l.classList.remove("open");
                });
                li.classList.add("open");
            }
        });
    });

    document.querySelector("#menubar").addEventListener("click", function(event) {
        if (!event.target.dataset.action) { return; }
        switch (event.target.dataset.action) {
            case "new-game":
                newGame();
            break;
            case "change-difficulty":
                changeDifficulty(event.target.dataset.difficulty);
            break;
            case "toggle-marks":
                toggleMarks();
            break;
        }
    });

    if (window.globalOptions.marks) {
        document.querySelector("li[data-action=toggle-marks]").classList.add("checked");
    }

    document.querySelector(`li[data-action="change-difficulty"][data-difficulty="${window.globalOptions.difficulty}"]`).classList.add("checked");
});