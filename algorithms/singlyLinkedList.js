class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){

        if (!this.head) return undefined

        let current = this.head
        let secondLast = null

        while (current){
            current.next !== null ? secondLast = current : null
            current = current.next
        }
        this.tail = secondLast
        this.tail.next = null
        this.length--
        console.log(this)
        return this
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.pop()
