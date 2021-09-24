/* eslint-disable import/prefer-default-export, no-unused-vars */

import './style.css';
import { List } from './list.js';
import { Update } from './update.js';

Update.listPopulate();

const addbtn = document.getElementById('add-btn');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const deletebtns = document.querySelectorAll('button[type=submit][id=delete-btn');
const removeall = document.getElementById('delete-completed-btn');
const editables = document.querySelectorAll('p[id=item-description');

addbtn.addEventListener('click', (event) => {
  event.preventDefault();

  const desc = document.getElementById('add-list').value;

  List.saveItem(desc);
  document.getElementById('add-list').value = '';
  Update.reload();
});

deletebtns.forEach((deletebtn) => {
  deletebtn.addEventListener('click', (event) => {
    List.removeItem(event.target.value - 1);
    Update.reload();
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    List.completeItem(event);
    Update.reload();
  });
});

editables.forEach((button) => {
  button.addEventListener('click', (event) => {
    List.makeEditable(event.target.attributes[0].value);
  });
});

removeall.addEventListener('click', (event) => {
  List.removeCompleted();
});