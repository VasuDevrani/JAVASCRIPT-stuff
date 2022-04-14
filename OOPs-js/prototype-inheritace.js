// The object's properties and methods can be shared through generalized objects that can be cloned and extended. 
// This sharing is known as prototypical inheritance.

// There are different ways to create an object in JavaScript. 

// Object literal
// Function constructor
// The create() method

// -------------------------------------------------------------------------------------------------


// An object is created to be inherited wherever needed
const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates harry object
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// The harry object has been created inherited with the "methods in proto", "its own properties/method", "pre-provided prototype"

// harry.changeName("Harry2")
// console.log(harry)


// ==================================================================================================================
// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
    this.display=function()
    {
        console.log(`hello ${name}`);
    }
};

// Slogan as a method to add new method in prototype
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);   //the properties are inherited from constructor
    this.language = language;
}

// ==================================
// [   This part is needed to inherit the methods in prototype of employee   ]
// // Inherit the prototype
// Programmer.prototype = Object.create(Employee.prototype);

// // Manually set the constructor in the new prototype PROGRAMMER
// Programmer.prototype.constructor = Programmer;
// ================================

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);