const webcam = new Webcam(document.getElementById("wc"));
let model;
let isPredicting = false;

async function loadModel(){ 
              const model = await tf.loadModel('web_model/model.json');
              document.getElementById('out').innerHTML += model;
          }

// Ensures that prediction is started once
function startPredicting() {
    isPredicting = true;
    predict();
}

// Stops predicting when pressed
function stopPredicting() {
    isPredicting = false;
    predict();
}

// Combines everything
async function init() {
    await webcam.setup();
    model = await loadModel();
    tf.tidy(() => mobilenet.predict(webcam.capture()));
}

init();
