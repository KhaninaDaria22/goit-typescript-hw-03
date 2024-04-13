class Key {
    private signature: string;

    constructor() {
        this.signature = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    public getSignature(): string {
        return this.signature; 
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door && person.getKey().getSignature() === this.key.getSignature()) {
            this.tenants.push(person);
            console.log("Person entered the house");
        } else {
            console.log("Person couldn't enter the house");
        }
    }

}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
         if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door opened");
        } else {
            console.log("Invalid key. Door remains closed.");
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};