import { Injectable } from '@angular/core';
import { Attribute } from './attribute';
import { Character } from './character';

@Injectable()
export class CharacterService {
  characters: Character[] = [];
  selectedCharacters: Character[] = [];

  constructor() {
    this.characters.push(new Character({
      id: 1,
      name: "Brandon Jaspers",
      color: "green",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 4,
          values: [0,2,3,3,4,5,6,6,7]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 3,
          values: [0,3,4,4,4,5,6,7,8]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 4,
          values: [0,3,3,3,4,5,6,7,8]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 4,
          values: [0,2,3,3,4,5,6,6,7]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 2,
      name: "Peter Akimoto",
      color: "green",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,2,3,3,4,5,5,6,8]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 4,
          values: [0,3,3,3,4,6,6,7,7]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 4,
          values: [0,3,4,4,4,5,6,6,7]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 3,
          values: [0,3,4,4,5,6,7,7,8]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 3,
      name: "Darrin 'Flash' Williams",
      color: "red",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,2,3,3,4,5,6,6,7]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 5,
          values: [0,4,4,4,5,6,7,7,8]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 3,
          values: [0,1,2,3,4,5,5,5,7]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 3,
          values: [0,2,3,3,4,5,5,5,7]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 4,
      name: "Ox Bellows",
      color: "red",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,4,5,5,6,6,7,8,8]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 5,
          values: [0,2,2,2,3,4,5,5,6]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 3,
          values: [0,2,2,3,4,5,5,6,7]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 3,
          values: [0,2,3,3,4,5,6,6,7]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 5,
      name: "Father Rhinehardt",
      color: "white",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,1,2,2,4,4,5,5,7]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 3,
          values: [0,2,3,3,4,5,6,7,7]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 5,
          values: [0,3,4,5,5,6,7,8]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 4,
          values: [0,1,3,3,4,5,6,6,8]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 6,
      name: "Professor Longfellow",
      color: "white",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,1,2,2,4,4,5,5,7]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 4,
          values: [0,2,3,3,4,5,6,7,7]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 4,
          values: [0,3,4,5,5,6,7,8]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 5,
          values: [0,1,3,3,4,5,6,6,8]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 7,
      name: "Heather Granville",
      color: "purple",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,3,3,3,4,5,6,7,8]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 3,
          values: [0,3,3,4,5,6,6,7,8]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 3,
          values: [0,3,3,3,4,5,6,6,6]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 5,
          values: [0,2,3,3,4,5,6,7,8]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 8,
      name: "Jenny Leclerc",
      color: "purple",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,3,4,4,4,4,5,6,8]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 4,
          values: [0,2,3,4,4,4,5,6,8]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 5,
          values: [0,1,1,2,4,4,4,5,6]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 3,
          values: [0,2,3,3,4,4,5,6,8]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 9,
      name: "Madame Zostra",
      color: "blue",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 4,
          values: [0,2,3,3,4,5,5,5,6]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 3,
          values: [0,2,3,3,5,5,6,6,7]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 3,
          values: [0,4,4,4,5,6,7,8,8]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 4,
          values: [0,1,3,4,4,4,5,6,6]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 10,
      name: "Vivian Lopez",
      color: "blue",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 3,
          values: [0,2,2,2,4,4,5,6,6]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 4,
          values: [0,3,4,4,4,4,6,7,8]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 3,
          values: [0,4,4,4,5,6,7,8,8]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 4,
          values: [0,4,5,5,5,5,6,6,7]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 11,
      name: "Missy Dubourde",
      color: "orange",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 4,
          values: [0,2,3,3,3,4,5,6,7]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 3,
          values: [0,3,4,5,6,6,6,7,7]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 3,
          values: [0,1,2,3,4,5,5,6,7]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 4,
          values: [0,2,3,3,4,4,5,6,6,6]
        })
      ]
    }));
    this.characters.push(new Character({
      id: 12,
      name: "Zoe Ingstrom",
      color: "orange",
      attributes: [
        new Attribute({
          name: "Might",
          startPosition: 4,
          values: [0,2,2,3,3,4,4,6,7]
        }),
        new Attribute({
          name: "Speed",
          startPosition: 4,
          values: [0,4,4,4,4,5,6,8,8]
        }),
        new Attribute({
          name: "Sanity",
          startPosition: 3,
          values: [0,3,4,5,5,6,6,7,8]
        }),
        new Attribute({
          name: "Knowledge",
          startPosition: 3,
          values: [0,1,2,3,4,4,5,5,5]
        })
      ]
    }));
  }

  getAllCharacters(): Character[] {
    return this.characters;
  }

  getSelectedCharacters(): Character[] {
    return this.selectedCharacters;
  }

  getCharacterById(id: number): Character {
    return this.characters
      .filter(character => character.id === id)
      .pop();
  }

  addSelectedCharacter(id: number): void {
    if (this.selectedCharacters.length <= 6) {
      this.selectedCharacters.push(this.characters
                                    .filter(character => character.id === id)
                                    .pop());
    }
  }

  removeSelectedCharacter(id: number): void {
    this.selectedCharacters = this.selectedCharacters
                                .filter(character => character.id !== id);
  }

}
