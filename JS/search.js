const apiKey = '5a095273a4624c4496872f4674ee9c6e';
window.addEventListener('load', () => {

    const triviaText = document.getElementById('trivia-text-p');

    url = `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`;

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
const paginationDiv = document.getElementById('pagination');




const URLs = {
    recipe: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=20&`,
    product: `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&number=20&`,
    video: `https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}&number=20&`,
    menu: `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&number=20&`
}

const searchHistory = []
const searchQuery = []
let productDatas = [];
let currentIndex = 0;
let datas = [];



categories.forEach((category, index) => {
    
    
    category.addEventListener('click', () => {


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
                
                searchQuery.push(URLs.recipe);
                datas[0] = 'results';
                datas[1] = 'image';
                break
                
            case 1:
                
                searchQuery.push(URLs.product);
                datas[0] = 'products';
                datas[1] = 'image';
                break
                
            case 2:
                
                searchQuery.push(URLs.video);
                datas[0] = 'videos';
                datas[1] = 'thumbnail';
                break
                
            case 3:
                
                searchQuery.push(URLs.menu);
                datas[0] = 'menuItems';
                datas[1] = 'image';
                break
                
            }
                    
    });
    
});


function renderProducts(arr, index){
    recipeContainer.innerHTML = '';

    arr[index].forEach((recipeInfo, index) => {

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
}

function search(url, query){
    const q = url + 'query=' + query;
    fetch(q)
    .then(res => res.json())
    .then(data => {
        productDatas = [];
        for(let i = 0; i <= data[datas[0]].length; i+=6){
            console.log(productDatas.push(data[datas[0]].slice(i, i+6)));
            console.log(productDatas);
        }
        renderProducts(productDatas, currentIndex)
        renderPagination()

        quantityResult.textContent = 'Results: ' + data[datas[0]].length;

    })
    .catch(err => console.error(err));
}

searchBtn.addEventListener('click', () => {
    if(searchQuery.length !== 0){
        search(searchQuery[searchQuery.length - 1], query.value)
    }
});

function renderPagination(){
    paginationDiv.innerHTML = '';
    productDatas.forEach((item, index) => {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = index + 1;
    
        pageBtn.addEventListener('click', () => {
            currentIndex = index;
            renderProducts(productDatas, currentIndex)
        });
    
        paginationDiv.appendChild(pageBtn);
    
    });
}

