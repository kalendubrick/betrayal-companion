import { Component } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterService]
})
export class AppComponent {
  constructor(private characterService: CharacterService) { }

  get characters() {
    return this.characterService.getAllCharacters();
  }
}
