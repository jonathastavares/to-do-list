/* eslint-disable max-len */
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
    listArray = List.completeItem(1);
    expect(listArray[0]).toMatchObject({ text: 'Task 1', completed: true, index: 1 });
  });

  test('Should mark the new task into the to-do list as uncompleted', () => {
    listArray = List.completeItem(1);
    expect(listArray[0]).toMatchObject({ text: 'Task 1', completed: false, index: 1 });
  });
});

describe('My To-Do List\'s Clear all completed functionality', () => {
  test('Should not clear all any task into the to-do list', () => {
    listArray.forEach((task) => {
      List.completeItem(task.index); // Check as completed: true;
      List.completeItem(task.index); // Check as completed: false;
    });
    const len = listArray.length; // Assign the current array length to a variable to store it
    listArray = List.removeCompleted(); // Clear all completed tasks in the array, but in this case, none of them are completed
    expect(listArray.length).toBe(len); // Expects the listArray.length to be equals to len, which is the last value of listArray.length before clearing all completed tasks.
  });

  test('Should clear first and last tasks into the to-do list', () => {
    List.completeItem(1); // Check as completed: true the first element of the array;
    List.completeItem(listArray.length); // Check as completed: true the last element of the array;
    const len = listArray.length; // Assign the current array length to a variable to store it
    listArray = List.removeCompleted(); // Clear all completed tasks in the array, but in this case, none of them are completed
    expect(listArray.length).toBe(len - 2); // Expects the listArray.length to be equals to len - 2, since we removed 2 elements of the array.
    expect(listArray[0]).toMatchObject({ text: 'Task 2', completed: false, index: 1 }); // Checks if now, the first element of the Array is exactly like the second before clearing all completed tasks.
    expect(listArray[1]).toMatchObject({ text: 'Task 3', completed: false, index: 2 }); // Checks if now, the second element of the Array is exactly like the third before clearing all completed tasks.
  });

  test('Should clear all the tasks into the to-do list', () => {
    listArray.forEach((task) => { // Loops trought the listArray;
      List.completeItem(task.index); // Checks every task as completed: true;
    });
    listArray = List.removeCompleted(); // Clear all completed tasks in the array, but in this case, none of them are completed
    expect(listArray.length).toBe(0); // Expects the listArray.length to be 0 since we cleared all the tasks
  });
});