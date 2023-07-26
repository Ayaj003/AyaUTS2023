function _foodsAndDrinks(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]); //print the passed array
    }
}

const drinks = ['lemonade', 'soda', 'tea', 'water'];
const food = ['beans', 'chicken', 'rice'];

_foodsAndDrinks(drinks);//print food
_foodsAndDrinks(food); //print drinks

function calculateAge(birthDate) {
    const birthYear = new Date(birthDate).getFullYear();//getting the four digit year
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}

let birthDate = '1985-01-16';
const age = calculateAge(birthDate);
console.log(age);

