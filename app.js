let numMax = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(numMax(2,8));


let a = 10,
b = 5;

let resultado = a + b;

console.log(`el resultado es ${resultado}`);


let suma = (a, b) => {
    return a + b;
}

console.log(`el resultado es ${suma(2, 5)}`)


 let user = {
    name: 'gonza',
    lastName: 'salazar' 
}

function cambiar (user, newName, newLastName) {
    user.name = newName
    user.lastName = newLastName
}

console.log(cambiar(user, 'brayan', 'salazar'))


let i = 0;

    while (i <= 10) {
        console.log(i);
        i++;
    }