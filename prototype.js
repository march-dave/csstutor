var extendClass = (function() {

    function Bridage() {}

    return function(Parent, Child) {

        Bridge.prototype = Parent.prototype;

        Child.prototype = new Bridge();

        Child.prototype.constructor = Child;

        Child.prototype.supreClass = Parent;

    }
})();


function Person(name, age) {
    this.name = name || 'unknown name';
    this.age = age || 'unknown age';
}


Person.prototype.getName = function() {
    return this.name;
}


Person.prototype.getAge = function() {
    return this.age;
}


function Employee(name, age, position) {
    this.superClass(name, age);
    this.position = position || 'unknown position';
}

extendClass(Person, Employee);

Employee.prototype.getPosition = function() {
    return this.position;
}


class Person {

    constructor(name, age) {

        this.name = name || 'unknow name';
        this.age = age || 'unknow age';

    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}


class human {

    constructor(name, age, gender) {

    }
}

humam.prototype.address = 'NY';
humam.prototype.address2 = 'NJ';
humam.prototype.address3 = 'SF';
humam.prototype.address4 = 'CA';
humam.prototype.address4 = 'UT';
humam.prototype.address5 = 'HW';
humam.prototype.address5 = 'OH';


function a(x, y, z) {
    console.log(this, x, y, z);
}

var b = {
    c: 'eee'
};

a.call(b, 1, 2, 3);
a.apply(b, [1, 2, 3]);

var c = a.bind(b);
c(1, 2, 3);