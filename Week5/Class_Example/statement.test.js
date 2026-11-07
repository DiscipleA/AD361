const bookingTotal = require ("./bookingTotal");

//Checks True Branch
test("7 nights with a pet", () => {
    expect(bookingTotal(7, true)).toBe(650)
});