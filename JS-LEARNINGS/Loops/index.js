console.clear()
console.log("=====Loops=====\n")

//! for loop

// console.log("-----for Loop-----")

// for(let i = 0; i <= 100; i++){
//     console.log(i)
// }


//! forin loop

// console.log("-----forin loop-----");

obj = {
    "name" : "Peter Parker",
    "alias" : "Peter Parker",
    "nickname" : "Peter Parker",
    "affiliation" : "Peter Parker",
    "archenemy" : "Green Goblin"
};

// for (const key in obj) {
//     const value = obj[key];
//     console.log(key + " -> " + value)
// }

// for (char in "Spider-Man"){  // this prints the indices of all the given interators of the interable, here chars of the string
//     console.log(char);
// }


//! for-of loop

// console.log("-----for-of loop-----");

// for (char of "Spider-Man"){
//     console.log(char);
// }

//! while loop

// let i = 1;
// while(i<10){
//     console.log(i);
//     i++
// }

//! do-while loop
let j = 10
do {
    console.log(j);
    j--;
} while (j<10 && j>0);
