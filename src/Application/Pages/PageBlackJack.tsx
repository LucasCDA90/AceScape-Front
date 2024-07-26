import { useState } from 'react';
import { Card as CardType, getDeck, shuffleDeck, drawCard, getHandValue, checkForBlackjack, checkForBust } from '../../Module/utils/blackjack';
import { GameControls } from '../Components/GameControls';
import { Hand } from '../Components/Hand';

// Hooks pour gérer l'état des composants
export const PageBlackJack = () => {
    const [deck, setDeck] = useState(shuffleDeck(getDeck()));
    const [playerHand, setPlayerHand] = useState<CardType[]>([]);
    const [dealerHand, setDealerHand] = useState<CardType[]>([]);
    const [message, setMessage] = useState<string>('');
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    // Fonction pour démarrer une partie
    const startGame = () => {
        let newDeck = shuffleDeck(getDeck());
        let playerCards = [drawCard([], newDeck), drawCard([], newDeck)];
        let dealerCards = [drawCard([], newDeck), drawCard([], newDeck)];

        setDeck(newDeck);
        setPlayerHand(playerCards);
        setDealerHand(dealerCards);
        setGameOver(false);
        setGameStarted(true);

        if (checkForBlackjack(playerCards)) {
            setMessage('Blackjack! Vous gagnez !');
            setGameOver(true);
        } else {
            setMessage('Partie commencée. Tirer ou rester ?');
        }
    };

    // Fonction pour tirer une carte (joueur)
    const hit = () => {
        if (gameOver) return;

        let newDeck = [...deck];
        let newPlayerHand = [...playerHand];
        drawCard(newPlayerHand, newDeck);

        setDeck(newDeck);
        setPlayerHand(newPlayerHand);

        if (checkForBust(newPlayerHand)) {
            setMessage('Dépassement ! Vous perdez.');
            setGameOver(true);
        } else if (checkForBlackjack(newPlayerHand)) {
            setMessage('Blackjack! Vous gagnez !');
            setGameOver(true);
        } else {
            setMessage('Tirer ou rester ?');
        }
    };

    // Fonction pour arrêter de tirer des cartes et laisser le dealer jouer
    const stand = () => {
        if (gameOver) return;

        let newDeck = [...deck];
        let newDealerHand = [...dealerHand];

        // Le dealer pioche jusqu'à avoir au moins 17 points
        while (getHandValue(newDealerHand) < 17) {
            drawCard(newDealerHand, newDeck);
        }

        setDeck(newDeck);
        setDealerHand(newDealerHand);

        const playerValue = getHandValue(playerHand);
        const dealerValue = getHandValue(newDealerHand);

        if (checkForBust(newDealerHand)) {
            setMessage('Le croupier dépasse ! Vous gagnez !');
        } else if (playerValue > dealerValue) {
            setMessage('Vous gagnez !');
        } else if (playerValue === dealerValue) {
            setMessage('Égalité.');
        } else {
            setMessage('Le croupier gagne.');
        }

        setGameOver(true);
        setGameStarted(false); // Le jeu est terminé
    };

    return (
        <div className="min-h-screen bg-green-900 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 text-center">Jeu de Blackjack</h1>
                <GameControls 
                    startGame={startGame} 
                    hit={hit} 
                    stand={stand} 
                    gameOver={gameOver} 
                    gameStarted={gameStarted} // Passer l'état du jeu
                />
                <Hand title="Main du Joueur" hand={playerHand} />
                <Hand title="Main du Croupier" hand={dealerHand} />
                <div className="mt-4">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};
