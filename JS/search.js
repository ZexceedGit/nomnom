window.addEventListener('load', () => {

    const triviaText = document.getElementById('trivia-text');

    url = ``;

    fetch(url)
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.error(err));

});

const query = document.getElementById('query').value;
const searchBtn = document.getElementById('search-btn');
const categories = document.querySelectorAll('.category');
const recipeUrl = '';
const productUrl = '';
const videoUrl = '';
const menuUrl = '';


let currentCategoryIndex = 0;
categories.forEach((category, index) => {
    
    category.addEventListener('click', () => {

        switch(index){
            case 0:

                searchBtn.addEventListener('click', () => {
                    search(recipeUrl, query);
                    console.log(index);
                });
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
    fetch(url + query)
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.error(err));
}