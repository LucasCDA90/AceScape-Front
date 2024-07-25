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
        <div className="flex justify-center mb-4 space-x-4">
            <button
                onClick={startGame}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={gameStarted && !gameOver} // Le bouton Start Game est desactive si le jeu a commence et n'est pas termine
            >
                Start Game
            </button>
            <button
                onClick={hit}
                className="bg-green-500 text-white px-4 py-2 rounded"
                disabled={!gameStarted || gameOver} // Desactiver le bouton Hit si le jeu n'a pas commence ou si le jeu est termine
            >
                Hit
            </button>
            <button
                onClick={stand}
                className="bg-red-500 text-white px-4 py-2 rounded"
                disabled={!gameStarted || gameOver} // Desactiver le bouton Stand si le jeu n'a pas commence ou si le jeu est termine
            >
                Stand
            </button>
        </div>
    );
};
