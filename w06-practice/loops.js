// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  // requires a list, and a callback that will produce an html string for each item in the list
  // returns a string of html
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  // requires an food string
  // returns that string embedded in HTML markup
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  // requires an place string
  // returns that string embedded in HTML markup
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods,foodsTemplate);
  placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);
  
  const DAYS = 6;
  const LIMIT = 30;
  let studentReport = [11, 42, 33, 64, 29, 37, 44];

  for (let i = 0; i < studentReport.length; i++){
    if (studentReport[i] < 30){
        console.log(studentReport[i]);
    };
  };

studentReport.forEach((item) =>{
    if (item < LIMIT){
        console.log(item);
    };
});

for (const i in studentReport){
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    };
  };

    // while loop
    let i = 0;
    while (i < studentReport.length) {
      if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
      }
      i++;
    }
const output = document.querySelector('#output')
const today = new Date();
const options = { weekday: 'long'}; // vs. short, etc.
for (let i = 1; i <= DAYS; i++ ) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    output.appendChild(item)};
