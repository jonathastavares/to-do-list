import _ from 'lodash';
import './style.css';

const btn = document.getElementById('add-btn')

class Item {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
}

class List {
    static dataArray() {
        const listArray = JSON.parse(localStorage.getItem('listArray') || '[]');
        return listArray;
      }
    
      static saveItem(obj) {
        const item = new Item(obj);
        const listArray = List.dataArray();
        listArray.push(item);
        localStorage.setItem('listArray', JSON.stringify(listArray));
        Update.listPopulate();
      }
    
      static removeItem(event) {
        const removeArr = List.dataArray();
        if (event.type === 'button') {
          removeArr.splice(event.value, 1);
          localStorage.setItem('listArray', JSON.stringify(removeArr));
        }
      }
}

class Update {
    static listPopulate() {
        const listObj = document.getElementById('list-objects');
        listObj.innerHTML = '';
        List.dataArray().forEach((listElement, index) => {
          listObj.innerHTML += `<li class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex'><input type="checkbox" class='me-4 align-self-center'><p class='no-margin align-self-center'>${listElement.text}</p></div><div><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-three-dots-vertical' viewBox='0 0 16 16'>
          <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'/>
        </svg></div></li>`;
        });
        if (listObj.innerHTML === '') {
          listObj.classList.add('d-none');
        } else {
          listObj.classList.remove('d-none');
        }
      }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const desc = document.getElementById('add-list').value;

    List.saveItem(desc);
    document.getElementById('add-list').value = '';
});

Update.listPopulate();