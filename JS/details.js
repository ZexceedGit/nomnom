const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const type = urlParams.get('type');
const apiKey = `5a095273a4624c4496872f4674ee9c6e`;



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
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

const recipeImg = document.getElementById('recipe-image');