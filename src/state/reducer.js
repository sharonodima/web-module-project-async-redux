import { combineReducers } from 'redux'
import * as actionTypes from "./action-types";


const initialDogState = "";
function cats(state=initialDogState, action){
    switch(action.type){
        case actionTypes.SET_CAT_IMAGE:
            return {
                ...state,
                image: action.payload
            }
    }
    return state;
}

const initialFactState = "";
function facts(state=initialFactState, action){
    switch(action.type) {
        case actionTypes.SET_CAT_FACT:
            return {
                ...state,
                fact: action.payload
            }
    }
    return state;
}

export default combineReducers({cats, facts})