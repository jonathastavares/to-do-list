import { List } from './list.js';

jest.mock('./__mocks__/localStorage.js');
let listArray = [];

describe('My To-Do List\'s editing functionality', () => {
  test('Should not edit the new task into the list of to-do list', () => {
    const newTodoInput = document.getElementById('add-list');
    newTodoInput.value = 'New todolist!';
    List.saveItem('Task 1');
    List.saveItem('Task 2');
    List.saveItem('Task 3');
    List.saveItem(newTodoInput.value);
    listArray = List.updateItem('', 4);
    expect(listArray[3]).toMatchObject({ text: 'New todolist!', completed: false, index: 4 });
  });

  test('Should edit the new task into the list of to-do list', () => {
    listArray = List.updateItem('Edit Test', 4);
    expect(listArray[3]).toMatchObject({ text: 'Edit Test', completed: false, index: 4 });
  });
});

describe('My To-Do List\'s completed functionality', () => {
  test('Should mark the new task into the to-do list as completed', () => {
    const newTodoInput = document.getElementById('add-list');
    newTodoInput.value = 'New todolist!';
    List.saveItem('Task 1');
    List.saveItem('Task 2');
    List.saveItem('Task 3');
    listArray = List.completeItem(1);
    expect(listArray[0]).toMatchObject({ text: 'Task 1', completed: true, index: 1 });
  });
});