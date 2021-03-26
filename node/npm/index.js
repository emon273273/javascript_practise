const chalk=require('chalk')

const validator=require("validator")

console.log(chalk.bold.red.underline("hello world"))

const result=validator.isEmail("emon.cse273@gmail.cogm")


//use chalk and validator

console.log(result?chalk.green.inverse(result):chalk.red.inverse(result))
