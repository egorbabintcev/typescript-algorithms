import { LinkedList } from './structures'

console.log('Linked list start:')
const linkedList: LinkedList<number> = new LinkedList()

linkedList.append(1)
linkedList.prepend(2)
linkedList.append(3)

linkedList.deleteHead()
linkedList.deleteTail()

linkedList.fromArray([4, 5, 6])
linkedList.find(1)
linkedList.delete(1)
linkedList.reverse()

console.log(
  JSON.stringify(linkedList.toArray().map((node) => node.value)) ===
    JSON.stringify([6, 5, 4])
)
console.log('Linked list end\n')
