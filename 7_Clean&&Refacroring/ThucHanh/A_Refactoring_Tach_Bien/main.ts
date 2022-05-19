export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let isFizz = n % 5 == 0;
        let isBuzz = n % 3 == 0;

        if (isBuzz && isBuzz) {
            this.message = 'FizzBuzz';
        } else if (isFizz) {
            this.message = 'Fizz';
        } else if(isBuzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}


export class FizzBuzz1 {
    message: string;

    constructor(n: number) {


        let isBuzz = n % 3 == 0;
        const isFizz = n % 5 == 0;
        if (isBuzz && isFizz) {
            this.message = 'FizzBuzz';
        } else if (isFizz) {
            this.message = 'Fizz';
        } else if(isBuzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}