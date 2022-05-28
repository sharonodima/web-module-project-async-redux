import * as actionTypes from "./action-types"; 
import axios from "axios";

export function getCatFact(){
    return function (dispatch) {
        axios.get("https://catfact.ninja/fact")
        .then(res => {
            console.log(res.data.fact);
            dispatch({
                type: actionTypes.SET_CAT_FACT,
                payload: res.data.fact
            })
        })
        .catch(err => console.error(err))
    }
}

export function getCatImg(){
    return function (dispatch) {

        axios.get("https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true")
        .then(res => {
            console.log(res.data[0].url);
            dispatch({
                type: actionTypes.SET_CAT_IMAGE,
                payload: res.data[0].url
            })
        })
        .catch(err => console.error(err))
    }
}