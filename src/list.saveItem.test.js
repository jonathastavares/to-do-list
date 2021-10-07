import { saveItem } from './list.js';

beforeAll(() => {
  document.body.innerHTML = `
    <div id='list-container' class='container w-25 shadow my-5'>
    <ul class="list-group join-list-bottom no-round-borders">
      <li class="list-group-item font-bold">Today's To Do List</li>
      <li class='list-group-item d-flex'><input id='add-list' placeholder='Add to your list...'><button id='add-btn' type='submit' class='btn btn-secondary'>Add</button></li>
    </ul>
    <ul id='list-objects' class="list-group join-list-top join-list-bottom">
      <!-- Add list elements Here -->
    </ul>
    <ul class='list-group join-list-top no-round-borders'>
      <li class="list-group-item text-center"><button id='delete-completed-btn' type='submit' class='btn btn-danger w-100'>Clear all completed</button></li>
    </ul>
  </div>`;
});

jest.mock('./__mocks__/localStorage.js');
let listArray;

describe('My To-Do List\'s adding functionality', () => {
  test('Should add the new task into the list of to-do list', () => {
    const newTodoInput = document.getElementById('add-list');
    newTodoInput.value = 'New todolist!';
    listArray = saveItem(newTodoInput.value);
    expect(listArray).toHaveLength(1);
  });

  test('Should not add anything into to-do list', () => {
    const newTodoInput = document.getElementById('add-list');
    newTodoInput.value = '                  ';
    listArray = saveItem(newTodoInput.value);
    expect(listArray).toHaveLength(1);
  });
});