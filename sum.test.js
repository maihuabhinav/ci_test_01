const sum=require('./index')

test('Addition 3+5=8',()=>{
    expect(sum(3,5)).toBe(8)
})