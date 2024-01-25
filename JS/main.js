const apiKey = '5a095273a4624c4496872f4674ee9c6e';
window.addEventListener('load', () => {

    const innerSlider = document.getElementById('inner-slider');
    const innerSliderVideos = document.getElementById('inner-slider-videos');
    
    const recipeUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    fetch(`${recipeUrl}&number=5`)
    .then(res => res.json())
    .then(data => {
        data.recipes.map(recipe => {
            const itemDiv = document.createElement('div');
            const img = recipe.image;   

            itemDiv.className = 'slider-item';
            itemDiv.style.backgroundImage = `url(${img})`;
            innerSlider.appendChild(itemDiv);

        });
    })
    .catch(err => console.error(err));

    const productUrl = `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&number=5&`;   

    const urlVideos = `https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}`;
    fetch(`${urlVideos}&query=vegetables&number=5`)
    .then(res => res.json())
    .then(data => {
        data.videos.map(videos => {
            const itemDiv = document.createElement('div');
            const img = videos.thumbnail;

            itemDiv.className = 'slider-item';
            itemDiv.style.backgroundImage = `url(${img})`;
            innerSliderVideos.appendChild(itemDiv);

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