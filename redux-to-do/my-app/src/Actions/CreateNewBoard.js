import { CREATE_NEW_BOARD } from "./ActionTypes";

export default function createNewBoard() {

    return dispatch => {
        dispatch({
            type: CREATE_NEW_BOARD,
            payload: true
        })
    }

}