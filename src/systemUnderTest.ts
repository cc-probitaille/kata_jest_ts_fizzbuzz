export class SystemUnderTest {
    fizzBuzz(arg: number):number|String {
        if(arg % 3 ==0 && arg % 5 == 0){
            return "FizzBuzz";
        }
        if (arg % 3 ==0) {
            return "Fizz";
        }
        if ( arg % 5 == 0) {
            return "Buzz";
        }
        return arg;
    }
    constructor() {
    }
    getMessage = (name: string) => {
        return `Hello ${name}`
    }
}
