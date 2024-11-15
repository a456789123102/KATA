function loop_size(node) {
    let slow = node;
    let fast = node;
    
    while(true){
        slow = node.getNext();
        fast = node.getNext().getNext();

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