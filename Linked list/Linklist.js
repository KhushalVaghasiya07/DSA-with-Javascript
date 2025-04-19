class Node {
    constructor(data) {
        this.data = data;
        this.next = null;        
    }
}

class SingleLinklist {
    constructor() {
        this.head = null;   
    }

push(val){
    let temp = new Node(val);

    if(!this.head){
        this.head = temp;
        return;
    }
  
    let current = this.head;
    
}

display(){
    let result = [];
    let current = this.head;

    while(current != null){
        result.push(current.data);
        current = current.next;
    }
    console.log(result);
    
}

// pop(){
//     let current = this.head;
//     let p;
    
//     while (current.next != null) {
//         p = current;
//         current = current.next;
//     }
//     p.next = null;
    
// }

// unshift(data){
//     let temp = new Node(data);
  
   
//     if(this.head == null){
//         this.head = temp;
//         return;
//     }

//     temp.next = this.head
//     temp = this.head
// }
// }

// shift(){
//     this.head = this.head.next;
// }

// 100 -> 200 -> 300 -> 400 -> 500 ->


// reverselist(){
//     let current = this.head;
//     let prev = null;
//     let temp;

//     while(current != null){
//         temp = current.next;
//         current.next = prev;
//         prev = current;


//         current = temp;
//     }
//     this.head = prev;
// }


}

let addData = new SingleLinklist();



addData.push(100);  
addData.push(100);  
addData.push(100);  
addData.push(200);  
addData.push(300);  
addData.push(400);  
addData.push(500);  
addData.display();

// addData.shift();
// addData.unshift(11)
// addData.display();

