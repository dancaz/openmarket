import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../shared/character';
import { MatDialog } from '@angular/material';
import { CreateCharComponent } from '../create-char/create-char.component';
import { PlatformType, GenreType } from '../shared/game';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;
  platforms = PlatformType;
  genres = GenreType;

  constructor(private characterService:CharacterService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog) {
     }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params['id'],10);
    this.characterService.getCharacter(id).then(
      character => this.character = character
    );
  }
  editCharacter(){
    var character = this.character;
    this.dialog.open(CreateCharComponent,{data:{character:character,newCharacter:false},width: '500px', height: '450px'})
  }
  
  deleteGame(charId:number,gameId:number){
    this.dialog.open(DeleteConfirmDialogComponent,{data:{charId:charId,gameId:gameId,elementType:"game"},width: '500px', height: '150px'});

  }
  

  addGame() {
    this.characterService.addNewGame(this.character);
  }

}
