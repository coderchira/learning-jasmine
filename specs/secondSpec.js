describe("This is to showcase reg expressions", function () {
    var message = "then me also"
    it("should match the values searched for", function () {
        expect(message).toMatch(/me a/)
        expect(message).not.toBeUndefined()
    })
    it("should match another expression", function () {
        expect(message).toMatch(/then/)
        expect(message).not.toBeUndefined()
    })
})