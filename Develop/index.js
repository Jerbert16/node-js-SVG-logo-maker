//installed inquirer 
const inquirer = require("inquirer");
const fs = require("fs");
const { choices } = require("yargs");
//prompt questions
inquirer
.prompt ([
  {
    type: "input",
    name: "letters",
    message: "Please enter three letters",
  },
  {
    type: "input",
    name: "lettersColor",
    message: "What color do you want those letters?",
  },
  {
    type: "list",
    name: "shapes",
    message: "Please choose a shape",
    choices: [
      "Circle",
      "Square",
      "Triangle",
    ],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color do you want that shape?",
  },
])
.then((responses) => {
if (responses.choices = 1) {
const generateSVG = (
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${responses.letters}</text>

</svg>`
)
fs.writeFile("newSVG.svg", generateSVG, (err) =>
err ? console.log(err) : console.log(responses))
}})















// function init() {
//     inquirer.prompt(theQuestions).then((data) => {
//       // const svgContent = generateSvg(data);
//       //write the README file
//     //   fs.writeFile("README.md", readMeContent, (err) =>
//     //     err ? console.log(err) : console.log(data)
//     //   );
//     });
//   }
//   // call init function
//   init();