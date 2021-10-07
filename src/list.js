/* eslint-disable import/prefer-default-export, import/no-cycle, no-unused-vars */
import { Item } from './item';
import { Update } from './update';

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
    const listArray = List.dataArray();
    if (obj.trim()) {
      const item = new Item(obj);
      item.index = listArray.length + 1;
      listArray.push(item);
      localStorage.setItem('listArray', JSON.stringify(listArray));
    }
    return listArray;
  }

  static removeItem(event) {
    const removeArr = List.dataArray();
    removeArr.splice(event, 1);
    localStorage.setItem('listArray', JSON.stringify(removeArr));
    return removeArr;
  }

  static updateItem(text, id) {
    const newArr = List.dataArray();
    List.dataArray().forEach((task, index) => {
      if (index === id - 1 && text != '') {
        newArr[index].text = text;
        localStorage.setItem('listArray', JSON.stringify(newArr));
      }
    });
    return newArr;
  }

  static removeCompleted() {
    const events = List.dataArray();
    const newEvents = [];
    events.forEach((event) => {
      if (!event.completed) {
        newEvents.push(event);
      }
    });
    localStorage.setItem('listArray', JSON.stringify(newEvents));
    Update.reload();
  }

  static makeEditable(id) {
    const listObj = document.getElementById('list-objects');
    listObj.innerHTML = '';
    List.dataArray().forEach((listElement, index) => {
      if (listElement.completed === false) {
        if (index === id - 1) {
          listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center'><input id='edit-element' placeholder='${listElement.text}' class='no-border'></div><div><button value='${index + 1}' id='edit-btn' type='submit' class='btn btn-warning'>Edit</button></div></li>`;
        } else {
          listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center'><p value='${index + 1}' id='item-description' class='w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger' >Delete</button></div></li>`;
        }
      } else if (index === id - 1) {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center' checked><input id='edit-element' placeholder='${listElement.text}' class='no-border'>></div><div><button value='${index + 1}' id='edit-btn' type='submit' class='btn btn-warning'>Edit</button></div></li>`;
      } else {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center' checked><p value='${index + 1}' id='item-description' class='text-decoration-line-through w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger'>Delete</button></div></li>`;
      }
    });
    const editbtn = document.getElementById('edit-btn');

    editbtn.addEventListener('click', (event) => {
      const item = document.getElementById('edit-element');
      List.updateItem(item.value, id);
      Update.reload();
    });
  }

  static getTextItem(id) {
    const textItems = document.querySelectorAll('p[id=item-description');
    const textItem = textItems[id];
    return textItem;
  }

  static completeItem(eventId) {
    const listArray = List.dataArray();
    if (listArray[eventId - 1].completed === false) {
      listArray[eventId - 1].completed = true;
    } else {
      listArray[eventId - 1].completed = false;
    }
    localStorage.setItem('listArray', JSON.stringify(listArray));
    return listArray;
  }
}
