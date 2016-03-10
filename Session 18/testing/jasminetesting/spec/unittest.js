describe("Testing Two Numbers", function() {
    var a = 4,b = 3;
    beforeEach(function() {
        console.log("Setting up ");
        a = 4,b =3;
    });
    afterEach(function() {
        console.log("Tearing down ");
        a=0,b=0;
    });
    
    //Assignment 1
    it("Value Defined",function(){
        var x = 10,
            y= undefined;
        expect(x).toBeDefined();    
        expect(y).toBeUndefined();
    });
    
    //Assignment 1
    it("Value not NUll",function(){        
        var x = null,
            y= 10;
        expect(x).toBeNull();
        expect(y).not.toBeNull();
    });
        //Assignment 2    
    it("Array Contains",function(){
        var arr = [1,2,3,4];
        expect(arr).toContain(4);
        expect(arr).not.toContain(5);
    });
    
    //Assignment 3
    it("Compare Values",function(){
        var x=5,y=10;
        expect(x).not.toBeGreaterThan(y);
    });
    
    //Assignment 4    
    it("Add Numbers", function() {
        expect(AddTwoNumbers(a,b)).toEqual(7);
    });
    
    it("Multiply Numbers", function() {
        expect(MultiplyTwoNumbers(a,b)).toEqual(12);
    });
    
    it("Compare Numbers to be Greater Than", function() {
     expect(a).toBeGreaterThan(b);
 });
});
