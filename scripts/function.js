// console.log('hello')

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

function chickenMonkey(taco) {
    if (taco % 5 === 0 && taco % 7 === 0) {
        return 'Chicken Monkey'
    } else if (taco % 7 === 0) {
        return 'Monkey'
    } else if (taco % 5 === 0) {
        return 'Chicken'
    }  else {
        return taco
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(chickenMonkey(i));
}
