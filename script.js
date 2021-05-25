
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

