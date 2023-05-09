import { HANDLER_DROP } from "./ActionTypes";

export default function handlerDrop(cardName, cardId, listId, newListId) {

    return dispatch => {
        dispatch({
            type: HANDLER_DROP,
            payload: {cardName, cardId, listId, newListId}
        })
    }
}