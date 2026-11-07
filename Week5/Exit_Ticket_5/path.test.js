const fiveStarCount = require ("./fiveStarCount");

//Checks the path that skips the loop
test("no reviews", () => {
    expect(fiveStarCount([])).toBe(0)
});

//Checks True Path through the if
test("one five star review", () => {
    expect(fiveStarCount([5])).toBe(1)
});

//Checks False Path through the if
test("one three star review", () => {
    expect(fiveStarCount([3])).toBe(0)
});

//Checks True, False Path through the if
test("a five star review and a three star review", () => {
    expect(fiveStarCount([5, 3])).toBe(1)
});
