const chalk = require('chalk');

process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log(chalk.green("What's your age ? "))
process.stdin.on('data', (text) => {
    if (isNaN(Number(text))){
        console.log(chalk.red('Use digits please...'));
        process.exit();
    }
    if (Number(text) > 99) {
        console.log(chalk.blue('Woooow! You are like a space druid!...'));
        process.exit();
    }
    let year =  new Date();
    let result = year.getFullYear() - Number(text);
  console.log(chalk.green(`You were born in ${chalk.yellow(result)}`));
  process.exit()
});