import React from 'react';

interface GameControlsProps {
    startGame: () => void;
    hit: () => void;
    stand: () => void;
    gameOver: boolean;
    disabled: boolean; // Ajoutez cette propriété
}

export const GameControls: React.FC<GameControlsProps> = ({ startGame, hit, stand, gameOver, disabled }) => {
    return (
        <div className="flex justify-center mb-4 space-x-4">
            <button
                onClick={startGame}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={gameOver} // Désactiver ce bouton quand le jeu est terminé
            >
                Start Game
            </button>
            <button
                onClick={hit}
                className="bg-green-500 text-white px-4 py-2 rounded"
                disabled={disabled || gameOver} // Désactiver ce bouton si disabled est true ou si le jeu est terminé
            >
                Hit
            </button>
            <button
                onClick={stand}
                className="bg-red-500 text-white px-4 py-2 rounded"
                disabled={disabled || gameOver} // Désactiver ce bouton si disabled est true ou si le jeu est terminé
            >
                Stand
            </button>
        </div>
    );
};
