function ave(arr) {
    let sum = arr.reduce(function(x, y) { return x + y })

    return sum / arr.length
}

function compare(p1, p2) {
    return p1 < p2 ? p2 : p1;
}

console.log(ave([3, 5, 19]))
console.log(compare(6, 4));
