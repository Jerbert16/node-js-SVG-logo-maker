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
      // using render method from circle class
      newLogo = newCircle.render();
    } else if (shapeChoice === "Square") {
      let newSquare = new createLogo.Square(
        responses.letters,
        responses.lettersColor,
        responses.shapeColor
      );
      // using render method from square class
      newLogo = newSquare.render();
    } else if (shapeChoice === "Triangle") {
      let newTriangle = new createLogo.Triangle(
        responses.letters,
        responses.lettersColor,
        responses.shapeColor
      );
      // using render method from triangle class
      newLogo = newTriangle.render();
    }
    // write the SVG file w/newLogo
    fs.writeFile("logo.svg", newLogo, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
