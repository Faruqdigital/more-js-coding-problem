function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please venter a number';
    }
    return num1 + num2;
}
const result = add(20, 30);
console.log(result);