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
            setMessage('Blackjack ! Vous gagnez !');
            setGameOver(true);
        } else {
            setMessage('Partie commencée. Tirer ou rester ?');
        }
    };

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
            setGameStarted(false);
        } else if (checkForBlackjack(newPlayerHand)) {
            setMessage('Blackjack ! Vous gagnez !');
            setGameOver(true);
            setGameStarted(false);
        } else {
            setMessage('Tirer ou rester ?');
        }
    };

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
        setGameStarted(false);
    };

    const replayGame = () => {
        let newDeck = shuffleDeck(getDeck());
        let newPlayerHand = [drawCard([], newDeck), drawCard([], newDeck)];
        let newDealerHand = [drawCard([], newDeck), drawCard([], newDeck)];

        setDeck(newDeck);
        setPlayerHand(newPlayerHand);
        setDealerHand(newDealerHand);
        setMessage('');
        setGameOver(false);
        setGameStarted(true); // Réinitialiser le statut du jeu pour permettre de jouer de nouveau
    };

    return (
        <div className="min-h-screen bg-green-800 flex flex-col relative">

            <div className="flex-1 flex flex-col items-center justify-center bg-green-900 text-white relative">
                <h1 className="text-4xl font-bold mb-8 mt-">Jeu de Blackjack</h1>
                <Hand title="Main du Croupier" hand={dealerHand} />
            </div>

            {gameOver && (
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center z-20">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
                        <p className="text-xl font-semibold">{message}</p>
                    </div>
                </div>
            )}

            <div className="flex-1 flex flex-col items-center justify-center bg-green-800 text-white relative">
                <GameControls 
                    startGame={startGame} 
                    hit={hit} 
                    stand={stand} 
                    gameOver={gameOver} 
                    gameStarted={gameStarted}
                    replayGame={replayGame}
                />
                <Hand title="Main du Joueur" hand={playerHand} />
            </div>
        </div>
    );
};
