// Connect react app to the dom
//Everytime create a react application need to write the four lines 
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
ReactDOM.render(<App />,document.getElementById('root'));//public folder index.html only has one div id root. Can also change the name of the site in the same file


