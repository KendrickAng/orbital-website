export const fetchScores = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("highscores")
                .orderBy("level", "desc")
                .orderBy("time", "asc")
                .orderBy("score", "desc")
                .limit(12)
                .get()
                .then(querySnapshot => {
                    dispatch({
                        type: "FETCH_SCORES",
                        payload: querySnapshot.docs
                    });
                });                
    }
}