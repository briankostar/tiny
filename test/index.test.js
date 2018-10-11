let assert = require("assert");
let tiny = require("../index");

describe("Tiny", () => {
  it("should run default test", () => {
    assert.equal(1, 1);
  });

  it("should remove space from string", () => {
    assert.equal(tiny("My name is Tiny"), "MynameisTiny");
  });
});
