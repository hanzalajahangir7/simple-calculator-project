import chalk from "chalk";
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter your number", type: "number", name: "firstnumber" },
  { message: "enter your 2nd number", type: "number", name: "secondnumber" },
  {
    message: "select your operator",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please enter a valid operator");
}

console.log((answer));
