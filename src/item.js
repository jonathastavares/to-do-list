/* eslint-disable import/prefer-default-export */

class Item {
  constructor(text) {
    this.text = text;
    this.completed = false;
    this.index = 0;
  }
}

module.exports = Item;
