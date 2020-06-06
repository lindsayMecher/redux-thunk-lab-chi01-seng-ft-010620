// write and export your action creator function here

const API = "https://learn-co-curriculum.github.io/cat-api/cats.json"

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(API)
            .then(response => response.json())
            .then(catData => {
                console.log(catData)
                dispatch({type: "ADD_CATS", payload: catData.images})
            })
    }
};

