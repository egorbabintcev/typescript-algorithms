class DoubleLinkedListNode<T> {
  constructor(
    public value: T,
    public next: DoubleLinkedListNode<T> | null = null,
    public prev: DoubleLinkedListNode<T> | null = null
  ) {}
}

export default class DoubleLinkedList<T> {
  public head: DoubleLinkedListNode<T> | null = null
  public tail: DoubleLinkedListNode<T> | null = null

  append = (value: T): void => {
    const newNode = new DoubleLinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else if (this.tail) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
  }

  prepend = (value: T): void => {
    const newNode = new DoubleLinkedListNode(value, this.head)

    if (this.head) {
      this.head.prev = newNode
    }

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
  }

  delete = (value: T): DoubleLinkedListNode<T> | null => {
    if (!this.head) {
      return null
    }

    let deletedNode: DoubleLinkedListNode<T> | null = null
    let currentNode: DoubleLinkedListNode<T> | null = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode

        if (deletedNode === this.head) {
          this.head = deletedNode.next

          if (this.head) {
            this.head.prev = null
          }

          if (deletedNode === this.tail) {
            this.tail = null
          }
        } else if (this.tail && this.tail === deletedNode) {
          this.tail = deletedNode.prev
          deletedNode.next = null
        } else if (currentNode) {
          const prevNode = Object.assign({}, currentNode.prev)
          currentNode.prev = currentNode.next
          currentNode.next = prevNode
        }
      }

      currentNode = currentNode.next
    }

    return deletedNode
  }
}
