import { sum,multiply } from "../testingfolder/sum"
test('sum of two numbers',()=>{
    const result=sum(2,5)
    expect(result).toBe(7)
    expect(sum(-2,5)).toBe(3)
});

test('multiplication of two numbers',()=>{
   
    expect(multiply(2,3)).toBe(6)
    expect(multiply(-2,3)).toBe(-6)
});
