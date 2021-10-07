import { saveItem } from './list.js';

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