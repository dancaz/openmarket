import { Game } from '../shared/game';

export class Character{
    id: number;
    name: string;
    icon: string;
    description: string;
    games: Game[];
}

export const IconType = ['fa-heart','fa-star','fa-trophy'];