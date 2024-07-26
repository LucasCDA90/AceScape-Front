import React from 'react';

interface GameControlsProps {
    startGame: () => void;
    hit: () => void;
    stand: () => void;
    gameOver: boolean;
    gameStarted: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({ startGame, hit, stand, gameOver, gameStarted }) => {
    return (
        <div className="flex justify-center mb-6 space-x-4">
            <button
                onClick={startGame}
                className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:bg-blue-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${!gameStarted && !gameOver ? 'opacity-100' : 'opacity-50'}`}
                disabled={gameStarted && !gameOver}
            >
                Commencer la Partie
            </button>
            <button
                onClick={hit}
                className={`bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:bg-green-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${!gameStarted || gameOver ? 'opacity-50' : 'opacity-100'}`}
                disabled={!gameStarted || gameOver}
            >
                Tirer
            </button>
            <button
                onClick={stand}
                className={`bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:bg-red-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${!gameStarted || gameOver ? 'opacity-50' : 'opacity-100'}`}
                disabled={!gameStarted || gameOver}
            >
                Rester
            </button>
        </div>
    );
};
