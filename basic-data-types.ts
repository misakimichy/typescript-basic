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

Enums!

*/

import { Age } from './age.enum';

const totalAge = (age1: Age, age2: Age) => age1 + age2;
