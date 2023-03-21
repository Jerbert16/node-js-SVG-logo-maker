const createLogoTest = require("../Library/shapes");

// test to make sure code will generate intended SVG before extrapolating to other shapes

describe("createLogoTest", () => {
  describe("create circle", () => {
    it("Should create circle SVG", () => {
      const circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="Black" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="Green">AAA</text>
        
        </svg>`;
      const newCircle = new createLogoTest.Circle("AAA", "Green", "Black");
      const genCircle = newCircle.render();
      expect(genCircle).toEqual(circle);
    });
  });
});
