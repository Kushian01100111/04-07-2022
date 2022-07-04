//This time we want to write calculations using functions and get the results. Let's have a look at some examples:

//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3
//Requirements:

//There must be a function for each number from 0 ("zero") to 9 ("nine")
//There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//Each calculation consist of exactly one operation and two numbers
//The most outer function represents the left operand, the most inner function represents the right operand
//Division should be integer division. For example, this should return 2, not 2.666666...:
//eight(dividedBy(three()));


function zero(n) {
    if(n === undefined){
        return  0
    }else{
        if(n[0] === "+"){
            return 0 + n[1]
        }else if (n[0] === "-"){
            return 0 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(0 / n[1])
        }else if (n[0] === "*"){
            return 0 * n[1]
        }
    }
}
function one(n) {
    if(n === undefined ){
        return  1
    }else{
        if(n[0] === "+"){
            return 1 + n[1]
        }else if (n[0] === "-"){
            return 1 - n[1]
        }else if (n[0] === "/"){
            return Math.floor( 1 / n[1])
        }else if (n[0] === "*"){
            return 1 * n[1]
        }
    }
}
function two(n) {
    if(n === undefined ){
        return  2
    }else{
        if(n[0] === "+"){
            return 2 + n[1]
        }else if (n[0] === "-"){
            return 2 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(2 / n[1])
        }else if (n[0] === "*"){
            return 2 * n[1]
        }
    }
}
function three(n) {
    if(n === undefined ){
        return  3
    }else{
        if(n[0] === "+"){
            return 3 + n[1]
        }else if (n[0] === "-"){
            return 3 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(3 / n[1])
        }else if (n[0] === "*"){
            return 3 * n[1]
        }
    }
}
function four(n) {
    if(n === undefined){
        return  4
    }else{
        if(n[0] === "+"){
            return 4 + n[1]
        }else if (n[0] === "-"){
            return 4 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(4 / n[1])
        }else if (n[0] === "*"){
            return 4 * n[1]
        }
    }
}
function five(n) {
    if(n === undefined ){
        return  5
    }else{
        if(n[0] === "+"){
            return 5 + n[1]
        }else if (n[0] === "-"){
            return 5 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(5 / n[1])
        }else if (n[0] === "*"){
            return 5 * n[1]
        }
    }
}
function six(n) {
    if(n === undefined){
        return  6
    }else{
        if(n[0] === "+"){
            return 6 + n[1]
        }else if (n[0] === "-"){
            return 6 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(6 / n[1])
        }else if (n[0] === "*"){
            return 6 * n[1]
        }
    }
}
function seven(n) {
    if(n === undefined ){
        return  7
    }else{
        if(n[0] === "+"){
            return 7 + n[1]
        }else if (n[0] === "-"){
            return 7 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(7 / n[1])
        }else if (n[0] === "*"){
            return 7 * n[1]
        }
    }
}
function eight(n) {
    if(n === undefined ){
        return  8
    }else{
        if(n[0] === "+"){
            return 8 + n[1]
        }else if (n[0] === "-"){
            return 8 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(8 / n[1])
        }else if (n[0] === "*"){
            return 8 * n[1]
        }
    }
}
function nine(n) {
    if(n === undefined ){
        return  9
    }else{
        if(n[0] === "+"){
            return 9 + n[1]
        }else if (n[0] === "-"){
            return 9 - n[1]
        }else if (n[0] === "/"){
            return Math.floor(9 / n[1])
        }else if (n[0] === "*"){
            return 9 * n[1]
        }
    }
}

function plus(n) {
    let result = ["+", n]
    return result
}
function minus(n) {
    let result = ["-", n]
    return result
}
function times(n) {
    let result = ["*", n]
    return result
}
function dividedBy(n) {
    let result = ["/", n]
    return result
}