import { combineReducers } from 'redux';

const gettingStartedContent = ["1. Download java (if you don't have it)", "2. Download the .jar game from the homepage", "3. Enjoy :)"];
const tankContent = ["Primary: Block", "Secondary: Stab", "Tertiary: Fortress"];
const assassinContent = ["Primary: Dash", "Secondary: Shuriken", "Tertiary: Cleanse"];

// Reducers
const guidesReducer = () => {
    return [
        { title: "Getting Started", description: "Simple download & installation guide", content: gettingStartedContent },
        { title: "Tank", description: "Playable character #1", content: tankContent },
        { title: "Assassin", description: "Playable character #2", content: assassinContent }
    ];
}

const selectedGuideReducer = (selectedGuide = null, action) => {
    // allows us to expand app
    if (action.type === "GUIDE_SELECTED") {
        return action.payload;
    }
    return selectedGuide;
}

// allow any app to access our reducers
export default combineReducers({
    guides: guidesReducer,
    selectedGuide: selectedGuideReducer
});