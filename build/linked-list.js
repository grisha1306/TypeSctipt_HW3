class LinkedNode {
    constructor(data, next) {
        this._data = data;
        this._next = next;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get next() {
        return this._next;
    }
    set next(value) {
        this._next = value;
    }
}
export class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    addToEnd(data) {
        if (!this.size) {
            this.first = this.last = new LinkedNode(data, null);
            this._size++;
            return;
        }
        if (this.size === 1 && this.first) {
            const newElem = new LinkedNode(data, null);
            this.last = newElem;
            this.first.next = newElem;
            this._size++;
            return;
        }
        if (this.last) {
            this.last.next = new LinkedNode(data, null);
            this.last = this.last.next;
            this._size++;
        }
        return;
    }
    add(data, position) {
    }
}
