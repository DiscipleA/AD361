const bookingTotal = require ("./bookingTotal");

//Checks True Branch
test("7 nights with a pet", () => {
    expect(bookingTotal(7, true)).toBe(650)
});

//Checks False Branch
test("2 nights, no pets", () => {
    expect(bookingTotal(2, false)).toBe(200)
});