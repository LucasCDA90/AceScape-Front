type GameControlsProps = {
    startGame: () => void;
    hit: () => void;
    stand: () => void;
    gameOver: boolean;
};

// Composant pour les boutons de contrôle du jeu
export const GameControls = ({ startGame, hit, stand, gameOver }: GameControlsProps) => (
    <div className="mb-4">
        <button onClick={startGame} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Start Game</button>
        <button onClick={hit} disabled={gameOver} className={`bg-green-500 text-white px-4 py-2 rounded mr-2 ${gameOver ? 'opacity-50 cursor-not-allowed' : ''}`}>Hit</button>
        <button onClick={stand} disabled={gameOver} className={`bg-red-500 text-white px-4 py-2 rounded ${gameOver ? 'opacity-50 cursor-not-allowed' : ''}`}>Stand</button>
    </div>
);
