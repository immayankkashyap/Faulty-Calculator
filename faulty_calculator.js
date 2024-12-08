function calculator(a,b,c){
    let chance = Math.random()
    if (chance < 0.1) { // 10% chance of error
        if (c == "+"){
            return (a-b) // + return difference, 10% of time
        }
        if (c == "*"){
            return (a+b) // * return sum, 10% of time
        }
        if (c == "-"){
            return (a/b) // - return fraction 10% of time
        }
        if (c == "/"){
            return (a*b) // / return product 10% of time
        }
    }
    else{
        if (c == "+"){
            return a+b
        }
        if (c == "-"){
            return a-b
        }
        if (c == "*"){
            return a*b
        }
        if (c == "/"){
            return a/b
        }
    }
}
// result = calculator(5,3,"+")
// console.log(result)
let a = Number(prompt("Enter the 1st number"))
let b = Number(prompt("Enter the 2nd number"))
let c = prompt("Enter the operation to be performed")
console.log(calculator(a,b,c)) 
