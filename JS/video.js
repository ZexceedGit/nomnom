const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const title = urlParams.get('title');

const arr = [];


    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: `${id}`,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
        });
    }


    function onPlayerReady(event) {
        event.target.playVideo();
    }


    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
        }
    }
    function stopVideo() {
        player.stopVideo();
    }

    const titleElem = document.getElementById('title');
    titleElem.textContent = title;


    const apiKey = '5a095273a4624c4496872f4674ee9c6e';
    const videoURL = `https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}&number=3&query=${arr.forEach(recipe => { return recipe })}`;
    const resultsDiv = document.getElementById('results');

    window.addEventListener('load', () => {
        arr.push(title.split(' '));
        console.log(arr);
        console.log(arr.slice(0, arr.length / 2))

        fetch(videoURL)
        .then(res => res.json())
        .then(data => {
            resultsDiv.innerHTML = '';
            data.videos.map((video, index) => {
                const elem = {
                    div: document.createElement('div'),
                    img: document.createElement('img'),
                    p: document.createElement('p')
                }

                elem.div.className = 'video';
                elem.img.src = video.thumbnail;
                elem.p.textContent = 'see more';

                elem.div.appendChild(elem.img);
                elem.div.appendChild(elem.p);
                resultsDiv.appendChild(elem.div);
            })
        })
        .catch(err => console.error(err));
    });
