const array = ["one", "two", "three"];
const newArray = array.map(function (step){
    return `<li>${step}</li>`;
});
console.log(newArray.join());
document.getElementById("myList").innerHTML = newArray.join();

const grades = ["A", "B", "A"];
function convert (grade){
    let points = 0
    if (grade == "A"){
        points = 4;
    } else if (grade == "B"){
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convert);
console.log(gpaPoints);
const GPA = gpaPoints.reduce((total, item) => total + item / gpaPoints.length);
console.log(GPA);

const fruits =  ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruit6 = fruits.filter((item) => item.length > 6);
console.log(fruit6);

const List = [12, 34, 21, 54];
const luckyNumber = 27;
let luckyIndex = List.indexOf(luckyNumber);
console.log(luckyIndex);


