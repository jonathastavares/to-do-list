/* eslint-disable array-callback-return */
let toDoList = [];
let index = 0;

export default class HandleStorage {
  static setTask(task) {
    const toDoList = HandleStorage.getToDoList();
    const index = HandleStorage.getIndex();
    task.index = index;
    toDoList.push(task);
  }

  static getToDoList() {
    return toDoList;
  }

  static updateToDoList(list) {
    index -= 1;

    list.map((task, index) => {
      task.index = index;
    });

    toDoList = list;
  }

  static getIndex() {
    return index;
  }

  static resetToDoList() {
    localStorage.clear();
  }
}