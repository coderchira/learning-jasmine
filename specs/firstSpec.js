// describe defines the test suites
describe("This is the test Suite", function () {
    var a = 0;
    beforeEach(function () {
        a = 10;
    })
    afterEach(function () {
        a = 0;
    })
    // it defines the tests or the specs
    it("this is the test spec", function () {
        // espectations / assertions
        //expect(actualValue).toBe(expectedValue)
        // toEqual is a Matcher function
        expect(a).not.toBeUndefined();
        expect(1).not.toEqual(2);
    })
    it("this is to test the values of variable a", function () {
        expect(a).toEqual(10);
    })

    describe("This is the nested describe", function () {
        var obj1 = { name: "Ruchira" }
        var obj2 = {name:"Ruchira"}
        it("should have the name value equal to Ruchira", function () {
            // i can have multiple assertions/ expectations inside a spec
            expect(obj1).toEqual(obj2)
            expect(obj1.name).toEqual(obj2.name);
        })
        it("should have the name values to be Ruchira", function () {
            expect(obj1).not.toBe(obj2);
            expect(obj1.name).toBe(obj2.name);
        })
    })
})
describe("Empty suite", function () {
    it("to demonstrate the multiple suites in a file", function(){
    })
})
