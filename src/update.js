/* eslint-disable import/prefer-default-export */

import { List } from './list.js';

export class Update {
  static listPopulate() {
    const listObj = document.getElementById('list-objects');
    listObj.innerHTML = '';
    List.dataArray().forEach((listElement, index) => {
      if (listElement.completed === false) {
        listObj.innerHTML += `<li class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex'><input id='check' value='${index}' type="checkbox" class='me-4 align-self-center'><p class='no-margin align-self-center'>${listElement.text}</p></div><div><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-three-dots-vertical' viewBox='0 0 16 16'>
          <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'/>
          </svg></div></li>`;
      } else {
        listObj.innerHTML += `<li class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex'><input id='check' value='${index}' type="checkbox" class='me-4 align-self-center' checked><p class='no-margin align-self-center'>${listElement.text}</p></div><div><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-three-dots-vertical' viewBox='0 0 16 16'>
          <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'/>
          </svg></div></li>`;
      }
    });
    if (listObj.innerHTML === '') {
      listObj.classList.add('d-none');
    } else {
      listObj.classList.remove('d-none');
    }
  }
}
