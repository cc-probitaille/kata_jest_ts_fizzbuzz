import { SystemUnderTest } from "../src/systemUnderTest"

const sut = new SystemUnderTest();
const fizz:String  = "Fizz";
const buzz:String = "Buzz";

test("Un argument de 1 retourne 1",function (){
    const result = sut.fizzBuzz(1);
    expect(result).toEqual(1);
});

test("Un argument de 2 retourne 2.",function (){
    const result = sut.fizzBuzz(2);
    expect(result).toEqual(2);
});

test("Un argument de 3 retourne Fizz",function (){
    const result = sut.fizzBuzz(3);
    expect(result).toEqual(fizz);
});

test("Un argument de 6 retourne Fizz",function (){
    const result = sut.fizzBuzz(6);
    expect(result).toEqual(fizz);
});

test("Un argument de 5 retourne Buzz",function (){
    const result = sut.fizzBuzz(5);
    expect(result).toEqual(buzz);
});

test("Un argument de 10 retourne Buzz",function (){
    const result = sut.fizzBuzz(10);
    expect(result).toEqual(buzz);
});

test("Un argument de 15 retourne FizzBuzz",function (){
    const result = sut.fizzBuzz(15);
    expect(result).toEqual(fizz+""+buzz);
});

test("Un argument de 30 retourne FizzBuzz",function (){
    const result = sut.fizzBuzz(30);
    expect(result).toEqual(fizz+""+buzz);
});