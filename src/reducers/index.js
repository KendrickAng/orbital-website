import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { scoresReducer } from './scoresReducer';

//Reducers specify how the application's state changes in response to actions sent to the store.

const gettingStartedContent = ["1. Download java (if you don't have it)", "2. Download the .jar game from the homepage", "3. Enjoy :)"];
const tankContent = ["Primary: Block", "Secondary: Stab", "Tertiary: Fortress"];
const assassinContent = ["Primary: Dash", "Secondary: Shuriken", "Tertiary: Cleanse"];

const guidesReducer = () => {
    return [
        { title: "Getting Started", description: "Simple download & installation guide", content: gettingStartedContent },
        { title: "Tank", description: "Playable character #1", content: tankContent },
        { title: "Assassin", description: "Playable character #2", content: assassinContent }
    ];
}

const selectedGuideReducer = (state=null, action) => {
    // allows us to expand app
    switch (action.type) {
        case "GUIDE_SELECTED":
            return action.payload;
        default:
            return state;
    }
}

// What our state store will have
export default combineReducers({
    guides: guidesReducer,
    selectedGuide: selectedGuideReducer,
    scores: scoresReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});