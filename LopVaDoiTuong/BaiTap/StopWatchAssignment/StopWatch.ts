export class StopWatch {
    private startTime: number;
    private endTime: number;

    constructor() {
        this.startTime = Date.now();
        this.endTime = Date.now();
    }

    getStart() {
        return this.startTime;
    }

    start() {
        this.startTime = Date.now();
    }

    getStop() {
        return this.endTime;
    }

    stop() {
         this.endTime = Date.now();
    }

    getElapsedTime() {
        return this.getStop() - this.getStart()
    }


}