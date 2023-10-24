import {getRecipes, displayRecipes, reset, sortBy, recipesElement, recipesList, searchBy} from "./projectModules.js";

document.querySelector('#sortBy').addEventListener('change', () => sortBy(recipesList));
document.querySelector('#btnSearch').addEventListener('click', () => searchBy(recipesList));
document.querySelector('#btnBack').addEventListener('click', () => {
    reset();
    displayRecipes(recipesList);
});

getRecipes();

