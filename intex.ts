let example1: boolean = true;

// This returns an error because value is expected to be a boolean
let example2: boolean = 35;

// You can add a pipe and mention return will be a boolean OR a number
let example3: boolean | number = 1;

// You can explicitly assign a value like this
let example4: string;
example4 = "Hello World"

let example5: undefined = undefined;

let example6: null = null;

const arrayExample: number[] = [1, 3, 4, 5];
let example7 = arrayExample.reduce((num1, num2) => num1 + num2);

