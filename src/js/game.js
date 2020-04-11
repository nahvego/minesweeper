import { Model } from './model';
import { View } from './view';
import { randomInt } from './utils';

class Game {
    constructor({ cols, rows, mineCount, mines = [] }) {

        if (mines.length === 0) {
            // Generar minas
            mines = Game.generateMines(rows, cols, mineCount);
        }

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

        this.model.markTileFlag(event.detail.x, event.detail.y);
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