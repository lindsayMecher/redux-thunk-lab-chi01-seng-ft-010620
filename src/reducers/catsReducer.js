// add the catsReducer
export const catsReducer = (state = {cats: [], loading: false}, action) => {
    console.log(state, action)
    switch(action.type){
        case "LOADING_CATS":
            console.log("loading")
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }
        case "ADD_CATS":
            console.log("adding")
            return {
                ...state,
                cats: [action.payload],
                loading: false
            }
        default:
            return state;
    }
};