import c0   from "../static/number_0.gif";
import c1   from "../static/number_1.gif";
import c2   from "../static/number_2.gif";
import c3   from "../static/number_3.gif";
import c4   from "../static/number_4.gif";
import c5   from "../static/number_5.gif";
import c6   from "../static/number_6.gif";
import c7   from "../static/number_7.gif";
import c8   from "../static/number_8.gif";
import c9   from "../static/number_9.gif";
import cNEG from "../static/number_neg.gif";
const COUNTER_NEG = cNEG;
const COUNTER_SRC = [ c0, c1, c2, c3, c4, c5, c6, c7, c8, c9 ];

const FACE_BASE = "0px";
const FACE_LOST = "-80px";
const FACE_WON = "-120px";

class View extends EventTarget {
    constructor({ model }) {
        super();

        this.model = model;
        this.tileSize = 20;

        this.playground = document.getElementById("playground");
        this.face = document.getElementById("face-button");
        this.controls = document.getElementById("controls");

        this.controls.style.setProperty("--face-position", FACE_BASE);

        this.playground.style.setProperty("--cols", this.model.cols);
        this.playground.style.setProperty("--rows", this.model.rows);

        this.playground.style.setProperty("--tile-size", this.tileSize + "px");

        this.setNumber(View.Counters.MINES, this.model.mineCount);

        this.initViewListeners();
    }

    initViewListeners() {
        this.face.addEventListener("click", this.onFaceClick.bind(this));
        this.playground.addEventListener("click", this.onPlaygroundClick.bind(this));
        this.playground.addEventListener("contextmenu", this.onPlaygroundRightClick.bind(this));
    }

    onFaceClick(event) {
        event.preventDefault();
        this.dispatch("reset");
    }

    onPlaygroundClick(event) {
        event.preventDefault();
        this.dispatch("click", this.locateClickFromEvent(event));
    }

    onPlaygroundRightClick(event) {
        event.preventDefault();
        this.dispatch("rightClick", this.locateClickFromEvent(event));
    }

    dispatch(eventName, detail) {
        let event = new CustomEvent(eventName, {
            detail,
        });
        this.dispatchEvent(event);
    }

    locateClickFromEvent(event) {
        let box = this.playground.getBoundingClientRect();
        let translationX = event.clientX - box.left;
        let translationY = event.clientY - box.top;
        let row = Math.floor(translationY / this.tileSize);
        let col = Math.floor(translationX / this.tileSize);

        console.log(`Click en {${col},${row}}`)
        return {
            x: col,
            y: row,
        };
    }

    revealMap(map) {
        // map = [ {x, y, adjacent } ]
        map.forEach(({ x, y, adjacent}) => this.setTile(x, y, View.Tiles.NUMBER, adjacent));
    }
    setTile(x, y, tileType, n) {
        let qs = this.playground.querySelector(`[data-row="${y}"][data-col="${x}"]`);

        let tile = document.createElement("i");
        tile.classList.add("tile");
        tile.dataset.row = y;
        tile.dataset.col = x;
        tile.style.gridColumn = x + 1; // grid is 1-indexed
        tile.style.gridRow = y + 1;
        switch (tileType) {
            case View.Tiles.FLAG:
                tile.classList.add("flag");
            break;
            case View.Tiles.MARK:
                tile.classList.add("mark");
            break;
            case View.Tiles.NUMBER:
                tile.classList.add(`number-${n}`);
            break;
            case View.Tiles.MINE:
                tile.classList.add("mine");
            break;
            case View.Tiles.MINE_BOOM:
                tile.classList.add("mine-exploded");
            break;
        }
        
        if (qs) {
            qs.replaceWith(tile);
        } else {
            this.playground.appendChild(tile);
        }
    }

    // ¿No necesita la view una referencia al model?
    gameLost(lostCoords) {
        this.controls.style.setProperty("--face-position", FACE_LOST);
        for (let minePos of this.model.mineList) {
            this.setTile(
                minePos.x,
                minePos.y,
                lostCoords.x === minePos.x && lostCoords.y === minePos.y ? View.Tiles.MINE_BOOM : View.Tiles.MINE
            );
        }
    }

    gameWon() {
        this.controls.style.setProperty("--face-position", FACE_WON);
    }

    setNumber(which, n) {
        let counter;
        switch (which) {
            case View.Counters.MINES:
                counter = document.getElementById("mine-counter");
            break;
            case View.Counters.TIME:
                counter = document.getElementById("time-counter");
            break;
        }

        let isNegative = false;
        if (n < 0) {
            isNegative = true;
            n *= -1;
        }
        counter.querySelector(`img:nth-child(1)`).src = isNegative ? COUNTER_NEG : COUNTER_SRC[Math.floor(n / 100)];
        counter.querySelector(`img:nth-child(2)`).src = COUNTER_SRC[Math.floor((n % 100) / 10)];
        counter.querySelector(`img:nth-child(3)`).src = COUNTER_SRC[Math.floor(n % 10)];
    }
}

Object.getPrototypeOf(View).Tiles = {
    FLAG: 0,
    MARK: 1,
    NUMBER: 2,
    MINE: 3,
    MINE_BOOM: 4,
};

Object.getPrototypeOf(View).Counters = {
    MINES: 0,
    TIME: 1,
};

export { View };