import { Injectable } from '@angular/core';
import { Character } from '../shared/character';
import { CHARACTERS } from '../shared/characters';
import { Game } from '../shared/game';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  idCounter = 2;
  constructor() { }

  getCharacters() : Promise<Character[]>{
    return Promise.resolve(CHARACTERS);
  }

  getCharacter(id: number): Promise<Character> {
    return Promise.resolve(CHARACTERS.filter((character) => (character.id === id))[0]);
  }

  getCounter():number{
    this.idCounter++;
    return this.idCounter;
  }

  deleteCharacter(id:number){
    let index = CHARACTERS.findIndex(d => d.id === id);
    CHARACTERS.splice(index, 1);
  }

  deleteGame(charId:number,gameId:number){
    let character = CHARACTERS.filter(character => character.id === charId)[0];
    let index = character.games.findIndex(g => g.id === gameId);
    character.games.splice(index,1);
  }
  addCharacter(character:Character){
    CHARACTERS.push(character);
  }

  createCharacter(name:string,description:string,icon:string): Promise<Character>{
    this.idCounter++;
    var newCharacter:Character = {
      id: this.idCounter,
      name: name,
      icon: icon,
      description:description,
      games: []
    }
    return Promise.resolve(newCharacter);
  }

  addNewGame(character:Character){
    var game:Game = {
      id: this.getCounter(),
      name:"New game",
      releaseYear: 2019,
      platform: "Arcade",
      genre:"Platform"
    };
    character.games.push(game);
  }
}
