/* eslint-disable import/prefer-default-export, import/no-cycle, no-unused-vars */
import { Item } from './item.js';
import { Update } from './update.js';

class List {
  static dataArray() {
    const listArray = JSON.parse(localStorage.getItem('listArray') || '[]');
    return listArray;
  }

  static saveItem(obj) {
    const item = new Item(obj);
    const listArray = List.dataArray();
    item.index = listArray.length + 1;
    listArray.push(item);
    localStorage.setItem('listArray', JSON.stringify(listArray));
    return Promise.resolve(listArray);
  }

  static removeItem(event) {
    const removeArr = List.dataArray();
    removeArr.splice(event, 1);
    localStorage.setItem('listArray', JSON.stringify(removeArr));
    Update.listPopulate();
  }

}
