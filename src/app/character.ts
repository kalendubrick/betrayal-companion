import {Attribute} from './attribute';

export class Character {
    id: number;
    name: string;
    color: string;
    selected: boolean;
    attributes: Attribute[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
