import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [CharacterService]
})
export class GameComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

}
