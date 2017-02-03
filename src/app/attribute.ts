export class Attribute {
  name: string;
    startPosition: number;
    values: number[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
