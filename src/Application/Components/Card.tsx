import React from 'react';
import { Card as CardType } from '../../Module/utils/blackjack';

// Chemin de base des images des cartes
const cardImagePath = '/src/Application/images/';

interface CardProps {
    card: CardType;
}

export const Card: React.FC<CardProps> = ({ card }) => {
    // Extrait la valeur et le type de la carte
    const { suit, value } = card;

    // Détermine le chemin de l'image de la carte
    const imageSrc = `${cardImagePath}${suit}-${value}.svg`;

    return (
        <div className="w-20 h-28 flex items-center justify-center bg-white shadow-lg rounded-md">
            <img src={imageSrc} alt={`${value} of ${suit}`} className="w-full h-full object-cover" />
        </div>
    );
};
