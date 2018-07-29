import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    SEARCH_PHONE,
} from '../actions/namesActions'

import * as R from 'ramda';

const initialState = {
    ids: [],
    search: ''
}


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck('id', payload)
            return R.merge(state, {
                // у него здесь было - ids: R.concat(ids, state.ids)
                // из за этого добавленные товары отображались наверху, а не вниз рендерелись
                ids: R.concat(state.ids, ids)
            })
        case SEARCH_PHONE:
            return R.merge(state, {
                search: payload
            })

        default:
            return state
    }
}

/*
для себя:

1) R.merge описывал в фоунес
2) R.pluck берет параметр id и ищет его в свойствах элементов массива
3) Далее получив со всех элементов значения свойств id,
возвращает их в массиве
4) profit!!!

документация по ramba
https://ramdajs.com/docs/#pluck
*/