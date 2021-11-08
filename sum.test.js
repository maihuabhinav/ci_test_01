const {sum,multi,diff}=require('./index')

test('Addition 3+5=8',()=>{
    expect(sum(3,5)).toBe(8)
})
test('Substraction 3-5=-2',()=>{
    expect(diff(3,5)).toBe(-2)
})
test('Multiplication 3x5=15',()=>{
    expect(multi(3,5)).toBe(15)
})