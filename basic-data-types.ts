/*

Basic of Types Script

*/
let example1: boolean = true;
console.log('hello');

// This returns an error because value is expected to be a boolean
// let example2: boolean = 35;

// You can add a pipe and mention return will be a boolean OR a number
let example3: boolean | number = 1;

// You can explicitly assign a value like this
let example4: string;
example4 = "Hello World"

let example5: undefined = undefined;
let example6: null = null;

const arrayExample: number[] = [1, 3, 4, 5];
let example7 = arrayExample.reduce((num1, num2) => num1 + num2);


/*

Check class data types from 

*/
import { Bear } from './bear.model';

const bear = new Bear(3);
if (bear instanceof Bear) {
    console.log("Hello from TypeScript");
}


/*

Type Assertions

*/
let notAString: any = 'I am a string';

// notAString type is 'any', so you need to cast the data type when you want to use it as a string.
// ** The best approach is explicitly mention the exact data type not using any **
// There are two ways to do that (example to check the string length):
let stringLength1 = (notAString as string).length;
let stringLength2 = (<string> notAString).length;


/*

Type Assertions

*/
const array1: string[] = ['Hello World'];
const array2: number[] = [1, 2, 3, 4, 5];
const array3: boolean[] = [true, false];

// You can mix data type in an array to wrap with parentheses and use a pipe
const array4: (number | boolean)[] = [1, 2, 3, true];

// Nested array
const array5: boolean[][] = [[true, false]];


/*

Tuples Array

*/
const tuple1: [string, number] = ['https://www.youtube.com', 12];

// This will return an error since tuple2 expects only two elements. string for index 0 and number for index1.
const tuple2: [string, number] = ['https://www.youtube.com', 12, 'hello', 23];


/*

Enums

*/
import { Age } from './age.enum';

const totalAge = (age1: Age, age2: Age) => age1 + age2;


/*

Object

*/
const object1: object = {};
const object2: Object = undefined;

// Cannot assign NaN to object
const object3: object = NaN;

const object4: {} = undefined;

// Assign datatype for key-value
type person = {firstName: string}
const object5: person = {firstName: 'Taro'};
object5.firstName = 'Hanako';


/*

User Model and Parameters

*/
import { Person } from './person.model'
const model1: Person = new Person({firstName: 'Taro'})
model1.firstName = 'Hanako';
model1.middleName = 'Type Script';
model1.lastName = 'Frontend';

const addValue = (val1: number, val2: number) => val1 + val2;

addValue(1, 2)

// This will return an error
addValue(1, 'hello')

const sayHello = (person: Person) => `Say Hello to my friend, ${person.firstName}.`;
sayHello(new Person({firstName: 'Taro'}));


/*

Return types

*/
const addValueWithReturnType = (val1: number, val2: number): number => val1 + val2;

const sayHelloWithReturnType = (person: Person): string => `Say Hello to my friend, ${person.firstName}.`;

const voidExample = (): void => {
    addValueWithReturnType(1, 2);
}

// Doesn't return a value nor doesn't call a function.
const neverExample = (): never => {
    throw Error;
}


/*

Interfaces

*/
import { IPerson } from './person.interface'
const interface1: IPerson = {
    firstName: 'Taro',
    middleName: 'JavaScript',
    lastName: 'Frontend'
};
interface1.firstName = 'Hanako';
interface1.middleName = 'Type Script';
interface1.lastName = 'Frontend';


/*

Barrels and Intersection Types

*/
// Barrels
// We can create multiple interfaces and export from index file.
import { IBear, IMan, IPig } from './interfaces'

let man1: IMan | IBear;
let bear1: IBear;
let pig1: IPig;

// Inherit three interfaces and create a new type then assign it
type ManBearPig = IBear & IMan & IPig;
let manBearPig: ManBearPig
manBearPig.firstName = 'George';
manBearPig.claws = 4;
manBearPig.bacon = false;


/*

Generics

*/
function genericExample1<T>(arg: T): T {
    return arg;
}
genericExample1(5);

// Need to extends from {} to use generics with arrow function
const genericExample1Arrow = <T extends {} >(arg: T): T => arg;
genericExample1Arrow(5);

// When array is going to be an argument
function genericExample2<T>(arg: T[]): T []{
    return arg;
}
genericExample2([1, 2, 3])

const genericExample2Arrow = <T extends {}>(arg: T[]): T => arg[0];
genericExample2Arrow([1, 2, 3])

// Return index 0
function genericExample3<T>(arg: T[]): T []{
    return arg;
}
genericExample3([1, 2, 3])

const genericExample3Arrow = <T extends {}>(arg: T[]): T => arg[0];
genericExample3Arrow([1, 2, 3])


/*

Access Modifier

*/
import { BearAccessModifier } from './bear.model.access.modifier';
import { Animal } from './animal.model';

const bearAccessModifier = new BearAccessModifier({name: 'Poo', tail: true});
bear.claws = 3;

// This will return an error since name is readonly
bear.name = 'Omega';

// This will return an error since tail is private
bear.tail = false;

// This doesn't work because add method is public.
// You don't need to instantiate a class
bear.add(1, 2)

// Those work
BearAccessModifier.add(1, 2); // using a public method
bearAccessModifier.addTwo(1, 2); // using a private method