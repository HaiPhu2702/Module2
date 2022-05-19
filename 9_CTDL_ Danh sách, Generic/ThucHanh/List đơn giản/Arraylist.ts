import {IArrayList} from "./IArrayList";

export class Arraylist<T> implements IArrayList<T> {
    Container: Array<T>;

    constructor() {
        this.Container = [];
    }

    show() {
        console.log(this.Container)
    }

    add(data: T): void {
        this.Container.push(data);
    }

    get(index: number): T {

        return this.Container[index];
    }

    remove(): void {
        this.Container.pop();
    }

    size(): number {
        return this.Container.length;
    }


}