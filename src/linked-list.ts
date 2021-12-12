class LinkedNode<T> {
    private _data: T;
    private _next: LinkedNode<T> | null;

    constructor(data: T, next: LinkedNode<T> | null) {
        this._data = data;
        this._next = next;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }

    get next(): LinkedNode<T> | null {
        return this._next;
    }

    set next(value: LinkedNode<T> | null) {
        this._next = value;
    }
}

export class LinkedList<T> {
    private first: LinkedNode<T> | null;
    private last: LinkedNode<T> | null;
    private _size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this._size  = 0;
    }

    get size(): number {
        return this._size;
    }

    addToEnd(data: T): void {
        if (!this.size) {
            this.first = this.last = new LinkedNode<T>(data, null);
            this._size++;
            return;
        }
        if (this.size === 1 && this.first) {
            const newElem = new LinkedNode<T>(data, null);
            this.last = newElem;
            this.first.next = newElem;
            this._size++;
            return;
        }
        if (this.last) {
            this.last.next = new LinkedNode<T>(data, null);
            this.last =  this.last.next;
            this._size++;
        }
        return;
    }

    add(data: T, position: number): void {

    }
}
