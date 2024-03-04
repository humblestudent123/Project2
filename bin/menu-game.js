#!/usr/bin/env node.

console.log("Chose the game!")

//const Name = 'John';
//const Question = 'May i have your name? John';
//const Say = 'hello';
//console.log(`${Question}`)
//console.log(`${Say}, ${Name}`);


const bebra = readlineSync.question('readline-sync');
console.log(bebra);

// Пример использования readline-sync для ввода данных с клавиатуры
import readlineSync from 'readline-sync';
function CalculateAndLog(){

    const name = readlineSync.question('What is your name? ');
    console.log(`Hello, ${name}!`); 
};
CalculateAndLog()


