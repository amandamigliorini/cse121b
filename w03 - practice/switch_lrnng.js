fruits = "banana";
text = "";
switch (fruits){
    case "banana":
    text = ("Hello");
    console.log(text);
    break;
    case "Apple":
    text = ("Welcome");
    console.log(text);
    break;
}

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
console.log(numbers);

let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last){
fullName = `${firstName} ${lastName}`;
return fullName;
}
console.log(fullName(firstName, lastName));

const fullName1 = function(first, last){
    return `${firstName} ${lastName}`;
    
}
console.log(fullName1(firstName, lastName));

const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName2);
// selecionar um elemento pela id #fullName e escrever nela o resultado da função fullName (minha versão - não testada):
//nameElement = document.querySelector("#fullName");
//const FullName = fullName(firstName, lastName)
//nameElement.textContent = FullName

// selecionar um elemento pela id #fullName e escrever nela o resultado da função fullName (versão do exercício - não testei):
//document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
const namesB = names.filter((nam) => nam[0] == "B");
// let namesB = names.filter(name => name.charAt(0) === 'B'); (assignment answer)
console.log(namesB);
namesLength = names.map((nam) => nam.length);
console.log(namesLength);

const avrg = names.reduce((total, nami) => total + nami.length, 0) / names.length;
console.log(avrg);