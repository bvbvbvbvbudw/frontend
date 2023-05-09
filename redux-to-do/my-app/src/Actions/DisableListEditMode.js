import { STOP_EDITING_LIST } from "./ActionTypes";

export default function disableCreatingBoard() {

    return dispatch => {
        dispatch({
            type: STOP_EDITING_LIST,
            payload: false
        })
    }
}