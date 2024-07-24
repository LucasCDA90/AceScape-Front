import React, { useState } from 'react';
import { Card as CardType, getDeck, shuffleDeck, drawCard, getHandValue, checkForBlackjack, checkForBust } from '../../utils/blackjack';
import { GameControls } from '../Components/GameControls';
import { Hand } from '../Components/Hand';

// Composant principal pour la page du jeu de Blackjack
export const PageBlackJack = () => {
    const [deck, setDeck] = useState(shuffleDeck(getDeck()));
    const [playerHand, setPlayerHand] = useState<CardType[]>([]);
    const [dealerHand, setDealerHand] = useState<CardType[]>([]);
    const [message, setMessage] = useState<string>('');
    const [gameOver, setGameOver] = useState<boolean>(false);

    // Fonction pour démarrer une nouvelle partie
    const startGame = () => {
        let newDeck = shuffleDeck(getDeck());
        let playerCards = [drawCard([], newDeck), drawCard([], newDeck)];
        let dealerCards = [drawCard([], newDeck), drawCard([], newDeck)];

        setDeck(newDeck);
        setPlayerHand(playerCards);
        setDealerHand(dealerCards);
        setGameOver(false);

        if (checkForBlackjack(playerCards)) {
            setMessage('Blackjack! You win!');
            setGameOver(true);
        } else {
            setMessage('Game started. Hit or stand?');
        }
    };

    // Fonction pour piocher une carte pour le joueur
    const hit = () => {
        if (gameOver) return;

        let newDeck = [...deck];
        let newPlayerHand = [...playerHand];
        drawCard(newPlayerHand, newDeck);

        setDeck(newDeck);
        setPlayerHand(newPlayerHand);

        if (checkForBust(newPlayerHand)) {
            setMessage('Bust! You lose.');
            setGameOver(true);
        } else if (checkForBlackjack(newPlayerHand)) {
            setMessage('Blackjack! You win!');
            setGameOver(true);
        } else {
            setMessage('Hit or stand?');
        }
    };

    // Fonction pour arrêter de piocher et laisser le dealer jouer
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

        if (checkForBust(newDealerHand) || playerValue > dealerValue) {
            setMessage('You win!');
        } else if (playerValue === dealerValue) {
            setMessage('Push.');
        } else {
            setMessage('Dealer wins.');
        }

        setGameOver(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Jeu de Blackjack</h1>
                <GameControls startGame={startGame} hit={hit} stand={stand} gameOver={gameOver} />
                <Hand title="Player's Hand" hand={playerHand} />
                <Hand title="Dealer's Hand" hand={dealerHand} />
                <div className="mt-4">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};
