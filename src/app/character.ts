import {Attribute} from './attribute';

export class Character {
    id: number;
    name: string;
    color: string;
    attributes: Attribute[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
