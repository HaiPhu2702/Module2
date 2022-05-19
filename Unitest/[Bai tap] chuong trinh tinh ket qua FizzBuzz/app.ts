export class FizzBuzz {
    fizzBuzz(num: number) {
        if (this.isDivisibleBy3(num) && this.isDivisibleBy5(num)) {
            return "FizzBuzz"
        } else if (this.isDivisibleBy5(num)) {
            return "Buzz"
        } else if (this.isDivisibleBy3(num)) {
            return "Fizz"
        } else {
            return `${num}`
        }
    }


    isDivisibleBy3(num: number) {
        return num % 3 == 0
    }

    isDivisibleBy5(num: number) {
        return num % 5 == 0;
    }


}