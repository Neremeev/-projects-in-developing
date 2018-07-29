import phones from './mockPhones'
import * as R from "ramda";


export const fetchPhones = async () => {
    //здесь копируем массив и пишем количество
    // phones.length = первые 6
    const newPhones = phones.slice();
    newPhones.length = 6;
    return new Promise(resolve => {
        resolve(newPhones)
    } )
}

export const loadMorePhones = async ({offset}) => {
    //здесь пишем количество + 6
    // phones.length = offset + 6
    // отсеиваем если элемент пустой
    const size = offset + 6;
    let newPhones = phones.slice(offset, size );
    newPhones.length = size;
    newPhones = newPhones.filter(function(n){ return n !== undefined });
    return new Promise(resolve => {
        resolve(newPhones)
    } )
}



export const fetchPhoneById = async (id) => {
    return new Promise((resolve, reject) => {
        // R.find ищет переданный объект из массива phones
        const phone = R.find(R.propEq('id', id), phones)
        resolve(phone)
    })
}



/*
вот эти строки реализвол сам, непонятно, почему он этого не сделал

const newPhones = phones.slice();
newPhones.length = 6;

const size = offset + 6;
let newPhones = phones.slice(offset, size );
newPhones.length = size;
newPhones = newPhones.filter(function(n){ return n !== undefined })
*/