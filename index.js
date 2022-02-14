const sum = (a, b) => {

    if(!(a && b)){ 
        return "Invalid input"
    }

    return a + b
}

const square = (a) => {
    if(!a){
        return "Invalid input"
    }
    return a * a
}

const cube = (a) => {
    if(!a) {
        return "Invalid input"
    }
    return a ** 3
}

// const square = (a) => exponent(a);

// const exponent = (num, power)=>{
//     return num ** power
// }
module.exports = {sum, square, cube};