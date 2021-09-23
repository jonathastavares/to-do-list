/* eslint-disable import/prefer-default-export */

import { Item } from './item.js';

export class List {
  static dataArray() {
    const listArray = JSON.parse(localStorage.getItem('listArray') || '[]');
    return listArray;
  }

  static completedArray() {
    const completedArray = JSON.parse(localStorage.getItem('completedArray') || '[]');
    return completedArray;
  }

  static saveItem(obj) {
    const item = new Item(obj);
    const listArray = List.dataArray();
    listArray.push(item);
    localStorage.setItem('listArray', JSON.stringify(listArray));
  }

  static removeItem(event) {
    const removeArr = List.dataArray();
    if (event.type === 'button') {
      removeArr.splice(event.value, 1);
      localStorage.setItem('listArray', JSON.stringify(removeArr));
    }
  }

  static completeItem(event) {
    const listArray = List.dataArray();
    if (listArray[event].completed === false) {
      listArray[event].completed = true;
      localStorage.setItem('listArray', JSON.stringify(listArray));
    } else {
      listArray[event].completed = false;
      localStorage.setItem('listArray', JSON.stringify(listArray));
    }
  }
}
