// select Quickstart guide
export const selectGuide = guide => {
    // return an action
    return {
        type: "GUIDE_SELECTED", // this is required
        payload: guide
    };
};