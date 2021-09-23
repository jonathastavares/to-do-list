/* eslint-disable import/prefer-default-export */

import './style.css';
import { List } from './list.js';
import { Update } from './update.js';

List.saveItem('Go to the gym');
List.saveItem('Fix car sound');
List.saveItem('Go to the bank');
List.saveItem('Go to see the doctor');

Update.listPopulate();

const btn = document.getElementById('add-btn');
const checkboxes = document.querySelectorAll('input[type=checkbox]');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const desc = document.getElementById('add-list').value;

  List.saveItem(desc);
  document.getElementById('add-list').value = '';
  Update.listPopulate();
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    List.completeItem(event.target.value);
  });
});
