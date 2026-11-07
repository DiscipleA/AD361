//Search for five star reviews
function fiveStarCount(ratings) {
    let count = 0;
    let i = 0;

    while (i < ratings.length) {
        if (ratings[i] === 5) {
            count = count + 1;
        }
    
        i = i + 1;
    }

    return count;
}

module.exports = fiveStarCount; 