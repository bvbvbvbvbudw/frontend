import { CANCEL_NEW_BOARD } from "./ActionTypes";

export default function cancelCreatingBoard() {

    return dispatch => {
        dispatch({
            type: CANCEL_NEW_BOARD,
            payload: false
        })
    }

}