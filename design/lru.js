class LinkedList{

    constructor(){
        this.start = undefined;
        this.end = undefined;
    }

    // Add a new node to the list
    add(value){
        let node = {value, next:this.start}

        if (this.start){
            this.start.previous = node
        }

        this.start = node;
        this.end = this.end || this.start;

        return node
    }

    remove(node){

        let {previous} = node

        if (previous){
            previous.next = node.next;
        }

        if (this.end == node)
            this.end = previous;
            

    }
    
    // Return the last node
    get end(){
        return this.end;
    }

    get values() {
        let nodes = []
        
        let ptr = this.start;

        while(ptr){
            nodes.push(ptr.value)
            ptr = ptr.next
        }

        return nodes;
    }

}

class LRUCache{

    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.index = {}
        this.storage = new LinkedList();
    }

    put(key, value){

        // Flush existing data
        if ( key in this.index){
            let node = this.index[key]
            this.storage.remove(node)
        }

        let node = this.storage.add(value)
        this.index[key] = node;

        if (this.index.keys.length > this.capacity){
            let last = this.storage.end;
            this.storage.remove(last)
        }

    }

    get(key){

        if (!(key in this.index))
            return;

        let node = this.index[key]
        this.storage.remove(node)
        this.storage.add(node.value)
        return node.value;
  
    }

}


let lruCache = new LRUCache(2);




