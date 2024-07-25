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
                disabled={gameStarted && !gameOver} // Le bouton Start Game est désactivé si le jeu a commencé et n'est pas terminé
            >
                Start Game
            </button>
            <button
                onClick={hit}
                className="bg-green-500 text-white px-4 py-2 rounded"
                disabled={!gameStarted || gameOver} // Désactiver le bouton Hit si le jeu n'a pas commencé ou si le jeu est terminé
            >
                Hit
            </button>
            <button
                onClick={stand}
                className="bg-red-500 text-white px-4 py-2 rounded"
                disabled={!gameStarted || gameOver} // Désactiver le bouton Stand si le jeu n'a pas commencé ou si le jeu est terminé
            >
                Stand
            </button>
        </div>
    );
};
