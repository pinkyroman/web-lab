export class Ferry {
    constructor(name, port, displacement) {
        this.name = name;
        this.port = port;
        this.displacement = displacement;
    }
}
const defaultDisplacement = 4000;
export class PrivateShip {
    constructor(name, port, displacement = defaultDisplacement) {
        this.name = name;
        this.port = port;
        this.displacement = displacement;
    }
}
