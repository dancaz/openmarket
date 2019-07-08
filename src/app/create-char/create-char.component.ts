import { Component, OnInit, Inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CharacterService } from '../services/character.service';
import { IconType, Character } from '../shared/character';

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.scss']
})
export class CreateCharComponent implements OnInit {

  character: Character;
  newCharacter: Boolean;
  icons = IconType;

  constructor(public dialogRef: MatDialogRef<CreateCharComponent>,
    private characterService: CharacterService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.character = data.character;
    this.newCharacter = data.newCharacter;
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.newCharacter) {
      this.characterService.addCharacter(this.character);
    }
    this.dialogRef.close();
  }
}
