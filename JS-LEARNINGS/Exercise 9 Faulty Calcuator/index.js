const prompt = require(`prompt-sync`)()

console.clear()
console.log("============EXAM CALCULATOR============\n")

while (true) {

    let a = Number(prompt(`Enter a: `))
    let b = Number(prompt(`Enter b: `));

    let opr = prompt(`Enter the operator [+, -, *, /]: `)

    if (opr == `+`) {
        if (Math.random() < 0.1) {
            console.log(`${a} ${opr} ${b} = ${a - b}\n\n`)
        }
        else {
            console.log(`${a} ${opr} ${b} = ${a + b}\n\n`)
        }
    }

    else if (opr == `-`) {
        if (Math.random() < 0.1) {
            console.log(`${a} ${opr} ${b} = ${a / b}\n\n`)
        }
        else {
            console.log(`${a} ${opr} ${b} = ${a - b}\n\n`)
        }
    }

    else if (opr == `*`) {
        if (Math.random() < 0.1) {
            console.log(`${a} ${opr} ${b} = ${a + b}\n\n`)
        }
        else {
            console.log(`${a} ${opr} ${b} = ${a * b}\n\n`)
        }
    }

    else if (opr == `/`) {
        if (Math.random() < 0.1) {
            console.log(`${a} ${opr} ${b} = ${a ** b}\n\n`)
        }
        else {
            console.log(`${a} ${opr} ${b} = ${a / b}\n\n`)
        }
    }
}