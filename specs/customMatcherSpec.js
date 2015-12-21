var myCustomMatchers;
describe("This is our first custom Matcher", function () {
    var adults = 17;
    var kids = 16;
    beforeEach(function () {
        jasmine.addMatchers(myCustomMatchers);
        console.log("inside beforeeach");
    })
    it("should allow adults to drive", function () {
        expect(adults).toBeAllowedToDrive();
        console.log("inside first spec of custom matcher");
    })
    it("should not allow the kids to drive", function () {
        expect(kids).not.toBeAllowedToDrive();
    })
})