import twelve from '../images/12_hand.svg';
import twentyone from '../images/21_hand.svg';
import cards from '../images/52_cards.svg'

export const PageRules = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white p-6">
            <div className="max-w-2xl w-full text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Card Values</h2>
                <p className="text-lg mb-4">
                    Cards 2 through 10 are worth their face value, face cards (Jack, Queen, King) are worth 10, and Aces can be worth 1 or 11, depending on what's better for your hand.
                </p>
                <img src={cards} alt="12 Points Hand" className="" />
                <p className="text-lg mb-4">
                    This hand got 10 (Q) + 2 points, so 12 points.
                </p>
                <img src={twelve} alt="12 Points Hand" className="w-1/2 mx-auto border-2 border-white rounded-lg" />
            </div>
            <div className="max-w-2xl w-full text-center">
                <h2 className="text-2xl font-bold mb-4">Game Basics</h2>
                <p className="text-lg mb-4">
                    Players receive all cards face up and the dealer's first card is face up and the second is face down. The aim of the game is to beat the dealer's hand without going over 21.
                </p>
                <img src={twentyone} alt="21 Points Hand" className="w-1/2 mx-auto border-2 border-white rounded-lg" />
            </div>
        </div>
    );
};
