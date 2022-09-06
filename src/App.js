
import { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Logo from './components/Logo/Logo.js';
import Navigation from './components/Navigation/Navigation.js'
import ParticlesComponent from './components/Particles/Particles.js';
import Rank from './components/Rank/Rank.js';

// import SignIn from './components/SignIn/SignIn.js';

// Styles
import './App.css';


// *****************************************************************
  // Wasn't able to get this code from the course to work
      // const app = new Clarifai.App({
      // apiKey: '664ee7c2dfe44d10bfd4bcfb38a621a4'
      // });
  // See code below as well
// ***************************************************************** 

// ***************************************************************** 
// Using JavaScript (REST) template from
// https://docs.clarifai.com/api-guide/predict/images/?__hstc=26175983.5c9a433870ee125f2704fc0fff095328.1662272300720.1662272300720.1662272300720.1&__hssc=26175983.1.1662272300720&__hsfp=3874435361
// https://help.clarifai.com/hc/en-us/articles/4408131744407-Integrating-Clarifai-in-your-React-Javascript-project

// ***************************************************************** 


class App extends Component {

  constructor () {
      super();
      this.state = {
        input: '',
        imageUrl: '',
        box: {},
      }
    }

  calcFaceLocation = (d) => {
    const clarifaiFace = d.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(clarifaiFace);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  inputForm = (e) => {
    this.setState({input: e.target.value})
  }
  
  detectButtonClick = () => {
    this.setState({imageUrl: this.state.input});
  
// *****************************************************************
    // Wasn't able to get this code from the course to work
      // app.models.predict(
      //   Clarifai.FACE_DETECT_MODEL,
      //   'https://samples.clarifai.com/face-det.jpg')
      // .then(
      //   function(response) {
      //     console.log(response);
      //   },
      //   function(err) {
      //     // There was an error
      //   }
      // );
// *****************************************************************

// *****************************************************************
// Using JavaScript (REST) template from
// https://docs.clarifai.com/api-guide/predict/images/?__hstc=26175983.5c9a433870ee125f2704fc0fff095328.1662272300720.1662272300720.1662272300720.1&__hssc=26175983.1.1662272300720&__hsfp=3874435361
// https://help.clarifai.com/hc/en-us/articles/4408131744407-Integrating-Clarifai-in-your-React-Javascript-project

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": process.env.REACT_APP_USER_ID,
      "app_id": process.env.REACT_APP_PROJECT_ID
    },
    "inputs": [{
      "data": {
        "image": { "url": this.state.input }
      }
    }]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + process.env.REACT_APP_CARIFAI_PAT_KEY
    },
    body: raw
  };

  // *****************************************************************

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id
  // "https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions

  fetch("https://api.clarifai.com/v2/models/" + process.env.REACT_APP_MODEL_ID + "/versions/" + process.env.REACT_APP_MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => this.displayFaceBox(this.calcFaceLocation(result)))
    .catch(error => console.log('error', error));
  // *****************************************************************
  }
  

  render () {
    return (
      <div className="App" id='background'>
        <ParticlesComponent />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          inputForm = {this.inputForm} 
          detectButtonClick = {this.detectButtonClick}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
        {/* <SignIn /> */}
      </div>
    );
  }
  
}

export default App;
