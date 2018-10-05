export class Task {
    title: string;
    id: any;
    done: boolean;

    constructor(title: string, id: any, done: boolean = false) {
            this.title = title;
            this.id = id;
            this.done = false;
    }

}