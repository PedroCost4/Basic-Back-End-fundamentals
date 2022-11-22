class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        console.log(`${item} added to queue`);
    }

    dequeue() {
        const item = this.queue.shift();
        console.log(`${item} removed from queue`);
    }
}

const queue = new Queue();

queue.enqueue('Mariana');
queue.enqueue('Joao');
queue.enqueue('Ariel');
queue.dequeue();
queue.dequeue();
queue.dequeue();

