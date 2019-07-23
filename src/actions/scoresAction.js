export const fetchScores = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("highscores")
                .orderBy("score", "desc")
                .limit(10)
                .get()
                .then(querySnapshot => {
                    dispatch({
                        type: "FETCH_SCORES",
                        payload: querySnapshot.docs
                    });
                });                
    }
}