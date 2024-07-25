export type Card = {
    suit: string;  // La couleur de la carte (hearts, spades, clubs, diamonds)
    value: string; // La valeur de la carte (A, 2, 3, ..., J, Q, K)
    weight: number; // Le poids de la carte utilisé pour calculer la valeur de la main
};

// Les différentes couleurs de cartes
const suits = ["hearts", "spades", "clubs", "diamonds"];

// Les différentes valeurs de cartes
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Fonction pour générer un deck de cartes
export const getDeck = (): Card[] => {
    let deck: Card[] = [];
    for (let suit of suits) {
        for (let value of values) {
            let weight = parseInt(value); // Conversion de la valeur en nombre
            if (value === "J" || value === "Q" || value === "K") weight = 10; // Les figures valent 10
            if (value === "A") weight = 11; // Les As valent 11
            deck.push({ suit, value, weight });
        }
    }
    return deck;
};

// Fonction pour mélanger un deck de cartes
export const shuffleDeck = (deck: Card[]): Card[] => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Échange de deux cartes
    }
    return deck;
};

// Fonction pour piocher une carte du deck et l'ajouter à la main
export const drawCard = (hand: Card[], deck: Card[]): Card => {
    const card = deck.pop()!; // Retire la dernière carte du deck
    hand.push(card); // Ajoute la carte à la main
    return card;
};

// Fonction pour calculer la valeur d'une main
export const getHandValue = (hand: Card[]): number => {
    let value = hand.reduce((acc, card) => acc + card.weight, 0); // Somme des poids des cartes
    let aceCount = hand.filter(card => card.value === "A").length; // Compte des As dans la main

    // Ajuste la valeur si la somme dépasse 21 et qu'il y a des As
    while (value > 21 && aceCount > 0) {
        value -= 10; // Un As peut valoir 1 au lieu de 11
        aceCount -= 1;
    }

    return value;
};

// Fonction pour vérifier si une main est un blackjack (21)
export const checkForBlackjack = (hand: Card[]): boolean => getHandValue(hand) === 21;

// Fonction pour vérifier si une main dépasse 21 (bust)
export const checkForBust = (hand: Card[]): boolean => getHandValue(hand) > 21;
