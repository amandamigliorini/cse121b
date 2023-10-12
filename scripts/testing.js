/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) =>{
    temples.forEach(temple => {
        let article = document.createElement('article');
        let templesNames = document.createElement('h3');
        templesNames.textContent = temple.title;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.title);
        article.appendChild(templesNames);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://run.mocky.io/v3/539de5a4-ee9a-4f1d-ba4d-1000e5ccbf6b");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector('#sortBy').value;
    switch (filter){
        case 'meat':
            displayTemples(temples.filter(temple => temple.ingredients.includes('meat')));
            break
        case 'chicken':
            displayTemples(temples.filter(temple => temple.ingredients.includes('chicken')));
            break
        case 'all':
            displayTemples(temples);
            break
    }
};


/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => sortBy(templeList));

getTemples();