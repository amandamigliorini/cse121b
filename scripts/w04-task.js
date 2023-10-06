/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Amanda Cristina Schneider Migliorini",
    photo: "images/IMG_8016.JPG",
    favoriteFoods: ["Pizza", "Strogonoff", "Brigadeiro"],
    hobbies: ["Coding",
              "Reading",
              "Watching Movies"],
    placesLived: [],
                
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: "Capanema, Paraná", length: "13 years"}, {place: "Toledo, Paraná", length: "22 years"});

/* DOM Manipulation - Output */


/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let favoriteList = document.createElement("li");
    favoriteList.textContent = food
    document.querySelector("#favorite-foods").appendChild(favoriteList);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let myHobbies = document.createElement("li");
    myHobbies.textContent = hobbie
    document.querySelector("#hobbies").appendChild(myHobbies);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {    
    let myplace = document.createElement("dt");
    myplace.textContent = place.place;
    let placeLength = document.createElement("dd");
    placeLength.textContent = place.length;
    document.querySelector("#places-lived").appendChild(myplace);
    document.querySelector("#places-lived").appendChild(placeLength); //alternative way: myplace.appendChild(placeLength);
    
});


