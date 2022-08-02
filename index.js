console.log("Hello World");

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

let fromEuroToDollar = (Euro)=>{
    return Euro*1.2

}
let fromDollarToYen=(Dollar)=>{
    return Dollar*639.5/6
}

let fromYanToPound=(Yen)=>{
    return Yen*0.00625488663018
}

//(1 euro = 127.9 yen =1.2 D= 8/10 gbp)*10/1279

//(10/1279 euro = 1 yen =1.2 D= 8/1279 gbp)
//(1 yen= 8/1279 gbp) 159.875yen = 1 gbp
//(1 euro = 127.9 yen =1.2 D)*5/6
//(5/6 EURO = 



module.exports = { sum ,fromEuroToDollar,fromDollarToYen,fromYanToPound};

