import { Card as CardType } from '../../utils/blackjack';
import { Card } from './Card';

type HandProps = {
    title: string;
    hand: CardType[];
};

// Composant pour afficher une main de cartes
export const Hand = ({ title, hand }: HandProps) => (
    <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex space-x-2 mb-4">
            {hand.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    </div>
);
