import { Component } from 'react';
// import Clarifai from 'clarifai';
import {ClarifaiStub, grpc} from 'clarifai-nodejs-grpc'
// import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Logo from './components/Logo/Logo.js';
import Navigation from './components/Navigation/Navigation.js'
import ParticlesComponent from './components/Particles/Particles.js';
import Rank from './components/Rank/Rank.js';

// Styles
import './App.css';

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "664ee7c2dfe44d10bfd4bcfb38a621a4");
 

class App_1 extends Component {

  constructor () {
      super();
      this.state = {
        input: '',
      }
    }

  inputForm = (e) => {
    console.log(e.target.value);
  }
  
  detectButtonClick = () => {
    console.log('click');
    stub.PostModelOutputs(
      {
          // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
          model_id: "aaa03c23b3724a16a56b629203edc62c",
          inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
      },
      metadata,
      (err, response) => {
          if (err) {
              console.log("Error: " + err);
              return;
          }
  
          if (response.status.code !== 10000) {
              console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
              return;
          }
  
          console.log("Predicted concepts, with confidence values:")
          for (const c of response.outputs[0].data.concepts) {
              console.log(c.name + ": " + c.value);
          }
      }
    );
  }
  

  render () {
    return (
      <div className="App" id='background'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          inputForm = {this.inputForm} 
          detectButtonClick = {this.detectButtonClick}
        />
        <ParticlesComponent/>
      {/* 
        <FaceRecognition /> */}
      </div>
    );
  }
  
}

export default App_1;
