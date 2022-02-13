import { SlidingPuzzleGame } from './sliding-puzzle-game.js';

try {
    new SlidingPuzzleGame({
        size: 3,
        imageUrl: './images/puzzle.jpg',
        board: 'board',
        shuffleButton: 'shuffle-button',
        resetButton: 'reset-button',
    });
} catch (e) {
    console.error(e);
}
