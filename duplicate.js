const names = ['abul', 'babul', 'kabul', 'babul', 'sbul', 'babul', 'dabul', 'babul'];
function remoteDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const name = names[i];
        if(unique.includes(name) ===false){
            uniqueName.push(name);
        }
    }
    return unique;
}

const uniqueNames = remoteDuplicate(names);
console.log(uniqueNames);
