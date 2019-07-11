export const scoresReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH_SCORES":
            return action.payload;
        default:
            return state;
    }
}