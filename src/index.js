import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function AllPoster({demotivationText}) {
  return (
    <div className='all-poster'>
      <div className='demo-text'>{demotivationText}</div>
      <Poster poster = {posterOne} colour = "one" titleColor="title-one title"/>
      <Poster poster = {posterTwo} colour = "two" titleColor="title-two title"/>
      <Poster poster = {posterThree} colour = "three" titleColor="title-three title"/>
    </div>
  )
}

function Poster({poster, colour, titleColor}) {
  const {image, title, text} = poster
  return (
    <div className='container'>
      <div className='image'>
        <img src = {image} alt= "demotivation" className={colour}/>
      </div>
      <h1 className={titleColor}>{title}</h1>
      <h3 className='text'>{text}</h3>
    </div>
  )
}

//Poster class (poster object template)
class PosterObject {
  constructor(image, title, text) {
    this.image = image;
    this.title = title;
    this.text = text;
  }
}

//You can also use the PosterObject constructor function if you get confused with React classes
// function PosterObject (image, title, text) {
//   this.image = image;
//   this.title = title;
//   this.text = text
// }

//Posters
const textAttitude = "If You Can't Handle Me At My Worst, You Deserve To Know It's Also My Best";
const textConspiracy = "Never Attribute To Stupidity That Which Can Be Adequately Explained By A Pathological Bloodlust For Control";
const textDystopia = "The Road To Hell Is Paved With Good Intentions, And Now They Are Bringing It To My Driveway And Taxing Me For It";

const imgAtt = require("./images/Attitude.png");
const imgConsp = require("./images/conspiracyool.png");
const imgDyst = require("./images/dystopia-ool.png");

const posterOne = new PosterObject(imgAtt, "Attitude", textAttitude);
const posterTwo = new PosterObject(imgConsp, "Conspiracy", textConspiracy);
const posterThree = new PosterObject(imgDyst, "Dystopia", textDystopia);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AllPoster demotivationText="Demotivational Posters" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

