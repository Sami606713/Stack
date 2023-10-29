class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.total_node=0
    }
    // Push
    push(value){
        const new_node=new Node(value)
        // set the node 
        new_node.next=this.top 
        // Reassign top 
        this.top=new_node
        // Incremnt 
        this.total_node+=1
    }
    // POP function
    pop(){
        if (this.top==null) {
            console.log("Empty stack")
        }else{
            this.top=this.top.next
            this.total_node-=1
        }
    }

    // Peek
    peek(){
        if (this.top==null) {
            return "NO Peek Value"
        } else {
            return this.top.value
        }
       
    }
    // Clear Function
    clear(){
        this.top=null
        this.total_node=0
    }

    //  Traverse
    traverse(){
        let curr_node=this.top
        while (curr_node!=null) {
            console.log(curr_node.value);
            curr_node=curr_node.next
        }
    }
}
const s= new Stack()
s.push(9)
s.push("Pakistan")
s.push("Karachi")
// console.log("Length: ",s.total_node)
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// console.log("Length: ",s.total_node)
// s.traverse()
// console.log("Peek Value: ",s.peek())
s.clear()
s.traverse()
