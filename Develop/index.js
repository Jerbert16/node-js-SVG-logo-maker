//installed inquirer 
const inquirer = require("inquirer");
const fs = require("fs");
//prompt questions
const theQuestions = [
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
];

function init() {
    inquirer.prompt(theQuestions).then((data) => {
      // const svgContent = generateSvg(data);
      //write the README file
    //   fs.writeFile("README.md", readMeContent, (err) =>
    //     err ? console.log(err) : console.log(data)
    //   );
    });
  }
  // call init function
  init();