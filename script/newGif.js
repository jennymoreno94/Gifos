import DataPost from '../utils/postData.js'
import DataGet from '../utils/getData.js'


let form = new FormData();
let recorder
let start = document.getElementById('start');
start.addEventListener('click', getStream);
let repeat = document.getElementById('time-capture');
repeat.addEventListener('click', function () {
    recorder.clearRecordedData();
    document.getElementById('upload').style.display = 'none';
    document.getElementById('step3').classList.remove('step--active')
    getStream();
})


const giveAccesToCamara = `
    <h1 id="video-title" class="main-title">¿Nos das acceso <br> a tu cámara?</h1>
    <p id="video-text" class="new-gifos-welcome-paragraph">El acceso a tu camara será válido sólo <br>por el tiempo en el que estés creando el GIFO.</p>
`;

function getStream() {
    firstStep();
    let video = document.createElement('video');
    let videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = giveAccesToCamara;
    videoContainer.appendChild(video);
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 300 }
        }
    })
        .then(function (stream) {
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
            //video.play();
            secondStep();
            recorder = RecordRTC(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240
            })

            let record = document.getElementById('record');
            record.addEventListener('click', function () {
                video.play();
                recorder.startRecording();
                thridStep();
                timer(recorder)
            })
            let finish = document.getElementById('finish');
            let blob
            finish.addEventListener('click', function () {
                recorder.stopRecording(function () {
                    blob = recorder.getBlob();
                    form.append('file', blob, 'myGif.gif');
                });
                video.pause();
                fourStep();
                timer(false);
            })


        })
}

let upload = document.getElementById('upload');
upload.addEventListener('click', function () {
    fiveStep();
    uploadGif(form);

})

function uploadGif(file) {
    createLoadingAnimation();
    DataPost.postGif(file)
        .then(response => {
            addToLocalStorage('myGifs', response.data.id)
            changetoSuccessAnimation();
            getMyGifosData();
        });
}

function changetoSuccessAnimation() {
    document.getElementById('video-loader').src = "../images/ok.svg";
    document.getElementById('video-loader').classList.remove('video-loader-animation');
    document.getElementById('video-text-loader').textContent = "GIFO subido con éxito";
}

function createLoadingAnimation() {
    document.getElementById('upload').style.display = 'none';
    let videoUploadAnimation = document.createElement('div');
    let heightVideo = document.getElementsByTagName('video')[0].offsetHeight;
    let widthVideo = document.getElementsByTagName('video')[0].offsetWidth;
    videoUploadAnimation.style.height = `${heightVideo}px`;
    videoUploadAnimation.style.width = `${widthVideo}px`;
    videoUploadAnimation.id = "video-animation";
    videoUploadAnimation.className = "video video-animation";
    videoUploadAnimation.innerHTML = `<img id="video-loader" class="video-loader video-loader-animation" src="../images/loader.svg"> <p id="video-text-loader" class="video-text-loading">Estamos Subiendo tu GIFO </p>`;
    let videoContainer = document.getElementById('video-container');
    videoContainer.appendChild(videoUploadAnimation);
}

function addToLocalStorage(name, value) {
    let existing = localStorage.getItem(name);
    existing = existing ? JSON.parse(existing) : [];
    existing.push(value);
    localStorage.setItem(name, JSON.stringify(existing));
}

function getMyGifosData() {
    let dataGif = [];
    const data = JSON.parse(localStorage.getItem('myGifs'));
    if (data) {
        data.map(function (id) {
            DataGet.getGifById(id)
                .then(response => {
                    dataGif.push(response.data);
                    localStorage.setItem('myGifData', JSON.stringify(dataGif))
                });

        });
    }
}

function fiveStep() {
    document.getElementById('step2').classList.remove('step--active')
    document.getElementById('step3').classList.add('step--active')
    document.getElementById('time-capture').style.display = 'none';
}

function fourStep() {
    document.getElementById('finish').style.display = 'none';
    document.getElementById('upload').style.display = 'block';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('time-capture').style.display = 'flex';
}

function thridStep() {
    document.getElementById('record').style.display = 'none';
    document.getElementById('time-capture').style.display = 'none';
    document.getElementById('timer').style.display = 'flex';
    document.getElementById('finish').style.display = 'block';
}

function secondStep() {
    document.getElementById('video-title').remove();
    document.getElementById('video-text').remove();
    document.getElementById('step1').classList.remove('step--active')
    document.getElementById('step2').classList.add('step--active')
    document.getElementById('record').style.display = 'block';
}

function firstStep() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('step1').classList.add('step--active')
}

function calculateTimeDuration(secs) {
    let hr = Math.floor(secs / 3600);
    let min = Math.floor((secs - (hr * 3600)) / 60);
    let sec = Math.floor(secs - (hr * 3600) - (min * 60));
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return hr + ':' + min + ':' + sec;
}

function timer(recorder) {
    let dateStarted = new Date().getTime();
    let timer = document.getElementById('timer');
    (function looper() {
        if (!recorder) {
            return;
        }
        timer.innerHTML = calculateTimeDuration((new Date().getTime() - dateStarted) / 1000);
        setTimeout(looper, 1000);
    })();
}

