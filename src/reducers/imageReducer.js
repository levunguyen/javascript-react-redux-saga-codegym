import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles image related actions
export default function (state = initialState.images, action = null) {
    switch (action.type) {
        case types.FLICKR_IMAGES_SUCCESS:
            console.log("After saga to get Photo");
            return [...state, action.images];
        case types.SELECTED_IMAGE:
            return { ...state, selectedImage: action.image };
        default:
            return state;
    }
}