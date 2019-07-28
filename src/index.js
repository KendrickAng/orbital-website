// The main entry point of the React app.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// REDUX
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'; // webpack imports index.js if file not specified.
import thunk from 'redux-thunk';

// FIREBASE
import firebase from 'firebase/app';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { fbConfig } from './config/fbConfig';

// FIRESTORE
import 'firebase/firestore';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import * as serviceWorker from './serviceWorker';

// Initialise firebase instance
firebase.initializeApp(fbConfig);
// Initiaise cloud firestore through Firebase
firebase.firestore();

// react-redux-firebase options
const config = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({ getFirestore, getFirebase })
        ),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, config)
    ) 
);

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
