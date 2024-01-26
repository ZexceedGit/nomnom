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

});



function fetchData(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data[type].map((recipe, index) => {

            recipeImg.src = recipe.image;
            recipeName.textContent = recipe.title;
            summaryText.textContent = recipe.summary;

            recipe.dishTypes.map(dish => {
                const p = document.createElement('p');
                p.textContent = dish;

                mealType.appendChild(typeP);
            });
            recipe.winePairing.map(wine => {
                const p = document.createElement('p');
                p.textContent = wine;

                winePairing.appendChild(p);
            });

/*             stepsDiv.innerHTML = recipe.intructions; */
            recipe.analyzedInstructions[0].steps.map(step => {

                const liElem = document.createElement('li');
                liElem.textContent = step.step;
            });

            recipe.extendedIngredients.map(ingredient => {

                const elem = {
                    productDiv: document.createElement('div'),
                    img: document.createElement('img'),
                    p: document.createElement('p')
                }
                
                elem.productDiv.className = 'product';
                elem.img.src = ingredient.image;
                elem.p.textContent = ingredient.name;
    
                elem.productDiv.appendChild(elem.img);
                elem.productDiv.appendChild(elem.p);
                productsDiv.appendChild(elem.productDiv);

            });


        });
    })
    .catch(err => console.error(err));
}
