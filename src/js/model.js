import View from './view';

class Model {

    constructor({ cols, rows, mines }) {
        this.cols = cols;
        this.rows = rows;
        this.view = view;
        this.field = this.parseField(mines);
    }

    get revealed() {
        return this._revealed || 0;
    }

    set revealed(n) {
        if (!this._revealed) this._revealed = 0;
        this._revealed += n;
    }

    parseField(mines) {
        let field = {};
        for (let c = 0; c < this.cols; c++) {
            field[c] = {};
        }

        for (let i of mines) {
            // i = y*rows + x;
            let y = Math.floor(i / this.cols);
            let x = i - this.cols * y;
            field[x][y] = Model.FieldEnum.MINE;
        }
    }

    isMine(x, y) {
        return field[x][y] && field[x][y] === Model.FieldEnum.MINE;
    }

    isRevealed(x, y) {
        return field[x][y] && field[x][y] !== Model.FieldEnum.MINE;
    }

    revealTile(x, y, isRecursive) {
        if (this.isMine(x, y)) { throw new Error("Mine"); }
        let map = [];
        let adjacent = this.getAdjacentCount(x, y);
        map.push({ x, y, adjacent });
        this.field[x][y] = Model.FieldEnum.REVEALED;

        if (adjacent === 0) {
            if (x > 0 && y > 0)                             
                map = map.concat(this.revealTile(x - 1, y - 1, true));
            if (y > 0)                                      
                map = map.concat(this.revealTile(x,     y - 1, true));
            if (y > 0 && x < (this.cols - 1))               
                map = map.concat(this.revealTile(x + 1, y - 1, true));
            if (x > 0)                                      
                map = map.concat(this.revealTile(x - 1, y,     true));
            if (x < (this.cols - 1))                        
                map = map.concat(this.revealTile(x + 1, y,     true));
            if (x > 0 && y < (this.rows - 1))               
                map = map.concat(this.revealTile(x - 1, y + 1, true));
            if (y < (this.rows - 1))                        
                map = map.concat(this.revealTile(x,     y + 1, true));
            if (x < (this.cols - 1) && y < (this.rows - 1)) 
                map = map.concat(this.revealTile(x + 1, y + 1, true));
        }

        if (!isRecursive) this.view.revealMap(map);
    }

    markTileFlag(x, y) {
        this.field[x][y] = Model.FieldEnum.FLAG;

        this.view.setTile(x, y, View.Tiles.FLAG);
    }

    getAdjacentCount(x, y) {
        let count = 0;
        if (this.isMine(x - 1, y - 1)) count++;
        if (this.isMine(x,     y - 1)) count++;
        if (this.isMine(x + 1, y - 1)) count++;
        if (this.isMine(x - 1, y))     count++;
        if (this.isMine(x + 1, y))     count++;
        if (this.isMine(x - 1, y + 1)) count++;
        if (this.isMine(x,     y + 1)) count++;
        if (this.isMine(x + 1, y + 1)) count++;

        return count;
    }
}

Model.prototype.FieldEnum = {
    MINE: 0,
    REVEALED: 1,
    FLAG: 2,
};

export { Model };