import { Model } from './model';
import { View } from './view';
import { randomInt } from './utils';

class Game {
    constructor({ cols, rows, mineCount, mines = [] }) {

        if (mines.length === 0) {
            // Generar minas
            mines = Game.generateMines(rows, cols, mineCount);
        }

        this.view = new View();
        this.model = new Model({ cols, rows, mines, view: this.view });

        this.gameStarted = false;
        this.interactuable = true;

        this.initListeners();
    }

    initListeners() {
        this.view.addEventListener("click", this.onPlaygroundClick);
        this.view.addEventListener("rightClick", this.onPlaygroundRightClick)
        this.view.addEventListener("reset", this.resetGame);
    }

    onPlaygroundClick(event) {
        if (!this.interactuable) return false;
        this.gameStarted = true;

        if (this.model.isRevealed(event.detail.x, event.detail.y)) {
            return false; // Noop
        }

        if (this.model.isMine(event.detail.x, event.detail.y)) {
            alert("LOST!");
            this.interactuable = false;
        } else {
            this.model.revealTile(event.detail.x, event.detail.y);
        }

        if (this.isComplete()) {
            alert("WON!");
            this.interactuable = false;
        }
    }
    
    onPlaygroundRightClick(event) {
        if (!this.interactuable) return false;
        this.gameStarted = true;

        if (this.model.isRevealed(event.detail.x, event.detail.y)) {
            return false; // Noop
        }

        this.model.markTileFlag(event.detail.x, event.detail.y);
    }

    isComplete() {
        return this.model.revealed === this.model.cols * this.model.rows - this.mineCount;
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