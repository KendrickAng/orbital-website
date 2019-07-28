// Redux reducer for the action of querying highscores from Cloud firestore.
export const scoresReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH_SCORES":
            return action.payload;
        default:
            return state;
    }
}