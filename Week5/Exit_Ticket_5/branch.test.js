const fiveStarCount = require ("./fiveStarCount");

//Checks True Branch, then exits the loop
test("one five star review", () => {
    expect(fiveStarCount([5])).toBe(1)
});

//Checks False Branch, then exits the loop
test("one three star review", () => {
    expect(fiveStarCount([3])).toBe(0)
});
