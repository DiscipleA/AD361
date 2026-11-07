//give total for booking
function bookingTotal(nights, hasPet){
    let total = nights * 100;

    if(nights >= 7) {
        total = total - 100
    }

    if(hasPet) {
        total = total + 50;
    }
    return total;
}

module.exports = bookingTotal;