import { List } from './list.js';

jest.mock('./__mocks__/localStorage.js');
let listArray;

describe('My To-Do List\'s adding functionality', () => {
  test('Should add the new task into the list of to-do list', () => {
    const newTodoInput = document.getElementById('add-list');
    newTodoInput.value = 'New todolist!';
    listArray = List.saveItem(newTodoInput.value);
    listArray = List.saveItem(newTodoInput.value);
    expect(listArray).toHaveLength(2);
  });

  test('Should not add anything into to-do list', () => {
    const newTodoInput = document.getElementById('add-list');
    newTodoInput.value = '                  ';
    listArray = List.saveItem(newTodoInput.value);
    expect(listArray).toHaveLength(2);
  });
});

describe('My To-Do List\'s removing functionality', () => {
  test('Should not remove the last task into the list of to-do list', () => {
    const event = listArray[listArray.length - 1];
    listArray = List.removeItem(event.index);
    expect(listArray).toHaveLength(2);
  });

  test('Should remove the last task into the list of to-do list', () => {
    const event = listArray[listArray.length - 1];
    listArray = List.removeItem(event.index - 1);
    expect(listArray).toHaveLength(1);
  });
});
