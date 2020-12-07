const webcam = new Webcam(document.getElementById("wc"));
let model;

async function loadModel(){ 
              model = await tf.loadModel('web_model/model.json');
              document.getElementById('out').innerHTML += model;
          }

// Ensures that prediction is started once
function startPredicting() {
    const inputData = webcam.capture();
    //Need to create a predict() function for the model that will use the model's labels to classify the captured image
    //Maybe save the image captured by the webcam in a variable in order to do so
    //predict();
    const prediction = model.predict(inputData);
}

// Combines everything
async function init() {
    await webcam.setup();
    model = await loadModel();
}

//const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
//dictionary in js, where image is replaced by the array above
//var signature = JSON.parse("signature.json") <-parses through the json file for outputs/inputs

//  var fetches = [];
//     for (var key in signature.outputs){
//         fetches.push(key, signature.outpus[key];
//     }

//create a session in tensorflow.js -> assign to var session
//session.run

//for (var key : signature.output

init();
