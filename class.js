
class Employee extends Person {

    constructor(name, age, position) {

        super(name, age);

        this.position = position || 'unknown position';

    }

    getPosition() {
        return this.position;
    }

}