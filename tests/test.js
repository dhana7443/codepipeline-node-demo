// const assert=require('assert');
const add=require('../index');

// describe('Add Function',()=>{
//     it('should return the sum of two numbers',()=>{
//         assert.strictEqual(add(2,3),5);
//         assert.notStrictEqual(add(2,3),1);
//     })
// })

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});