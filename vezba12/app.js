// - razlika između nizova i json objekata - napraviti json objekat i niz json objekata

var person = {firstName:"Jelena", lastName:"Ilic", age:28};

myJson = '{ "firstName":"John","lastName":"Ilic","age":"28"}';

console.log(person);
console.log(myJson);

var myJson= JSON.stringify(person); //pretvara u JSON  
console.log(myJson);

var obj = JSON.parse(myJson); //json string pretvara u js objekat
console.log(obj);
    


// - napraviti klasu Person (es5) sa first name, last name i gender varijablama i instancirati objekat
// - implementirati nasledjivanje klase Person (es5)
// - postaviti statičke varijable i metode u klasu Person (es5)
class Person {

  constructor(firstname, lastname,gender){
    this.firstname=firstname;
    this.lastname=lastname;
    this.gender=gender;
  }

   getName(){
    return this.firstname + ' ' + this.lastname;   
  }
    static staticMethod(){
    return 'Static method has been called';  
  }

}

class Student extends Person {
    constructor(firstname,lastname,gender){
    super(firstname,lastname,gender); 
    this.students=[];
  }

  addStudent(student) {
    this.students.push(student);
  }

  showStudents(){
    for(var i=0; i<this.students.length; i++){
      console.log(this.students[i].getName()); 
    }
  }
}

var person1 = new Person ('jelena','ilic');
var student2 = new Student ('jecika','ilic');                       
var student3 = new Student('slavica', 'ilic');


console.log(person1);
console.log(student2);

console.log(Person.staticMethod());

// - javascript promises and callbacks

//example callback function
function callbackFunction(checkIn, checkOut) {
  console.log("You can check in.");
  // Succeed half of the time.
  if (Math.random() > .5) {
    checkIn("successfuly")
  } else {
    checkOut("successfuly")
  }
}



function checkIn(answer) {
  console.log("You have checked in " + answer;
}

function checkOut(answer) {
  console.log("You have checked out " + answer);
}

callbackFunction(checkIn, checkOut);

//example promise

function check() {
  var checked = false;
  return new Promise((resolve, reject) => {
    console.log("You can check out.");
    if (checked) {
      resolve("susscessfuly");
    } else {
      reject("susscessfuly");
    }
  })
}



const promise = check(); 
promise.then(checkIn,checkOut);
