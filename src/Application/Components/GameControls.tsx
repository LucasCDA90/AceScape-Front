import React from 'react';

interface GameControlsProps {
    startGame: () => void;
    hit: () => void;
    stand: () => void;
    gameOver: boolean;
    gameStarted: boolean;
    replayGame: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({ startGame, hit, stand, gameOver, gameStarted, replayGame }) => {
    return (
        <div className="flex justify-center space-x-4 mb-4">
            {!gameStarted && !gameOver && (
                <button 
                    onClick={startGame} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={gameStarted || gameOver}
                >
                    Commencer une partie
                </button>
            )}
            {gameStarted && !gameOver && (
                <>
                    <button 
                        onClick={hit} 
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                        disabled={!gameStarted || gameOver}
                    >
                        Tirer
                    </button>
                    <button 
                        onClick={stand} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        disabled={!gameStarted || gameOver}
                    >
                        Rester
                    </button>
                </>
            )}
            {gameOver && (
                <button 
                    onClick={replayGame} 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Rejouer
                </button>
            )}
        </div>
    );
};
