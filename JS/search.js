window.addEventListener('load', () => {

    const triviaText = document.getElementById('trivia-text-p');

    url = `https://api.spoonacular.com/food/trivia/random?apiKey=5a095273a4624c4496872f4674ee9c6e`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        triviaText.textContent = data.text;
    })
    .catch(err => console.error(err));

});

const query = document.getElementById('query').value;
const searchBtn = document.getElementById('search-btn');
const categories = document.querySelectorAll('.category');
const recipeContainer = document.getElementById('recipe-container');
const apiKey = '5a095273a4624c4496872f4674ee9c6e';
const recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&`;
const productUrl = `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}`;
const videoUrl = `https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}`;
const menuUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}`;

const searchHistory = []


let currentCategoryIndex = 0;
categories.forEach((category, index) => {
    
    category.addEventListener('click', () => {

        switch(index){
            case 0:
                if(!recipeContainer){
                    searchBtn.addEventListener('click', () => {
                        search(recipeUrl, query);
                        searchHistory.push(query);
                    });
                }
                else if(recipeContainer){
                    search(recipeUrl, searchHistory[0])
                    searchHistory.push(query);
                }

                break

            case 1:

            searchBtn.addEventListener('click', () => {
                search(productUrl, query);
                console.log(index);
            });
                break

            case 2:

            searchBtn.addEventListener('click', () => {
                search(videoUrl, query);
                console.log(index);
            });
                break

            case 3:

            searchBtn.addEventListener('click', () => {
                search(menuUrl, query);
                console.log(index);
            });
                break

        }
        
    });

});


function search(url, query){
    fetch(`${url}${query}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}