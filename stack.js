class Item {

  constructor(value) {
    this.value = value;
    this.previousItem = null;
  }
}

class Stack {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  push(item) {
    if (!this.first) {
      this.first = new Item(item);
      this.last = this.first;
    } else {
      let temp = this.last;
      this.last = new Item(item);
      this.last.previousItem = temp;
    }
    return ++this.size;
  }

  pop() {
    let temp = this.last?.value ? this.last.value : null;
    if (this.last === this.first) {
      this.last = null;
      this.first = null;
    }
    if (this.last) {
      this.last = this.last.previousItem;
    }
    this.size = Math.max(this.size - 1, 0)
    return temp;
  }

}








