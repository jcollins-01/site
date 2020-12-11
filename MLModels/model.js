/**
*  Uses the webcam to capture an image and actually run the model's prediction on the image it takes in.
*  Will compile that prediction into user output. Also sets up the webcam and loads the model onto the page.
*/
const webcam = new Webcam(document.getElementById("wc"));
let model;
/**
*  Loads the model into the webpage from the web_model folder.
*/
async function loadModel(){ 
              model = await tf.loadGraphModel('web_model/model.json');
              document.getElementById('out').innerHTML += model;
          }

/**
*  Will start the model's prediction sequence and choose the output with the highest probability.
*/
function startPredicting() {
  const predictedClass = tf.tidy(() => {
            const inputData = webcam.capture();
            //const activation = mobilenet.predict(img); --Encodings for mobilenet
            const prediction = model.predict(inputData);
            //.as1D.argMax() finds the value with highest probability
            return prediction.as1D().argMax();
        });
  const classId = (await predictedClass.data())[0];
        var predictionText = "";
        predictionText = "I see " + document.getElementById("num").value;
        document.getElementById("prediction").innerText = predictionText;
        // dispose clears the predictedClass variable
        predictedClass.dispose();
        await tf.nextFrame();           
}

/**
*  Initializes the webcam and loads the model into a variable model.
*/
async function init() {
    await webcam.setup();
    model = await loadModel();
}

//Code to help figure out conversion from Python to Javascript.
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
