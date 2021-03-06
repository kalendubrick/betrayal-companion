import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CharacterService]
})
export class HomeComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  selectCharacter(characterId: number) {
    if (this.selectedCharacters.length < 6) {
      this.characterService.toggleCharacter(characterId);
    }
  }

  removeCharacter(characterId: number) {
    this.characterService.toggleCharacter(characterId);
  }
  get characters() {
    return this.characterService.getAllCharacters();
  }

  get selectedCharacters() {
    return this.characterService.getSelectedCharacters();
  }

}
