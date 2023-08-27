import data from "../data/gifs"

const initialState = {
    gifs: data,
    loading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_GIFS":
            return {
                ...state,
                loading: true
            }
        case "GIFS_SUCCESS":
            return {
                ...state,
                loading: false,
                gifs: action.payload
            }
        case "GIFS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;