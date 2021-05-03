class Item {
  constructor(value) {
    this.value = value;
    this.nextItem = null;
  }
}


class Queue {

  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(item) {
    if (!this.first) {
      this.first = new Item(item);
      this.last = this.first;
    } else {
      let temp = new Item(item);
      this.first.nextItem = (this.first === this.last)? temp : this.first.nextItem;
      this.last.nextItem = temp;
      this.last = temp;
    }
    return ++this.size;
  }

  pop() {
    let temp = (this.first?.value) ? this.first.value : null;
    this.first = (this.first?.nextItem) ? this.first.nextItem : null;
    this.size = Math.max(--this.size, 0);
    if (!this.size) { this.last = null; }
    return temp;
  }

}

