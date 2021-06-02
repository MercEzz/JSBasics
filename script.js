
let country = "India";
let continent = "Asia";
let population = "1.3B";
/*
console.log(country)
console.log(continent)
console.log(population)
*/

let isIsland = false;
const language = "Hindi";

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)


//math operators
const now = 2021
const ageMitesh = now - 2000;
const ageZxc = now - 1998;

console.log(ageMitesh, ageZxc);

console.log(ageMitesh * 2, ageMitesh / 2, 2 ** 3);

const firstName = "Mitesh";
const lastName = "Virash";
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
console.log(x)

//comparison operators
console.log(ageMitesh > ageZxc);
console.log(ageMitesh >= 18);

const isAbove18 = ageMitesh >= 18;

console.log(now - 2000 > now - 1998);

const now = 2021
const ageMitesh = now - 2000;
const ageZxc = now - 1998;

console.log(now - 2000 > now - 1998);

const averageAge = (ageMitesh + ageZxc) / 2;
console.log(ageMitesh, ageZxc, averageAge);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)

const firstName = 'Mitesh';
const occupation = 'Student';
const birthYear = 2000;
const year = 2021;

const mitesh = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + occupation + '!';
console.log(mitesh);

const newMitesh = `I'm ${firstName}, a ${year - birthYear} years old ${occupation}!`;
console.log(newMitesh)

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
Mulitple
lines`);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`Mark's(${BMIMark}) BMI is greater than John's(${BMIJohn})!`);
} else {
    console.log(`John's(${BMIJohn}) BMI is greater than Mark's!(${BMIMark})`);
}

// Type coercion
console.log('I am ' + 21 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' > '18');

/*
Due to Type coercion
the data type is converted automatically
*/ 

let n = '1' + 1; /*In Js when there is a Addtion operation, it automatically converts the number to string if there is any string */
n = n - '1';
console.log(n); /*Here we will get 10 as an output*/

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean('Hello')) //true
console.log(Boolean({})) //true
console.log(Boolean('')) //false

money = 0;
if(money) {
    console.log("Don't spend it all ;)");
}
else {
    console.log("You should get a job!");
}

/*in above loop, else stment will be executed as the value of money is zero whish falsy value and that zero is converted to bollean value by js*/

//=== and ==
//in '===' type coercion is not performed
//in '==' typer coercion is performed

const age = 18;
if(age === 18) console.log("You are an adult now!(Strict)")

const num = '18';
if(num == 18) console.log("You are an adult now! (Loose)")

const hasDrivinglicense = true; 
const hasGoodvision = true;

console.log(hasDrivinglicense && hasGoodvision); //&& is AND Operator
console.log(hasDrivinglicense || hasGoodvision); //|| is OR Operator
console.log(!hasDrivinglicense); //! NOT Operator will invert the bolean value

if(hasDrivinglicense && hasGoodvision) {
    console.log(`Sarah is able to drive`);
}
else {
    console.log(`Someone else should drive...`);
}

const isTired = false;

if(hasDrivinglicense && hasGoodvision && !isTired) {
    console.log(`Sarah is able to drive`);
}
else {
    console.log(`Someone else should drive...`);
}

const avgDolphins = 97 + 112 + 101 / 3;
const avgKoalas = 109 + 95 + 106 / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`The winner is Team Dolphins`);
} else if (avgDolphins === avgKoalas && avgKoalas >= 100 && avgDolphins >= 100) {
    console.log(`Both the team won`);
} else if(avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log(`The winner is Team Koalas`);
} else{
    console.log(`No one Wins the Trophy!`)
}

// Conditional Operator 
const age = 21;
age >= 18 ? console.log(`I like to drink wine!`) :
console.log(`I like to drink water!`);

const drink = age >= 18 ? `Wine` : `Water`;
console.log(drink);

console.log( `I like to drink ${age >= 18 ? `Wine` : `Water`}`);


// Tip Calculator

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`)

var myNum;

myNum = Math.round(3.5);
myNum = Math.floor(3.9);
myNum = Math.ceil(3.1);
myNum = Math.pow(3, 3);
myNum = Math.sqrt(64);
myNum = Math.abs(-12);
myNum = Math.min(1, 5, 2, 4, 3);
myNum = Math.max(1, 5, 2, 4, 3);

console.log(myNum);

// Hypotenuse of a triangle 

var a = window.prompt("Enter a side of the traingle");
var b = window.prompt("Enter the other side of the triangle")
var c;

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side c = ",c);

var randNum;

randNum = Math.random(); //0-1
randNum = Math.floor(Math.random() * 6); //0-5
randNum = Math.floor(Math.random() * 6) + 1; //1-6 

date = new Date(0);
date = new Date();
date = new Date(2022, 3, 4, 6,3,1);
date = new Date("april 15, 2022, 16:05:01");

let day = date.getDay();

console.log(date);
console.log(day)

