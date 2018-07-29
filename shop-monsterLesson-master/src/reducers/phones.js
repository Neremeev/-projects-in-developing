import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    FETCH_PHONE_BY_ID_SUCCESS
} from '../actions/namesActions'


import * as R from 'ramda';


const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)

        case LOAD_MORE_PHONES_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)

        case FETCH_PHONE_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)

        default:
            return state
    }
}

/*
для себя:
import * as R from 'ramda'; - только так импорт
import R from 'ramda'; - по обычному ломается

1) в newValues в indexBy в первом параметре мы определили значение для свойства,
во втором передали из экшена массив
2) Получили в итоге объект, в котором названия свойств являются айди,
а значения - элементы массива
3) R.merge возвращает новый!!!!! объект и второй параметр либо перезаписывает, либо добавляет
свойства (параметров может быть больше двух)

документация по ramba (шикарно написано, я по-английски не бегульме, и то понял)
https://ramdajs.com/docs/#indexBy
https://ramdajs.com/docs/#merge
*/