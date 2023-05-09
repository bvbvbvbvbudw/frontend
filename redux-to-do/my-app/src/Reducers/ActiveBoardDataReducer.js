import { combineReducers } from 'redux';
import { SUBMIT_LIST, SUBMIT_NEW_CARD, HANDLER_DROP, ARCHIVE_POST, SELECT_ACTIVE_BOARD } from '../Actions/ActionTypes';
import uniqueId from 'lodash/uniqueId';

const ListReducer = (state = {}, action) => {
    const ListId = uniqueId('list_');

    switch (action.type) {
        case SELECT_ACTIVE_BOARD:
            return action.payload.data || [];

        case SUBMIT_LIST:
            return {
                ...state,
                [listId]: {
                    name: action.payload,
                    id: listId,
                    cards: []
                }
            };

        case SUBMIT_NEW_CARD: {

            const { listId, cardName, cardId } = action.payload;
            const currentList = state[listId];
            currentList.cards.push({ name: cardName, cardId, listId, isArchived: false });

            return {
                ...state,
                [listId]: currentList,
            };
        }

        case HANDLER_DROP: {
            const { cardName, cardId, listId, newListId } = action.payload;
            const currentList = state[newListId];
            currentList.cards.push({ name: cardName, cardId, newListId });

            const removeCard = state[listId].cards.findIndex(card => card.cardId === cardId) // const fncname = card ()=> return card.cardId === cardId (false true)
            const oldList = state(listId).cards.splice(removeCard, 1);

            return {
                ...state,
                [newListId]: currentList,
            }
        }

        case ARCHIVE_POST: {
            const { cardId, listId } = action.payload;
            const currentList = state[listId];
            const findCard = currentList.cards.find(card => card.cardId === cardId);

            if (findCard.isArchived === false) {
                findCard.isArchived = true;
            } else findCard.isArchived = false;

            return {
                ...state,
                [listId]: currentList
            }
        }

        default:
            return state;
    }
}

const ActiveBoardDataReducer = combineReducers({
    listItems: ListReducer,
});
export default ActiveBoardDataReducer;