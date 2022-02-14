const {sum, square, cube} = require('./index.js');

describe("Should contain test for sum", ()=> {
    it("should add 2 numbers", () => {
        //Arrange
        const a = 4
        const b = 6
        const expectedResult = 10 

        //Act
        const actual = sum(a, b)

        //Assert
        expect(actual).toBe(expectedResult)
    })



    it('should return a error for invalid inputs', () => {
        //Arrange
        const a = null
        const b = 6
        const expectedResult = 'Invalid input'

        //Act
        const actual = sum(a, b)

        //Assert
        expect(actual).toBe(expectedResult)
    })
})

describe("should contain tests for test for square",() =>{
        it("should square a number", ()=>{
            //Arrange
            const num = 8
            const expectedResult = 64

            //act
            const actual = square(num)

            //Assert
            expect(actual).toBe(expectedResult)
        })


        it("should return a error for invalid input", ()=>{
            //Arrange
            const num = null
            const expectedResult = "Invalid input"

            //act
            const actual = square(num)

            //Assert
            expect(actual).toBe(expectedResult)
        })
})    

describe("should contain tests for test for cube",() =>{
        it("should cube a number", ()=>{
             //Arrange
            const num = 8
            const expectedResult = 512
    
            //act
            const actual = cube(num)
    
            //Assert
            expect(actual).toBe(expectedResult)
            })
    
    
            it("should return a error for invalid input", ()=>{
                //Arrange
                const num = null
                const expectedResult = "Invalid input"
    
                //act
                const actual = cube(num)
    
                //Assert
                expect(actual).toBe(expectedResult)
            })
})