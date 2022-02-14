export const BLANK_TILE = -1;
export const Direction = Object.freeze({
    Up: Symbol('up'),
    Right: Symbol('right'),
    Down: Symbol('down'),
    Left: Symbol('left'),
    None: Symbol('none')
});

export class TileMap {
    #size;
    #map;

    constructor(size) {
        if (size < 2) {
            throw new Error(`size is too small: ${size}`);
        }
        this.#size = size;
        this.#initialize();
    }

    #initialize() {
        this.#map = {};
        const map = this.#map;
        const size = this.#size;        
        let objId = 0;
        
        for (let row = 0; row < size; row++) {
            map[row] = [];
            for (let col = 0; col < size; col++) {
                map[row].push(objId++);
            }
        }
        map[size - 1][size - 1] = BLANK_TILE;
    }

    [Symbol.iterator]() {
        const map = this.#map;
        const size = this.#size;
        let row = 0;
        let col = 0;

        return {
            next() {
                if (row === size) {
                    return { done: true };
                }
                
                const currentCol = col;
                const currentRow = row;
                const id = map[row][col];

                if (++col === size) {
                    col = 0;
                    row++;
                }

                return { 
                    value: {
                        row: currentRow,
                        col: currentCol,
                        id: id,
                    }, 
                    done: false 
                };
            }
        };
    }

    move(id) {
        const pos = this.#getPosition(id);
        if (!pos) {
            return undefined;
        }
        
        if (this.#tryMoveToUp(pos)) {
            return Direction.Up;
        }
        if (this.#tryMoveToRight(pos)) {
            return Direction.Right;
        }
        if (this.#tryMoveToDown(pos)) {
            return Direction.Down;
        }
        if (this.#tryMoveToLeft(pos)) {
            return Direction.Left;
        }
        return Direction.None;
    }

    #getPosition(id) {
        return [...this].find((item) => {
            if (item.id === id) {
                return {
                    row: item.row,
                    col: item.col,
                };
            }
        });
    }

    #tryMoveToUp(pos) {
        const map = this.#map;
        const col = pos.col;
        const targetRow = pos.row - 1;

        if (targetRow >= 0 && map[targetRow][col] === BLANK_TILE) {
            this.#exchangeObjectsAt(pos, { row: targetRow, col: col });
            return true;
        } 
        return false;
    }

    #exchangeObjectsAt(pos1, pos2) {
        const map = this.#map;        
        const temp = map[pos1.row][pos1.col];        
        map[pos1.row][pos1.col] = map[pos2.row][pos2.col];
        map[pos2.row][pos2.col] = temp;
    }

    #tryMoveToRight(pos) {
        const map = this.#map;
        const size = this.#size;
        const row = pos.row;
        const targetCol = pos.col + 1;

        if (targetCol < size && map[row][targetCol] === BLANK_TILE) {
            this.#exchangeObjectsAt(pos, { row: row, col: targetCol });
            return true;
        }
        return false;
    }

    #tryMoveToDown(pos) {
        const map = this.#map;
        const size = this.#size;
        const col = pos.col;
        const targetRow = pos.row + 1;

        if (targetRow < size && map[targetRow][col] === BLANK_TILE) {
            this.#exchangeObjectsAt(pos, { row: targetRow, col: col });
            return true;
        }
        return false;
    }

    #tryMoveToLeft(pos) {
        const map = this.#map;
        const row = pos.row;
        const targetCol = pos.col - 1;

        if (targetCol >= 0 && map[row][targetCol] === BLANK_TILE) {
            this.#exchangeObjectsAt(pos, { row: row, col: targetCol });
            return true;
        }
        return false;
    }

    get resolved() {
        const map = this.#map;
        const blankRow = this.#size - 1;
        const blankCol = blankRow;
        let id = 0;

        for (const item of this) {
            if (item.id !== id) {
                if (item.row === blankRow 
                    && item.col === blankCol 
                    && item.id === BLANK_TILE) {
                    return true;
                }
                return false;
            }    
            id++;
        }
        return true;
    }

    shuffle(count = 100) {
        for (let i = 0; i < count; i++) {
            this.#exchangeObjectsAt(
                this.#getRandomPosition(), 
                this.#getRandomPosition()
            );
        }
    }

    #getRandomPosition() {
        const size = this.#size;
        function random() {
            return Math.floor(Math.random() * size);
        }

        return {
            row: random(),
            col: random(),
        }
    }

    reset() {
        this.#initialize();
    }
}