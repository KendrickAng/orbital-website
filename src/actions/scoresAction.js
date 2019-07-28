// Query scores from Firebase Cloud Firestore. Order by highest level, lowest time, then highest score.
export const fetchScores = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("highscores")
                .where("version", "==", "BETA 1.5")
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