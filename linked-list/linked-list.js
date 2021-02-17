//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const createNode = (value, next, prev) => {
  return { value, next, prev };
}

export class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._iterator = null;
  }
  push(value) {

    if (this.listIsEmpty()) {
      this._pushIntoEmptyList(value);
    } else if (this.listHasOneElement()) {
      this._pushIntoSingleElementList(value);
    } else {
      this._pushIntoMultiElementList(value);
    }
  }

  pop() {
    if (this.listIsEmpty()) {
      return null;
    }
    else {
      const returnNode = createNode(this._tail.value, this._tail.next, this._tail.prev);
      this._tail = this._tail.prev;
      if (this._tail) {
        this._tail.next = null;
      } else {
        this._head = this._tail;
      }
      return returnNode.value;
    }
  }

  shift() {
    if (this.listIsEmpty()) {
      return null;
    }
    else {
      const returnNode = createNode(this._head.value, this._head.next, this._head.prev);
      this._head = this._head.next;
      if (this._head) {
        this._head.prev = null;
      } else {
        this._tail = this._head;
      }
      return returnNode.value;
    }
  }

  unshift(value) {
    if (this.listIsEmpty()) {
      this._unshiftIntoEmptyList(value);
    } else if (this.listHasOneElement()) {
      this._unshiftIntoSingleElementList(value);
    } else {
      this._unshiftIntoMultiElementList(value);
    }
  }

  delete(value) {
    if (this.listIsEmpty() || !this._moveIteratorToValue(value)) {
      return null;
    }
    if (!this._iterator.prev) {
      if (!this._iterator.next) {
        this._deleteHeadFromSingleElementList();
      } else {
        this._deleteHeadFromMultiElementList();
      }
    } else if (!this._iterator.next) {
      this._deleteTailFromMultiElementList();
    } else {
      this._deleteNonEndNodeFromMultiElementList();
    }
  }

  count() {
    if (this.listIsEmpty()) {
      return 0;
    }
    else {
      let count = 0;
      this._resetIterator();
      while (this._iterator) {
        count++;
        this._iterator = this._iterator.next;
      }
      return count;
    }
  }

  _moveIteratorToValue(value) {
    this._iterator = this._head
    while (this._iterator) {
      if (this._iterator.value === value) {
        break;
      } else {
        this._iterator = this._iterator.next;
      }
    }
    return this._iterator;
  }

  _deleteHeadFromSingleElementList() {
    this._head = null;
    this._tail = this._head;
  }
  _deleteHeadFromMultiElementList() {
    this._iterator.next.prev = null;
    this._head = this._iterator.next;
  }

  _deleteTailFromMultiElementList() {
    this._iterator.prev.next = null;
    this._tail = this._iterator.prev;
  }

  _deleteNonEndNodeFromMultiElementList() {
    this._iterator.prev.next = this._iterator.next;
    this._iterator.next.prev = this._iterator.prev;
  }

  _resetIterator() {
    this._iterator = this._head;
  }

  listIsEmpty() {
    return !this._head;
  }

  listHasOneElement() {
    return !this._head;
  }

  _pushIntoEmptyList(value) {
    this._tail = createNode(value, null, null)
    this._head = this._tail;
  }
  _pushIntoSingleElementList(value) {
    const newTail = createNode(value, null, this._head);
    this._head.next = newTail;
    this._tail = newTail;
  }
  _pushIntoMultiElementList(value) {
    const newTail = createNode(value, null, this._tail);
    newTail.prev.next = newTail;
    this._tail = newTail;
  }

  _unshiftIntoEmptyList(value) {
    this._head = createNode(value, null, null);
    this._tail = this._head;
  }
  _unshiftIntoSingleElementList(value) {
    const newHead = createNode(value, this._head, null);
    this._tail.prev = newHead;
    this._head = newHead;
  }
  _unshiftIntoMultiElementList(value) {
    const newHead = createNode(value, this._head, null);
    newHead.next.prev = newHead;
    this._head = newHead;
  }

}
