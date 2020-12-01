const webcam = new Webcam(document.getElementById("wc"));
let model;

async function loadModel(){ 
              model = await tf.loadModel('web_model/model.json');
              document.getElementById('out').innerHTML += model;
          }

// Ensures that prediction is started once
function startPredicting() {
    webcam.capture();
    //Need to create a predict() method for the model that will use the model's labels to classify the captured image
    predict();
}

// Combines everything
async function init() {
    await webcam.setup();
    model = await loadModel();
}

init();
