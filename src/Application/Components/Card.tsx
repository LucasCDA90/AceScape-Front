import React from 'react';
import { Card as CardType } from '../../utils/blackjack';

type CardProps = {
    card: CardType;
};

// Composant pour afficher une carte en utilisant une image
export const Card = ({ card }: CardProps) => {
    // Chemin de l'image pour la carte
    const cardImage = `/src/images/cards/${card.suit}-${card.value}.png`;

    return (
        <div className="p-2">
            <img src={cardImage} alt={`${card.value} of ${card.suit}`} className="w-16 h-24" />
        </div>
    );
};
