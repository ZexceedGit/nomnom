window.addEventListener('load', () => {

    const innerSlider = document.getElementById('inner-slider');
    const innerSliderVideos = document.getElementById('inner-slider-videos');
    
    const url = `https://api.spoonacular.com/recipes/random?apiKey=5a095273a4624c4496872f4674ee9c6e`;
    fetch(`${url}&number=5`)
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

    const urlVideos = `https://api.spoonacular.com/food/videos/search?apiKey=5a095273a4624c4496872f4674ee9c6e`
    fetch(`${urlVideos}&query=vegetarian&number=5`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.videos.map(videos => {
            const itemDiv = document.createElement('div');
            const img = videos.thumbnail;
            console.log(img);

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
}, 2000);