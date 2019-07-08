import { Component, OnInit } from '@angular/core';
import { Character} from '../shared/character';
import { CharacterService } from '../services/character.service';
import { MatDialog } from '@angular/material';
import { CreateCharComponent } from '../create-char/create-char.component';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  characters:Character[];
  selectedCharacter: Character;

  constructor(private characterService: CharacterService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.characterService.getCharacters().then(
      characters => this.characters = characters
    );
  }

  newCharacter(){
    var newCharacter = this.characterService.createCharacter("New character","Character description","fa-heart").then(
      character => this.dialog.open(CreateCharComponent,{data:{character:character,newCharacter:true},width: '500px', height: '450px'})
    );
    
  }

  deleteCharacter($event:MouseEvent,id:number){
    $event.stopPropagation();
    this.dialog.open(DeleteConfirmDialogComponent,{data:{id:id,elementType:"character"},width: '500px', height: '150px'});
    
  }
}
