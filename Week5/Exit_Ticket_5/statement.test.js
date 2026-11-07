const fiveStarCount = require ("./fiveStarCount");

//Checks every statement
test("one five star review", () => {
    expect(fiveStarCount([5])).toBe(1)
});
