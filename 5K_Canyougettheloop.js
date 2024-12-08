function loop_size(node) {
    let slow = node;
    let fast = node;
    
    while(true){
        slow = slow.getNext();
        fast = fast.getNext().getNext();

        if(slow === fast){
            break
        }
    }

    let loopLength = 0;

    do{
        fast = fast.getNext();
        loopLength++;
    }while(slow !== fast);
    return loopLength;
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;  
    }

    getNext() {
        return this.next; 
    }

    setNext(node) {
        this.next = node; 
    }
}