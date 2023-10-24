
const recipesElement = document.getElementById('recipies');
let recipesList = [];

const displayRecipes = (recipes) =>{
    recipes.forEach(recipe => {
        let article = document.createElement('article');
        let recipeName = document.createElement('h3');
        recipeName.textContent = recipe.recipeName;
        let img = document.createElement('img');
        img.setAttribute('src', recipe.imageUrl);
        img.setAttribute('alt', recipe.imageAlt);
		let btn = document.createElement('button');
		btn.textContent = "Details";
        article.appendChild(recipeName);
        article.appendChild(img);
		article.appendChild(btn);
        recipesElement.appendChild(article);
    });
};


const getRecipes = async () => {
    const response = await fetch("https://run.mocky.io/v3/e9b646c4-45df-4627-8828-988140df5af1");
    recipesList = await response.json();
    displayRecipes(recipesList); 
};

/* reset Function */
const reset = () => {
    recipesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (recipes) => {
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


/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => sortBy(recipesList));

getRecipes();
