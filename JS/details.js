const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const type = urlParams.get('type');
const apiKey = `5a095273a4624c4496872f4674ee9c6e`;


const recipeImg = document.getElementById('recipe-image');
const recipeName = document.getElementById('recipe-name');
const summaryText = document.getElementById('summary-text');

const mealType = document.getElementById('meal-type');
const winePairing = document.getElementById('wines');
const stepsDiv = document.getElementById('steps');
const productsDiv = document.getElementById('products');


window.addEventListener('load', () => {

    const URLs = {
        similarRecipe: `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}&number=3`,
        recipe: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
        product: `https://api.spoonacular.com/food/products/${id}?apiKey=${apiKey}`,
        video: `https://api.spoonacular.com/food/videos/search?apikey=${apiKey}`,
        menu: `https://api.spoonacular.com/food/menuItems/${id}?apikey=${apiKey}`
    }

    switch(type){

        case 'results':

            fetchData(URLs.recipe)
            break

        case 'products':

            fetchData(URLs.product)
            break

        case 'menuItems':

            fetchData(URLs.menu)
            break

    }
    /* similarSearch(URLs.similarRecipe) */

});



function fetchData(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        recipeImg.src = data.image;
        recipeName.innerHTML = data.title;
        summaryText.innerHTML = data.summary;

        data.dishTypes.map(dish => {
            const p = document.createElement('p');
            p.textContent = dish;

            mealType.appendChild(p);
        });

        // make it a picture its much better than the text of the wine name
        if(data.winePairing.pairedWines.length > 0 ){
            data.winePairing.pairedWines.forEach(wine => {
                const p = document.createElement('p');
                p.innerHTML = wine;
                winePairing.appendChild(p);
            });
        }
        else {
            const p = document.createElement('p');
            p.textContent = 'no wine pairing';
            winePairing.appendChild(p);
        }


        data.extendedIngredients.map(ingredient => {

            const elem = {
                productDiv: document.createElement('div'),
                img: document.createElement('img'),
                p: document.createElement('p')
            }
            
            elem.productDiv.className = 'product';
            elem.img.src = `https://spoonacular.com/recipeImages/${ingredient.image}`;
            elem.p.textContent = ingredient.original;

            elem.productDiv.appendChild(elem.img);
            elem.productDiv.appendChild(elem.p);
            productsDiv.appendChild(elem.productDiv);

        });

/*             stepsDiv.innerHTML = recipe.intructions; */
        data.analyzedInstructions[0].steps.map(step => {

            const liElem = document.createElement('li');
            liElem.textContent = step.step;

            stepsDiv.appendChild(liElem);
        });


    })
    .catch(err => console.error(err));
}

function similarSearch(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));
}