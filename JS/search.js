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

const query = document.getElementById('query');
const searchBtn = document.getElementById('search-btn');
const categories = document.querySelectorAll('.category');
const recipeContainer = document.getElementById('recipe-container');
const quantityResult = document.getElementById('quantityResult');
const apiKey = '5a095273a4624c4496872f4674ee9c6e';
const recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=5&`;
const productUrl = `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&number=5&`;
const videoUrl = `https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}&number=5&`;
const menuUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&number=5&`;

const searchHistory = []
const searchQuery = []
let datas = [];



categories.forEach((category, index) => {
    
    
    category.addEventListener('click', () => {
/*         category.style.backgroundColor = '#fff';
        category.style.color = '#000';
        categories[index].style.backgroundColor = 'rgb(27, 40, 7)';
        categories[index].style.color = '#fff'; */

        categories.forEach((otherCategory, otherIndex) => {
            if (otherIndex !== index) {
                otherCategory.style.backgroundColor = '#fff';
                otherCategory.style.color = '#000';
            }
        });

        category.style.backgroundColor = 'rgb(27, 40, 7)';
        category.style.color = '#fff';
        
        switch(index){
            case 0:
                
                searchQuery.push(recipeUrl);
                datas[0] = 'results';
                datas[1] = 'image';
                break
                
            case 1:
                
                searchQuery.push(productUrl);
                datas[0] = 'products';
                datas[1] = 'image';
                break
                
            case 2:
                
                searchQuery.push(videoUrl);
                datas[0] = 'videos';
                datas[1] = 'thumbnail';
                break
                
            case 3:
                
                searchQuery.push(menuUrl);
                datas[0] = 'menuItems';
                datas[1] = 'image';
                break
                
            }
                    
    });
    
});


function search(url, query, resultType){
    const q = url + 'query=' + query;
    console.log(datas);
    fetch(q)
    .then(res => res.json())
    .then(data => {
        recipeContainer.innerHTML = '';
        data[datas[0]].map((recipeInfo,index) => {

            const elem = {
                divElem: document.createElement('div'),
                imgElem: document.createElement('img'),
                pElem: document.createElement('p')
            }

            elem.divElem.className = 'recipe';
            elem.imgElem.src = recipeInfo[datas[1]];
            elem.pElem.textContent = 'see more';

            elem.divElem.appendChild(elem.imgElem);
            elem.divElem.appendChild(elem.pElem);
            recipeContainer.appendChild(elem.divElem);
        });
        console.log(data[datas[0]])
        quantityResult.textContent = 'Results: ' + data[datas[0]].length;
    })
    .catch(err => console.error(err));
    console.log(resultType);
}

searchBtn.addEventListener('click', () => {
    if(searchQuery.length !== 0){
        search(searchQuery[searchQuery.length - 1], query.value, datas)
    }
});