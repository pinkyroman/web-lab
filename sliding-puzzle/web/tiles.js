import { TileMap, BLANK_TILE, Direction } from './tile-map.js';

export class Tiles {
    #imageUrl;
    #size;
    #tileMap;
    #boardWidth;
    #boardHeight;
    #tileElements;
    #tileWidth;
    #tileHeight;
    
    constructor(imageUrl, size, boardWidth, boardHeight, callback) {
        this.#imageUrl = imageUrl;
        this.#size = size;
        this.#tileMap = new TileMap(size);
        this.#boardWidth = boardWidth;
        this.#boardHeight = boardHeight;
        this.#tileWidth = Math.floor(boardWidth / this.#size);
        this.#tileHeight = Math.floor(boardHeight / this.#size);
        this.#createTileElements(callback);
    }

    #createTileElements(callback) {
        this.#tileElements = [];

        const srcImage = new Image();
        srcImage.src = this.#imageUrl;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        srcImage.onload = () => {
            const sliceWidth = canvas.width = Math.floor(srcImage.width / this.#size);
            const sliceHeight = canvas.height =Math.floor(srcImage.height / this.#size);
            const numberOfParts = this.#size * this.#size - 1;

            for (let i = 0; i < numberOfParts; i++) {
                const sx = sliceWidth * (i % this.#size);
                const sy = sliceHeight * Math.floor(i / this.#size);
                
                ctx.drawImage(srcImage, 
                    sx, sy, sliceWidth, sliceHeight,
                    0, 0, sliceWidth, sliceHeight);                
                this.#tileElements.push(this.#createTileElement(i, canvas.toDataURL()));
            }

            if (callback) {
                callback();
                console.log(this.#tileMap.resolved);
            }
        };
    }

    #createTileElement(id, url) {
        const tileWidth = this.#tileWidth;
        const tileHeight = this.#tileHeight;

        const element = document.createElement('div');
        element.id = id;
        element.classList.add('puzzle-tile');

        const style = element.style;
        style.width = `${tileWidth}px`;
        style.height = `${tileHeight}px`;
        style.backgroundImage = `url(${url})`;
        style.backgroundSize = `${tileWidth}px ${tileWidth}px`;

        element.addEventListener('click', () => {
            const direction = this.#tileMap.move(parseInt(element.id));
            this.#moveTileElement(element,direction);
            if (this.#tileMap.resolved) {
                setTimeout(() => {
                    alert('Congratulation! You Win!');
                }, 650);
            }
        });

        return element;
    }

    #moveTileElement(element, direction) {
        const style = element.style;
        switch (direction) {
            case Direction.Up:
                style.top = `${parseInt(style.top) - this.#tileHeight}px`;
                break;
            case Direction.Right:
                style.left = `${parseInt(style.left) + this.#tileWidth}px`;
                break;
            case Direction.Down:
                style.top = `${parseInt(style.top) + this.#tileHeight}px`;
                break;
            case Direction.Left:
                style.left = `${parseInt(style.left) - this.#tileWidth}px`;
                break;
            default:
                console.log(`nowhre to go.`);
                break;
        }
    }

    get elements() {
        const fragments = new DocumentFragment();        
        const map = this.#tileMap;

        for (let obj of map) {
            if (obj.id !== BLANK_TILE) {
                const top = `${this.#tileHeight * obj.row}px`;
                const left = `${this.#tileWidth * obj.col}px`;

                const element = this.#tileElements[obj.id];
                const style = element.style;
                style.top = top;
                style.left = left;
                fragments.append(element);
            }
        }
        return fragments;
    }

    shuffle() {
        this.#tileMap.shuffle();
    }

    reset() {
        this.#tileMap.reset();
    }
}