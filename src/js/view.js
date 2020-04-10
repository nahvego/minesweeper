class View extends EventTarget {
    constructor() {
        super();

        this.playground = document.getElementById("playground");
        this.face = document.getElementById("face-button");

        this.initViewListeners();
    }

    initViewListeners() {
        this.face.addEventListener("click", this.onFaceClick);
        this.playground.addEventListener("click", this.onPlaygroundClick);
        this.playground.addEventListener("contextmenu", this.onPlaygroundRightClick);
    }

    onFaceClick(event) {
        event.preventDefault();
        this.dispatch("reset");
    }

    onPlaygroundClick(event) {
        event.preventDefault();
        this.dispatch("click");
    }

    onPlaygroundRightClick(event) {
        event.preventDefault();
        this.dispatch("rightClick");
    }

    dispatch(eventName, detail) {
        let event = new CustomEvent(eventName, {
            detail,
        });
        this.dispatchEvent(event);
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
        tile.style.gridColumn = x;
        tile.style.gridRow = y;
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
        }
        
        if (qs) {
            qs.replaceWith(tile);
        } else {
            qs.appendChild(tile);
        }
    }
}

View.prototype.Tiles = {
    FLAG: 0,
    MARK: 1,
    NUMBER: 2,
};

export { View };