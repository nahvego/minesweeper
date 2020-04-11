import { View } from './view';

class Model {

    constructor({ cols, rows, mines }) {
        this.cols = cols;
        this.rows = rows;
        this.mineCount = mines.length;
        [ this.field, this.mineList ] = this.parseField(mines);
        console.log(this.field);
        console.log(this.mineList);

        // Intermediate - could be inferred from this.field to avoid mishaps
        this.markedFlags = 0;
    }

    bindView(view) {
        this.view = view;
    }

    get revealed() {
        return this._revealed || 0;
    }

    set revealed(n) {
        if (!this._revealed) this._revealed = 0;
        this._revealed += n;
    }

    parseField(mines) {
        let fld = {};
        let lst = [];
        for (let c = 0; c < this.cols; c++) {
            fld[c] = {};
        }

        for (let i of mines) {
            // i = y*rows + x;
            let y = Math.floor(i / this.cols);
            let x = i - this.cols * y;
            fld[x][y] = Model.FieldFlags.MINE;
            lst.push({ x, y });
        }
        return [ fld, lst ];
    }

    isMine(x, y) {
        return this.field[x][y] !== undefined && (this.field[x][y] & Model.FieldFlags.MINE) > 0;
    }

    isRevealed(x, y) {
        return this.field[x][y] !== undefined && (this.field[x][y] & Model.FieldFlags.REVEALED) > 0;
    }

    // isRecursive haces las veces de flagholder
    revealTile(x, y, isRecursive) {
        if (this.isMine(x, y)) { throw new Error("Mine"); }
        if (this.isRevealed(x, y)) { return []; }
        let map = [];
        let adjacent = this.getAdjacentCount(x, y);
        map.push({ x, y, adjacent });
        this.field[x][y] |= Model.FieldFlags.REVEALED;

        if (adjacent === 0) {
            // top left
            if (x > 0 && y > 0)                             
                map = map.concat(this.revealTile(x - 1, y - 1, true));
            // top
            if (y > 0)                                      
                map = map.concat(this.revealTile(x,     y - 1, true));
            // top right
            if (y > 0 && x < (this.cols - 1))               
                map = map.concat(this.revealTile(x + 1, y - 1, true));
            // left
            if (x > 0)                                      
                map = map.concat(this.revealTile(x - 1, y,     true));
            // right
            if (x < (this.cols - 1))                        
                map = map.concat(this.revealTile(x + 1, y,     true));
            // bottom left
            if (x > 0 && y < (this.rows - 1))               
                map = map.concat(this.revealTile(x - 1, y + 1, true));
            // bottom
            if (y < (this.rows - 1))                        
                map = map.concat(this.revealTile(x,     y + 1, true));
            // bottom right
            if (x < (this.cols - 1) && y < (this.rows - 1)) 
                map = map.concat(this.revealTile(x + 1, y + 1, true));
        }

        if (!isRecursive) {
            this.revealed = map.length;
            this.view.revealMap(map);
        } else {
            return map;
        }
    }

    markTileFlag(x, y) {
        this.field[x][y] |= Model.FieldFlags.FLAG;
        this.markedFlags++;

        this.view.setTile(x, y, View.Tiles.FLAG);

        // Aquí o en setTile? o en Game?
        this.view.setNumber(View.Counters.MINES, this.mineCount - this.markedFlags);
    }

    getAdjacentCount(x, y) {
        let count = 0;
        if (x > 0 && y > 0                             && this.isMine(x - 1, y - 1)) count++;
        if (y > 0                                      && this.isMine(x,     y - 1)) count++;
        if (y > 0 && x < (this.cols - 1)               && this.isMine(x + 1, y - 1)) count++;
        if (x > 0                                      && this.isMine(x - 1, y))     count++;
        if (x < (this.cols - 1)                        && this.isMine(x + 1, y))     count++;
        if (x > 0 && y < (this.rows - 1)               && this.isMine(x - 1, y + 1)) count++;
        if (y < (this.rows - 1)                        && this.isMine(x,     y + 1)) count++;
        if (x < (this.cols - 1) && y < (this.rows - 1) && this.isMine(x + 1, y + 1)) count++;

        return count;
    }
}

Object.getPrototypeOf(Model).FieldFlags = {
    MINE:     0b1,
    REVEALED: 0b10,
    FLAG:     0b100,
    MARK:     0b1000,
};

Object.getPrototypeOf(Model).RevealFlags = {
    UP:         0b1,
    UP_RIGHT:   0b10,
    RIGHT:      0b100,
    DOWN_RIGHT: 0b1000,
    DOWN:       0b10000,
    DOWN_LEFT:  0b100000,
    LEFT:       0b1000000,
    UP_LEFT:    0b10000000,
};

export { Model };