let myName = "Mitesh Virash";

console.log(myName.charAt(5))

class car{
    
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log("You are driving", this.make, this.model);
    }

    stop(){
        console.log("you stopped your", this.make, this.model);
    }

}

let car1 = new car("Ford", "Mustang", 2021, "Black");
let car2 = new car("McLaren", "P1", 2021, "Yellow");

car1.drive();
car1.stop();
car2.drive();
car2.stop();



class car{

    static noOfCars =0;

    static beginRace(){
        console.log("The race has begun!");
    }

    constructor(model){
        this.model = model;
        car.noOfCars += 1;
    }
}

let car1 = new car("Mustang");
let car2 = new car("McLaren");
let car3 = new car("Ferrari");

console.log(car.noOfCars);
car.beginRace();

// inheritance

class Animal{

    constructor(){
      this.alive = true;
    }
    eat(){
      console.log("This creature is eating");
    }
  }
  
  class Rabbit extends Animal{
  
    run(){
      console.log("This rabbit is running");
    }
  }
  class Fish extends Animal{
  
    swim(){
      console.log("This fish is swimming");
    }
  }
  class Hawk extends Animal{
  
    fly(){
      console.log("This hawk is flying");
    }
  }
  
  let rabbit = new Rabbit();
  let fish = new Fish();
  let hawk = new Hawk();
  
  console.log(rabbit.alive);
  console.log(fish.alive);
  console.log(hawk.alive);
  
  rabbit.eat();
  fish.eat();
  hawk.eat();
  
  rabbit.run();
  fish.swim();
  hawk.fly();

// array of objects

 class car{
    constructor(model, color){
      this.model = model;
      this.color = color;
    }
    drive(){
      console.log("You are driving the", this.model);
    }
  }

  let garage = [];

  let car1 = new car("Lambo", "Black");
  let car2 = new car("Ferrari", "Red");
  let car3 = new car("Mustang", "White");

  garage = [car1, car2, car3];

  for(let i =0; i < garage.length; i++){
    garage[i].drive();
  }

 // array of functions

function jump(){
    console.log("you jump!");
  }
  
  function punch(){
    console.log("you punch!");
  }
  
  function kick(){
    console.log("you kick!");
  }
  
  function block(){
    console.log("you block!");
  }

  let actions = [];

  actions = [kick, punch, block, jump];

  // for(let i = 0; i < actions.length; i++){
  //   actions[i]()
  // }

  actions.forEach(func => func());


  // getters and setters
class User {

    constructor(first, last){
      this.first = first;
      this.last = last;
    }
    set first(value){
      this.firstName = value.toUpperCase();
    }
    set last(value){
      this.lastName = value.toUpperCase();
    }
    get fullName(){
      return this.firstName+ " " +this.lastName;
    }
  };

  let user1 = new User("Mitesh", "Virash");
  let user2 = new User("xyz","abc");

  console.log(user1.fullName);
  console.log(user2.fullName);


  // Html element

const h1 = document.createElement("h1");
  const underline = document.createElement("u");
  underline.innerText = "Hello World!";
  h1.append(underline);
  document.body.append(h1);

  const h2 = document.createElement("h2");
  const Italic = document.createElement("i");
  Italic.innerText = "Sup?";
  h2.append(Italic);
  document.body.append(h2);

  const p = document.createElement("p");
  const bold = document.createElement("b");
  bold.innerText = "Bye.....";
  p.append(bold);
  document.body.append(p);

  // Modify html element using js

 document.querySelector("#myButton").onclick = function(){

    const h1 = document.querySelector("#myh1");
    const underline = document.createElement("u");
    underline.innerText = "Bye World!";
    h1.innerText = "";
    h1.append(underline);
    const p = document.querySelectorAll(".myP");
    p.forEach(element => element.innerText  = "WHOA!");

    const buttons = document.querySelectorAll("button");
    // buttons[1].remove();
    buttons.forEach(element => element.remove());
  }

// adding css with js

document.querySelector("#mybutton").onclick = function(){

  const h1 = document.querySelector("#myh1");

  console.log(h1.style);

  h1.style.color = "blue";
  h1.style.backgroundColor = "cyan";
  h1.style.fontFamily = "consolas";
  h1.style.textAlign = "center";
  h1.style.border = "4px solid";
  h1.style.borderColor = "blue";
}

// Mouse Events

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

div.addEventListener("click", e => {
    console.log("You clicked the mouse!");
    div.style.backgroundColor = "yellow";
})

div.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseup", e => {
    console.log("You let go of the mouse!");
    div.style.backgroundColor = "grey";
})

div.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("contextmenu", e => {
    console.log("You opened the context menu");
})

div.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    div.style.backgroundColor = "purple";
})
div.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    div.style.backgroundColor = "grey";
})

div.addEventListener("mousemove", e => {
    console.log("You are within the square!");
})





