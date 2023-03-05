# Node JS SVG Logo Maker 

## Project Description
Sometimes a developer needs to generate a placeholder logo, but creating logos can be time-consuming. With this application, that's not the case. This application takes information - like color, shape, and text - entered via the command line and then creates a Scalable Vector Graphics (SVG) file for the developer to use as they wish. 

This program uses the following to accomplish the aforementioned:
* Node JS
* Heroku
* Jest
* Inquirer

## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to trouble a graphic designer
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Logo Result | Mock-Up
![image](./Images/10-oop-homework-demo.png)

## Application in Use:

(link to video)