import { List } from './list.js';

jest.mock('./__mocks__/localStorage.js');
let listArray = [];

describe('My To-Do List\'s editing functionality', () => {
    test('Should edit the new task into the list of to-do list', () => {
      const newTodoInput = document.getElementById('add-list');
      newTodoInput.value = 'New todolist!';
      List.saveItem('Task 1');
      List.saveItem('Task 2');
      List.saveItem('Task 3');
      listArray = List.saveItem(newTodoInput.value);
      listArray = List.updateItem('Edit Test', 4);
      expect(listArray[4].text).toBe('Edit Test');
    });
  });
  