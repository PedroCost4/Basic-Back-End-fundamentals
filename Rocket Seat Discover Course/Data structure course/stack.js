class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    push(element) {
        this.top++;
        this.stack[this.top] = element;

        return this.stack;
    }

    pop() {
        if (this.top < 0) return undefined;
        const poppedTop = this.stack[this.top];
        delete this.stack[this.top];
        this.top--;
        return poppedTop;
    }

    peek() {
        return this.top >= 0 ? this.stack[this.top] : undefined;
    }

}


const stack = new Stack();

stack.push('learning');
stack.push('data')
console.log(stack.push('structures'));

console.log(stack.peek())

stack.pop();
console.log(stack.pop())

console.log(stack.peek());
