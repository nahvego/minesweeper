import { Model } from './model';
import { View } from './view';
import { randomInt } from './utils';

const DEFAULT_GLOBAL_OPTIONS = Object.freeze({
    marks: false,
});

class Game {
    constructor({ cols, rows, mineCount, globalOptions, mines = [] }) {

        if (mines.length === 0) {
            // Generar minas
            mines = Game.generateMines(rows, cols, mineCount);
        }

        if (!globalOptions) {
            globalOptions = DEFAULT_GLOBAL_OPTIONS;
        }

        this.globalOptions = globalOptions;
        this.model = new Model({ cols, rows, mines });
        this.view = new View({ cols, rows, model: this.model});
        this.model.bindView(this.view);

        this.gameStarted = false;
        this.interactuable = true;

        this.initListeners();
    }

    initListeners() {
        this.view.addEventListener("click", this.onPlaygroundClick.bind(this));
        this.view.addEventListener("rightClick", this.onPlaygroundRightClick.bind(this));
        this.view.addEventListener("reset", this.resetGame.bind(this));
    }

    startGame() {
        this.gameStarted = true;
        this.startTimer();
    }

    stopGame() {
        this.interactuable = false;
        this.stopTimer();
    }

    startTimer() {
        this.timerOn = true;
        this.timerStart = performance.now();
        setTimeout(this.doTimer.bind(this), 1000);
    }

    stopTimer() {
        this.timerOn = false;
    }

    doTimer() {
        if (!this.timerOn) return;
        this.view.setNumber(View.Counters.TIME, Math.floor((performance.now() - this.timerStart) / 1000));
        let nextTimer = (performance.now() - this.timerStart) % 1000;
        setTimeout(this.doTimer.bind(this), 1000 - nextTimer);
    }

    onPlaygroundClick(event) {
        if (!this.interactuable) return false;
        if (!this.gameStarted) {
            this.startGame();
        }

        if (this.model.isRevealed(event.detail.x, event.detail.y)) {
            return false; // Noop
        }

        if (this.model.isMine(event.detail.x, event.detail.y)) {
            this.stopGame();
            this.view.gameLost({ x: event.detail.x, y: event.detail.y });
        } else {
            this.model.revealTile(event.detail.x, event.detail.y);
        }

        if (this.isComplete()) {
            this.stopGame();
            this.view.gameWon();
        }
    }
    
    onPlaygroundRightClick(event) {
        if (!this.interactuable) return false;
        if (!this.gameStarted) {
            this.startGame();
        }

        if (this.model.isRevealed(event.detail.x, event.detail.y)) {
            return false; // Noop
        }

        switch (this.model.getTileType(event.detail.x, event.detail.y)) {
            case Model.MarkTypes.UNMARKED:
            case Model.MarkTypes.UNKNOWN:
                // Just flag
                this.model.markTileFlag(event.detail.x, event.detail.y);
            break;
            case Model.MarkTypes.FLAGGED:
                // Unmark if !global.marks, mark (?) if true
                if (this.globalOptions.marks) {
                    this.model.markTile(event.detail.x, event.detail.y);
                } else {
                    this.model.unmarkTile(event.detail.x, event.detail.y);
                }
            break;
            case Model.MarkTypes.MARKED:
                // Always unmark
                this.model.unmarkTile(event.detail.x, event.detail.y);
            break;
        }
    }

    isComplete() {
        return this.model.revealed === this.model.cols * this.model.rows - this.model.mineCount;
    }

    resetGame() {
        // TODO
    }

    static generateMines(rowCount, colCount, mineCount) {

        let max = rowCount * colCount - 1;
        let mines = [];
    
        while (mines.length < mineCount) {
            let rnd = randomInt(0, max);
            if (!mines.includes(rnd)) {
                mines.push(rnd);
            }
        }
    
        return mines;
    }
}

export { Game };