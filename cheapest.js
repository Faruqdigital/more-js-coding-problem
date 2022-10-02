const phones = [
    { name: 'samsung', camera: 19, storage: '32gb', price: 22000, color: 'silver'},
    { name: 'walton', camera: 12, storage: '16gb', price: 18000, color: 'blue'},
    { name: 'vivo', camera: 10, storage: '32gb', price: 25000, color: 'black'},
    { name: 'oppo', camera: 12, storage: '32gb', price: 28000, color: 'white'},
];
function cheapestphone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestphone(phones);
console.log(mySelection);