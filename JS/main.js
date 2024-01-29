const apiKey = '5a095273a4624c4496872f4674ee9c6e';
let dataType = '';
window.addEventListener('load', () => {

    const innerSlider = document.getElementById('inner-slider');
    const innerSliderProducts = document.getElementById('inner-slider-products');
    const innerSliderVideos = document.getElementById('inner-slider-videos');
    
    const recipeUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    fetch(`${recipeUrl}&number=3`)
    .then(res => res.json())
    .then(data => {
        data.recipes.map(recipe => {
            const itemDiv = document.createElement('div');
            const img = recipe.image;   

            itemDiv.className = 'slider-item';
            itemDiv.style.backgroundImage = `url(${img})`;
            innerSlider.appendChild(itemDiv);

            itemDiv.addEventListener('click', () => {
                dataType = 'results';
                getDetails(recipe.id, dataType)
            });

        });
    })
    .catch(err => console.error(err));


    const productUrl = `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&`;   

    fetch(`${productUrl}query=yogurt&number=3`)
    .then(res => res.json())
    .then(data => {
        data.products.map(product => {
            const itemDiv = document.createElement('div');
            const img = product.image;

            itemDiv.className = 'slider-item';
            itemDiv.style.backgroundImage = `url(${img})`;
            innerSliderProducts.appendChild(itemDiv);

        });
    })
    .catch(err => console.error(err));
    const urlVideos = `https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}`;
    fetch(`${urlVideos}&query=vegetables&number=3`)
    .then(res => res.json())
    .then(data => {
        data.videos.map(videos => {
            const itemDiv = document.createElement('div');
            const img = videos.thumbnail;

            itemDiv.className = 'slider-item';
            itemDiv.style.backgroundImage = `url(${img})`;
            innerSliderVideos.appendChild(itemDiv);
            
            itemDiv.addEventListener('click', () => {
                dataType = 'videos';
                getDetails(videos.youTubeId, dataType, videos.title)
            });
        });
    })
    .catch(err => console.error(err));



});



const steps = document.querySelectorAll('.step-meal-plan');


let currentStep = 0;
setInterval(() => {
    steps.forEach(step => {
        step.style.scale = '1';
        step.style.opacity = '.7';
    })
    if(currentStep <= 2){
        steps[currentStep].style.scale = '1.1';
        steps[currentStep].style.opacity = '1';
        currentStep += 1;
    }
    else{
        currentStep = 0;
    }
}, 3000);

function getDetails(id, type, title){
    if(type !== 'videos'){
        window.location.href = `../pages/details.html?type=${type}&id=${id}`;
    }
    else if(type === 'videos'){
        window.location.href = `../pages/video.html?id=${id}&title=${title}`;
    }
}