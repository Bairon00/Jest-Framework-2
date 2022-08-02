console.log("Hello World");



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

let fromEuroToDollar = (Euro)=>{
    return Euro*oneEuroIs.USD
    //return Euro*1.2

}
let fromDollarToYen=(Dollar)=>{
    return Dollar*oneEuroIs.JPY/oneEuroIs.USD
    //return Dollar*639.5/6
}

let fromYanToPound=(Yen)=>{
    return  Yen*oneEuroIs.GBP/oneEuroIs.JPY
    //return Yen*0.00625488663018
}


module.exports = { sum ,fromEuroToDollar,fromDollarToYen,fromYanToPound};

