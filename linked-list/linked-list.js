//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const createNode = (value, next, prev) => {
  return { value: value, next: next, prev: prev };
}

export class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }
  push(value) {
    // if empty
    if (!this._tail) {
      // create one node and set links appropriately
      this._tail = createNode(value, null, null)
      this._head = this._tail;
    }
    // if our list has one node only
    else if (!this._tail.prev) {
      // create another node and set links appropriately
      const newTail = createNode(value, null, this._head);
      this._head.next = newTail;
      this._tail = newTail;
    }
    // if our list has at least 2 nodes
    else {
      const newTail = createNode(value, null, this._tail);
      newTail.prev.next = newTail;
      this._tail = newTail;
    }
  }

  pop() {
    if (!this._tail) {
      return null;
    }
    else {
      const returnNode = createNode(this._tail.value, this._tail.next, this._tail.prev);
      this._tail = this._tail.prev;
      if (this._tail) {
        this._tail.next = null;
      }
      else {
        // relink our head and tail when empty
        this._head = this._tail;
      }
      return returnNode.value;
    }
  }

  shift() {
    if (!this._head) {
      return null;
    }
    else {
      const returnNode = createNode(this._head.value, this._head.next, this._head.prev);
      this._head = this._head.next;
      if (this._head) {
        this._head.prev = null;
      }
      else {
        // relink our head and tail when empty
        this._tail = this._head;
      }

      return returnNode.value;
    }
  }

  unshift(value) {
    if (!this._head) {
      this._head = createNode(value, null, null);
      this._tail = this._head;
    }
    else if (!this._head.next) {
      const newHead = createNode(value, this._head, null);
      this._tail.prev = newHead;
      this._head = newHead;
    }
    else {
      const newHead = createNode(value, this._head, null);
      newHead.next.prev = newHead;
      this._head = newHead;
    }
  }

  delete(value) {
    if (!this._head) {
      return null;
    }
    else {
      let iterator = this._head;

      while (iterator) {
        if (iterator.value === value) {
          if (!iterator.prev) { // if deleteing the head
            if (!iterator.next) { //means the head is also the tail
              this._head = null;
              this._tail = this._head;
              break;
            }
            else {
              //delete the head and link everything up correctly
              iterator.next.prev = null;
              this._head = iterator.next;
              iterator = null;
              break;
            }
          } else if (!iterator.next) { //deleting the last item in the list (and there are at least 2 items in list)
            //delete tail and link everything up correctly.
            iterator.prev.next = null;
            this._tail = iterator.prev;
            console.log(iterator);
            console.log(this._head);
            console.log(this._tail);

          } else { //deleting any middle node between head and tail
            iterator.prev.next = iterator.next;
            iterator.next.prev = iterator.prev;
          }

          break;
        }
        else {
          iterator = iterator.next;
        }
      }
    }
  }

  count() {
    if (!this._head) {
      return 0;
    }
    else {
      let count = 0;
      let nodeIterator = this._head;
      while (nodeIterator) {
        count++;
        nodeIterator = nodeIterator.next;
      }
      return count;
    }
  }
}
