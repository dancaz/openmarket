import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  elementType:string;
  characterId:number;
  gameId:number;

  constructor(public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    private characterService: CharacterService,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.elementType = data.elementType;
      if(this.elementType === "character"){
        this.characterId = data.id;
      }
      else if(this.elementType==="game"){
        this.gameId = data.gameId;
        this.characterId = data.charId;
      }
    }

  ngOnInit() {
  }

  deleteElement(){
    if(this.elementType === "character"){
      this.characterService.deleteCharacter(this.characterId);
    }
    else{
      this.characterService.deleteGame(this.characterId,this.gameId);
    }
    this.dialogRef.close();
  }

}
