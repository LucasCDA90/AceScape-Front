import images from '../images/cards';
import { Card as CardType } from '../../Module/utils/blackjack';

export const Card = ({ card }: { card: CardType }) => {
    const imageKey = `${card.suit}-${card.value}`;
    const cardImage = images[imageKey];
    // Gere l'affichage auto des cartes

    return (
        <div className="p-2">
            
            {cardImage 
            ? (<img src={cardImage} alt={`${card.value} of ${card.suit}`} className="w-16 h-24"/>) // Gere l'absence éventuelle du chargement de la carte
            : (<div>Carte en chargement...</div>)}
            
        </div>
    );
};
