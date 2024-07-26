import { Card as CardType } from '../../Module/utils/blackjack';
import { Card } from './Card';

type HandProps = {
    title: string;
    hand: CardType[];
};

// Composant pour afficher une main de cartes
export const Hand = ({ title, hand }: HandProps) => (
    <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="flex space-x-2 overflow-x-auto">
            {hand.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    </div>
);
