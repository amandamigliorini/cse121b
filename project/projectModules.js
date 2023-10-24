//using ES Modules to add all functions and new HTML elements

export const recipesElement = document.getElementById('recipes');
export let recipesList = [];

// display recipes on HTML
export const displayRecipes = (recipes) =>{

    recipes.forEach(recipe => {
        let article = document.createElement('article');
        let recipeName = document.createElement('h3');
        recipeName.textContent = recipe.recipeName;
        let img = document.createElement('img');
        img.setAttribute('src', recipe.imageUrl);
        img.setAttribute('alt', recipe.imageAlt);
		let btn = document.createElement('button');
		btn.textContent = `Details`;
        btn.setAttribute('name', `${recipeName.textContent}`);
        article.appendChild(recipeName);
        article.appendChild(img);
		article.appendChild(btn);
        recipesElement.appendChild(article);
        //create a button that will select a recipe to be detailed
        btn.addEventListener('click', function (){
            let recipeSelected = recipes.find((recipe)=>{
                return recipe.recipeName.includes(btn.name);
            });
            showRecipe(recipeSelected);           
        });
    });
};


// Using fetch to access a set of recipes
export const getRecipes = async () => {
    const response = await fetch("https://run.mocky.io/v3/dd635aa7-5fbe-4413-815b-5d5b35235fd3");
    recipesList = await response.json();
    displayRecipes(recipesList); 
};

// reset recipesElement
export const reset = () => {
    recipesElement.innerHTML = '';
};

// Sort recipes using filter(array method) and conditional branching
export const sortBy = (recipes) => {
    reset();
    let filter = document.querySelector('#sortBy').value;
    switch (filter){
        case 'Desserts':
            displayRecipes(recipes.filter(recipe => recipe.category.includes('Desserts')));
            break
        case 'Dinner and Lunch':
            displayRecipes(recipes.filter(recipe => recipe.category.includes('Dinner and Lunch')));
            break
        case 'NoMilk':
            displayRecipes(recipes.filter(recipe => recipe.category.includes('NoMilk')));
            break
        case 'All':
            displayRecipes(recipes);
            break
    }
};


//Sort recipes using filter with a value
export function searchBy(recipes) {
    reset();
    let search = document.querySelector('#search').value;
    const filterRecipes = recipes.filter(recipe => {

    for (const ingredient in recipe.ingredients) {
        if (ingredient.toLowerCase() === search.toLowerCase()) {
          return true;
        }
    };
    });

    displayRecipes(filterRecipes);
};

// detailing the recipe (using template literals strings)
export function showRecipe(recipe) {
    reset();
    // creating a new div to be added in recipesElement with all children. Class recipeDetails
    const recipeContainer = document.createElement('div');
    recipeContainer.setAttribute('class', 'recipeDetails')

    //creating and adding all HTML elements. Using template literals to build strings
    const recipeName = document.createElement('h1');
    recipeName.textContent = recipe.recipeName;
  
    const recipeCategory = document.createElement('p');
    recipeCategory.textContent = `Category: ${recipe.category.join(', ')}`;

    const ingredientTitle = document.createElement('h3');
    ingredientTitle.textContent = `Ingredients`;
  
    const ingredientsRecipe = document.createElement('ul');
    for (const i in recipe.ingredients) {
      const ingredient = document.createElement('li');
      ingredient.textContent = `${recipe.ingredients[i]} ${i}`;
      ingredientsRecipe.appendChild(ingredient);
    };

    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = `How to Cook`;
  
    const recipeDescription = document.createElement('ol');
    for (const j in recipe.description) {
      const descriptionItem = document.createElement('li');
      descriptionItem.textContent = recipe.description[j];
      recipeDescription.appendChild(descriptionItem);
    };
      
    const image = document.createElement('img');
    image.setAttribute('src', recipe.imageUrl);
    image.setAttribute('alt', recipe.imageAlt);
    image.setAttribute('class','detailImg');

    // appending HTML elements
    recipeContainer.appendChild(image);
    recipeContainer.appendChild(recipeName);
    recipeContainer.appendChild(recipeCategory);
    recipeContainer.appendChild(ingredientTitle);
    recipeContainer.appendChild(ingredientsRecipe);
    recipeContainer.appendChild(descriptionTitle);
    recipeContainer.appendChild(recipeDescription);
   
    recipesElement.appendChild(recipeContainer);
};
