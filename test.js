// importar la función sum del archivo app.js
const { sum,fromEuroToDollar,fromDollarToYen,fromYanToPound} = require('./index.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});



test('trasforma 1 Euro a 1.2 Dollar',()=>{
    let total=fromEuroToDollar(1);
    expect(total).toBe(1.2)
})
test('trasforma 6 Dollar a 639.5 Yen',()=>{
    let total=fromDollarToYen(6);
    expect(total).toBe(639.5);
})
test('trasforma 1 yen a 0.00625488663018 pound ',()=>{
    let total=fromYanToPound(1);
    expect(total).toBe(0.00625488663018);
})