const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

window.addEventListener('load', () => {

    const URLs = {
        recipe: `https://api.spoonacular.com/recipes/${id}/information`,
        product: `https://api.spoonacular.com/food/products/${id}`,
        video: `https://api.spoonacular.com/food/videos/search`,
        menu: `https://api.spoonacular.com/food/menuItems/${id}`
    }
})

const recipeImg = document.getElementById('recipe-image');