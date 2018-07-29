import {
    ADD_PHONE_TO_BASKET,
    REMOVE_PHONE_FROM_BASKET,
    CLEAN_BASKET
} from '../actions/namesActions'

import * as R from 'ramda';

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        // R.append - обЪединяет массив
        case ADD_PHONE_TO_BASKET:
            return R.append(payload, state)
        // R.without - удаляет повторяющиеся элементы из state,
        // которые есть в пэйлоад
        // R.of заворачивает значение в массив
        case REMOVE_PHONE_FROM_BASKET:
            return R.without(R.of(payload), state)

        case CLEAN_BASKET:
            return []

        default:
            return state
    }
}
