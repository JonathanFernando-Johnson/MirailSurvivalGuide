import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA84YT4Mt87qd58NYIB8AtELGV6O3H_e8w",
    authDomain: "mirailsurvivalguide.firebaseapp.com",
    databaseURL: "https://mirailsurvivalguide.firebaseio.com",
    projectId: "mirailsurvivalguide",
    storageBucket: "mirailsurvivalguide.appspot.com",
    messagingSenderId: "254706655954"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
