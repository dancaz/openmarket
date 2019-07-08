import {Character} from './character';

export const CHARACTERS: Character[] = [
    {
        id: 0,
        name: 'Mario',
        description: 'Cheerful. Inspiring. Jumpy. Everyone loves Mario—and for good reason! The mustached one has been bravely battling bad guys for decades, and shows no signs of slowing down. He’s remarkably resilient for a plumber, smashing bricks and bouncing off walls like a parkour star. These amazing athletic skills are put to good use in a variety of sports, like tennis, baseball, soccer, and even auto racing. Mario may be a sporting superstar, but his main interest, of course, is keeping his beloved Princess Peach safe and away from the clutches of Bowser.',
        icon: 'fa-star',
        games: [
            {
                id:0,
                name: 'Donkey Kong',
                releaseYear: 1981,
                platform: 'Arcade',
                genre: 'Platform'
            },{
                id:1,
                name: 'Mario Bros',
                releaseYear: 1983,
                platform: 'Arcade',
                genre: 'Platform'
            }
        ]
    },
    {
        id: 1,
        name: 'Luigi',
        description: 'Mario’s younger twin brother is a great guy, but he’s not exactly brave—and he’s really scared of ghosts! Like his big brother, though, he’s quick to lend his hand to those in trouble. His long legs make him a great jumper, perhaps even better than his more famous sibling.',
        icon: 'fa-trophy',
        games: [
            {
                id:0,
                name: 'Donkey Kong',
                releaseYear: 1981,
                platform: 'Arcade',
                genre: 'Platform'
            },{
                id:1,
                name: 'Mario Bros',
                releaseYear: 1983,
                platform: 'Arcade',
                genre: 'Platform'
            }
        ]
    },
    {
        id: 2,
        name: 'Peach',
        description: 'The princess of the Mushroom Kingdom is known for her gentle spirit and wishes only for everyone to live happily. For some reason, though, Bowser seems obsessed with marrying her, which can be a real nuisance. When she’s not being bothered by bad guys, Princess Peach enjoys baking cakes, playing tennis, and hanging out with her pal, Mario.',
        icon: 'fa-heart',
        games: [
            {
                id:0,
                name: 'Donkey Kong',
                releaseYear: 1981,
                platform: 'Arcade',
                genre: 'Platform'
            },{
                id:1,
                name: 'Mario Bros',
                releaseYear: 1983,
                platform: 'Arcade',
                genre: 'Platform'
            }
        ]
    }
];