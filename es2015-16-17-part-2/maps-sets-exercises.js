// maps

class MessageBoard {
    constructor(){
        this.messages = new Map
        this.id = 1;
    }
    addMessage(value){
        this.messages.set(this.id, value);
        this.id++
        return this;
    }
    findMessageById(num){
      return this.messages.get(num)
    }
    findMessageByValue(val){
      for (let msg of this.messages.values()) {
        if(msg === val) return msg;
      }
    }
    removeMessage(id){
        this.messages.delete(id);
        return this;
    }
    numberOfMessages(){
        return this.messages.size;
    }
    messagesToArray(){
        return Array.from(m.messages.values())
    }
}

// sets
function uniqueValues(arr){
  return new Set(arr).size
}

function countPairs(arr, num){
    var cache = new Set(arr);
    var count = 0;
    for(let val of arr){
        cache.delete(val)
        if(cache.has(num - val)){
            count++
        }
    }
    return count;
}


