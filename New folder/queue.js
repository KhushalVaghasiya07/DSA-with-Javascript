class Queue {
    constructor() {
        
        this.data = []

    }

    enQueue(val){
        this.data.push(val);
    }

    deQueue(){
        this.data.shift();
    }

    Topelement(){
        this.data = this.data[0];
    }

    isQueuefull(){
        if(this.data.length <= 5 ){
            console.log("Your stack is full");
        }
        else{
            console.log("Your stack is Still space");
            
        }
    }

    display(){
        console.log(this.data);
    }

}

let Q = new Queue;

Q.enQueue(100);
Q.enQueue(200);
Q.enQueue(300);
Q.enQueue(400);
Q.enQueue(400);
Q.enQueue(400);

Q.display();

Q.deQueue()
Q.display();

Q.display();
Q.Topelement();

Q.isQueuefull()
Q.display()