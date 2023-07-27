function _foodsAndDrinks(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]); //print the passed array
    }
}

function PrintNumberAsWord(value)
{
  let word = "";
  switch (value) {
    case 0:
        word = "zero";
        break;
    case 1:
        word = "one";
        break;
    case 2:
        word = "two";
        break;
    case 3:
        word = "Three";
        break;
    case 4:
        word = "Four";
        break;
    case 5:
        word = "Five";
        break;
}

return word;
}

function calculateAge(birthDate) {
    const birthYear = new Date(birthDate).getFullYear();//getting the four digit year
    const currentYear = new Date().getFullYear();//getting the four digit year
    const age = currentYear - birthYear;
    return age;
}

const drinks = ['lemonade', 'soda', 'tea', 'water'];
const food = ['beans', 'chicken', 'rice'];

_foodsAndDrinks(drinks);//print food
_foodsAndDrinks(food); //print drinks


let birthDate = '1985-01-16';
const age = calculateAge(birthDate);
console.log(age);

PrintNumberAsWord(5);




