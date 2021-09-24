/* eslint-disable import/prefer-default-export, import/no-cycle */

import { List } from './list.js';

export class Update {
  static listPopulate() {
    const listObj = document.getElementById('list-objects');
    listObj.innerHTML = '';
    List.dataArray().forEach((listElement, index) => {
      if (listElement.completed === false) {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center'><p value='${index + 1}' id='item-description' class='w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger' >Delete</button></div></li>`;
      } else {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center' checked><p value='${index + 1}' id='item-description' class='text-decoration-line-through w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger'>Delete</button></div></li>`;
      }
    });
    if (listObj.innerHTML === '') {
      listObj.classList.add('d-none');
    } else {
      listObj.classList.remove('d-none');
    }
    Update.indexUpdate();
  }

  static indexUpdate() {
    const list = List.dataArray();
    list.forEach((element, index) => {
      element.index = index + 1;
    });
    localStorage.setItem('listArray', JSON.stringify(list));
  }

  static reload() {
    window.location.reload();
  }
}
