class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}
}

export default class LinkedList<T> {
  public head: LinkedListNode<T> | null = null
  public tail: LinkedListNode<T> | null = null

  append(value: T): void {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  prepend(value: T): void {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
  }

  find(value: T): LinkedListNode<T> | null {
    if (!this.head) return null

    let currentNode: LinkedListNode<T> | null = this.head

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  delete(value: T): LinkedListNode<T> | null {
    if (!this.head) return null

    let deletedNode: LinkedListNode<T> | null = null

    if (this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    while (currentNode?.next) {
      if (currentNode?.next.value === value) {
        deletedNode = currentNode.next
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode
    }
    return deletedNode
  }

  deleteTail(): LinkedListNode<T> | null {
    if (!this.tail) return null

    const deletedTail = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      let currentNode = this.head

      while (currentNode?.next) {
        if (!currentNode?.next.next) {
          currentNode.next = null
        } else {
          currentNode = currentNode.next
        }
      }

      this.tail = currentNode
    }

    return deletedTail
  }

  deleteHead(): LinkedListNode<T> | null {
    if (!this.head) return null

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  fromArray(values: Array<T>): this {
    values.forEach((v) => this.append(v))

    return this
  }

  toArray(): Array<LinkedListNode<T>> {
    const nodes: Array<LinkedListNode<T>> = []

    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  toString(): string {
    const nodes = this.toArray()

    return nodes.map((n) => `${n.value}`).join(' ,')
  }

  reverse(): this {
    let currentNode = this.head
    let prevNode: LinkedListNode<T> | null = null
    let nextNode: LinkedListNode<T> | null = null

    while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }
}
