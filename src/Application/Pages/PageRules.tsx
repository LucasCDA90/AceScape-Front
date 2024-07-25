import twelve from '../images/12_hand.svg';
import twentyone from '../images/21_hand.svg';
import cards from '../images/52_cards.svg'

export const PageRules = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white p-6">
            <div className="max-w-2xl w-full text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Valeur des cartes</h2>
                <p className="text-lg mb-4">
                    Les cartes de 2 à 10 valent leur valeur affichées, les figures (Valet, Dame, Roi) valent 10, et les As peuvent valoir 1 ou 11, selon ce qui est le mieux pour votre main.
                </p>
                <img src={cards} alt="Main de 12 points" className="" />
                <p className="text-lg mb-4">
                    Cette main a obtenu 10 (Q) + 2 points, donc 12 points.
                </p>
                <img src={twelve} alt="Main de 12 points" className="w-1/2 mx-auto border-2 border-white rounded-lg" />
            </div>
            <div className="max-w-2xl w-full text-center">
                <h2 className="text-2xl font-bold mb-4">Principes de base du jeu</h2>
                <p className="text-lg mb-4">
                    Les joueurs reçoivent toutes les cartes face visible et la première carte du croupier est face visible et la seconde est face cachée. Le but du jeu est de battre la main du croupier sans dépasser 21.
                </p>
                <img src={twentyone} alt="Main de 21 points" className="w-1/2 mx-auto border-2 border-white rounded-lg" />
            </div>
        </div>
    );
};
