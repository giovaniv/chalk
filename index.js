var chalk = require("chalk");

const success = chalk.bold.green;
const warning = chalk.bold.yellow;
const error = chalk.bold.red;

var welcome = "Welcome to Giovani Chalk template\n";
console.log(chalk.black.bold.underline(welcome));

var intro = "This is just a demonstration of how chalk API works.\n";
console.log(intro);

console.log('You can show ' + error('errors') + ' in ' + error('red'));
console.log('You can show ' + warning('warning') + ' in ' + warning('yellow'));
console.log('You can show ' + success('success') + ' in ' + success('green'));

console.log('\nYou can use colors in the background too, like this examples...\n');

var first = 'This is a expression just to show how Chalk API works';
var second = 'Thats the other expression just to try something here';
var third = 'And thats the last one just to have fun';
console.log(chalk.bgBlack.white(first));
console.log(chalk.bgRed.black(second));
console.log(chalk.bgYellow.white(third));