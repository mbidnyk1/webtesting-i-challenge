const { succeed, fail,repair, get } = require('./enhancer.js');
// test away!
describe('enhancer', () => {
    describe('repair()', () => {
        it('should return a new item with a durability of 100', () => {
            expect(repair({name:'Excalibur', durability: 20, enhancement: 10}))
            .toMatchObject({name:'Excalibur', durability: 100, enhancement: 10})
            expect(repair({name:'Excalibur', durability: 0, enhancement: 10}))
            .toMatchObject({name:'Excalibur', durability: 100, enhancement: 10})
        })
        it('should only accept an item object that has item properties', () => {
            expect(repair()).toBe('Not an item object.')
            expect(repair({name:'Excalibur', enhancement: 10})).toBe('Not an item object.')
            expect(repair([{name:'Excalibur',durability:50, enhancement: 10}])).toBe('Not an item object.')

        })
    })
    describe('succeed()', () => {
        it('should increase items enhancement by 1', () => {
            expect(succeed({name:'Excalibur', durability: 20, enhancement: 0}))
            .toMatchObject({name:'Excalibur', durability: 20, enhancement: 1})
        })
        it('should not change items enhancement if its 20', () => {
            expect(succeed({name:'Excalibur', durability: 20, enhancement: 20}))
            .toMatchObject({name:'Excalibur', durability: 20, enhancement: 20})
        })
        it.todo('should only take an item object with enhancement property')
    })
    describe('fail()', () => {
        it('should decrease durability by 5 when item enchancment is less than 15', () => {
            expect(fail({name:'Excalibur', durability: 20, enhancement: 14}))
            .toMatchObject({name:'Excalibur', durability: 15, enhancement: 14})
        })
        it('should decrease durability by 10 when item enhancement is 15 or more and decrease enhancement by 1 when enhancement is greater than 16' , () => {
        expect(fail({name:'Excalibur', durability: 20, enhancement: 16}))
            .toMatchObject({name:'Excalibur', durability: 10, enhancement: 16})
        expect(fail({name:'Excalibur', durability: 20, enhancement: 15}))
            .toMatchObject({name:'Excalibur', durability: 10, enhancement: 15})
        expect(fail({name:'Excalibur', durability: 20, enhancement: 17}))
            .toMatchObject({name:'Excalibur', durability: 10, enhancement: 16})
        }) 
    })
})
