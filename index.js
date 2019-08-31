

function addElement(strElement) {
  var scrollbox = document.getElementById('scrollbox');
  
  // Create some element, e.g. div
  var newElement = document.createElement('div');
  newElement.setAttribute('id', "some-id-for-new-element");
  
  newElement.innerHTML = strElement;
  
  scrollbox.appendChild(newElement);
}

let net;

async function app() {
  console.log('Loading mobilenet..');
  addElement('Loading mobilenet..');
  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');
  addElement('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const results = await net.classify(imgEl);
  console.log(results);
  addElement('Prediction results:');

  for (let i = 0; i < results.length; i++) {
    var text = "</br></br>index: " + i + "</br>className: " + results[i]["className"] + "</br>probability: " + results[i]["probability"];
    addElement(text);
  }
}


app();