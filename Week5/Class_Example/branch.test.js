const bookingTotal = require ("./bookingTotal");

//Checks True, True Path
test("7 nights with a pet", () => {
    expect(bookingTotal(7, true)).toBe(650)
});

//Checks True, False Path
test("7 nights with no pets", () => {
    expect(bookingTotal(7, false)).toBe(600)
});

//Checks False, False Path
test("2 nights, no pets", () => {
    expect(bookingTotal(2, false)).toBe(200)
});

//Checks False, True Path
test("2 nights, with pets", () => {
    expect(bookingTotal(2, true)).toBe(250)
});


