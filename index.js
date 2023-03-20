//installed inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const createLogo = require("./Library/shapes");

//prompt questions
inquirer
  .prompt([
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
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color do you want that shape?",
    },
  ])
  .then((responses) => {
    const shapeChoice = responses.shapes;
    let newLogo;

    if (shapeChoice === "Circle") {
      let newCircle = new createLogo.Circle(
        responses.letters,
        responses.lettersColor,
        responses.shapeColor
      );
      newLogo = newCircle.render();}

    else if (shapeChoice === "Square") {
      let newSquare = new createLogo.Square(
        responses.letters,
        responses.lettersColor,
        responses.shapeColor
      );
      newLogo = newSquare.render();}

    else if (shapeChoice === "Triangle") {
      let newTriangle = new createLogo.Triangle(
        responses.letters,
        responses.lettersColor,
        responses.shapeColor
      );
      newLogo = newTriangle.render();}
      
      fs.writeFile("logo.svg", newLogo, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
    });

//   } else if (shapeChoice === "Square") {
//     fs.writeFile("logo.svg", square, (err) =>
//       err ? console.log(err) : console.log("Generated logo.svg")
//     );
//   } else if (shapeChoice === "Triangle") {
//     fs.writeFile("logo.svg", triangle, (err) =>
//       err ? console.log(err) : console.log("Generated logo.svg")
//     );
//   }
// });

//     const circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="${responses.shapeColor}" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.lettersColor}">${responses.letters}</text>

// </svg>`;

//     const square = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <rect width="300" height="200" style="fill:${responses.shapeColor}"/>

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.lettersColor}">${responses.letters}</text>

// </svg>`;

//     const triangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <polygon points="50,10 250,10 150,200" style="fill:${responses.shapeColor}" />

// <text x="150" y="100" font-size="60" text-anchor="middle" fill="${responses.lettersColor}">${responses.letters}</text>

// </svg>`;

//   if (shapeChoice === "Circle") {
//     fs.writeFile("logo.svg", circle, (err) =>
//       err ? console.log(err) : console.log("Generated logo.svg")
//     );
//   } else if (shapeChoice === "Square") {
//     fs.writeFile("logo.svg", square, (err) =>
//       err ? console.log(err) : console.log("Generated logo.svg")
//     );
//   } else if (shapeChoice === "Triangle") {
//     fs.writeFile("logo.svg", triangle, (err) =>
//       err ? console.log(err) : console.log("Generated logo.svg")
//     );
//   }
// });
