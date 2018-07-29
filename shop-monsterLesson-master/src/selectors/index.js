import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getPhones = state => {
    const applySearch = item => R.contains(
        state.phonesPage.search,
        R.prop('name', item)
    )
    // с помощью R.map фильтруем телефоны по айди
    // R.filter передает наш массив телефонов в applySearch
    // applySearch проверяет подстроку по нейм, входит ли она в
    // state.phonesPage.search
    const phones = R.compose(
        R.filter(applySearch),
        R.map(id => getPhoneById(state, id))
    )(state.phonesPage.ids)

    return phones
}


/*
export const getPhones = state => {
    const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids)
    return phones
}

для себя:
1) мы в мап принимаем весь стейт
2) в мапе, во втором параметре мы из массива берем по очереди каждый элемент(айди)
и передаем его параметром в getPhoneById
3) getPhoneById используем R.prop, который сравнивает, есть ли в нашем state.phones
свойство с названием переданного айди
4) Получив это свойство - getPhoneById возвращает значение этого свойства
5) В итоге, здесь мап отдает объект со свойсвами, а возвращает массив телефонов,
у которых айди есть в списке  state.phonesPage.ids
6) profit!!!

документация по ramba
https://ramdajs.com/docs/#props
https://ramdajs.com/docs/#map
*/


export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids)

export const getTotalBasketCount = state => R.length(state.basket)


export const getTotalBasketPrice = state => {
    // R.map - обращается к getPhoneById и передает массив id state.basket
    // getPhoneById возвращет товары, где есть такие айди
    // R.pluck выбираем из массива объектов только цену
    // R.sum - суммируем все цены
    // R.compose - выполняем все методы справа налево
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id))
    )(state.basket)

    return totalPrice
}

//  R.values получает значения свойств объекта и записывает их в отдельный массив
export const getCategories = state => R.values(state.categories)


export const getBasketPhonesWithCount = state => {
    const phoneCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)
    const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)
    // R.uniq получает уникальные айдишники
    const uniqueIds = R.uniq(state.basket)
    const phones = R.compose(
        R.map(phoneWithCount),
        R.map(id => getPhoneById(state, id))
    )(uniqueIds)

    return phones
}
