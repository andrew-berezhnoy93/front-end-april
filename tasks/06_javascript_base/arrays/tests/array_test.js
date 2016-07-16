var assert = require('chai').assert,
    expect = require('chai').expect,
    arrays = require('../06_js_basic/arrays.js');

function testOnArray(object, methodName) {
  expect(object[methodName].bind(object, 'fewfqew')).to.throw(Error);
}

var array, clone;

describe("Check tasks for array and object ", function () {
  describe("1. isArray(array)", function () {
    it("should return true if argument is array", function () {
      assert.equal(arrays.isArray([1, 2, 3, 4]), true);
    });

    it("should return false if argument is string", function () {
      assert.equal(arrays.isArray('jqkrbgkwegewr'), false);
    });

    it("should return true if argument is object", function () {
      assert.equal(arrays.isArray({1: 2}), false);
    });

    it("should return true if argument empty array", function () {
      assert.equal(arrays.isArray([]), true);
    })
  });

  describe("2. cloneArray(array)", function () {

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
      clone = arrays.cloneArray(array);
    });

    it("should return error if send not array", function () {
      testOnArray(arrays, "cloneArray");
    });

    it("should return array with the same length as a pass array", function () {
      expect(array.length).to.equal(clone.length);
    });

    it("should change clone array and not change original", function () {
      clone.push(6);
      expect(array.length).to.not.equal(clone.length);
    });

    it("should return array clone with nested array", function () {
      array = [1, 2, 3, [4, 5]];
      clone = arrays.cloneArray(array);
      expect(array.length).to.equal(clone.length);
    });

    it("should change clone nested array and not change original nested", function () {
      array = [1, 2, 3, [4, 5]];
      clone = arrays.cloneArray(array);
      clone[3].push(6);
      expect(array[3].length).to.not.equal(clone[3].length);
    });

  });

  describe("3. getFirstElements(array, n)", function () {

    it("should return error if argument not array", function () {
      testOnArray(arrays, "getFirstElements");
    });

    it("should return first element if second argument is undefined", function () {
      array      = [1, 2, 3, 4];
      var result = arrays.getFirstElements(array);
      expect(result[0]).to.be.equal(array[0]);
    });

    it("should return empty array if pass array is empty", function () {
      var result = arrays.getFirstElements([], 3);
      expect(result.length).to.be.equal(0);
    });

    it("should return first three elements from array", function () {
      array      = [1, 2, 3, 4, 5, 6];
      var result = arrays.getFirstElements(array, 3);
      expect(result[0]).to.be.equal(array[0]);
      expect(result[1]).to.be.equal(array[1]);
      expect(result[2]).to.be.equal(array[2]);
    });

    it("should return full array if second argument > array.length", function () {
      var result = arrays.getFirstElements(array, 10);
      expect(result.length).to.be.equal(array.length);
    });

    it("should return empty array if second argument < array.length", function () {
      array      = [1, 2, 3, 4, 5, 6];
      var result = arrays.getFirstElements(array, -3);
      expect(result.length).to.be.equal(0);
    });

  })

  describe("4. getLastElements(array, n)", function () {
    it("should return error if argument not array", function () {
      testOnArray(arrays, "getLastElements");
    });

    it("should return last element if second argument is undefined", function () {
      array      = [1, 2, 3, 4];
      var result = arrays.getLastElements(array);
      expect(result[result.length - 1]).to.be.equal(array[array.length - 1]);
    });

    it("should return empty array if pass array is empty", function () {
      var result = arrays.getLastElements([], 3);
      expect(result.length).to.be.equal(0);
    });

    it("should return last three elements from array", function () {
      array      = [1, 2, 3, 4, 5, 6];
      var result = arrays.getLastElements(array, 3);
      expect(result[0]).to.be.equal(array[array.length - 3]);
      expect(result[1]).to.be.equal(array[array.length - 2]);
      expect(result[2]).to.be.equal(array[array.length - 1]);
    });

    it("should return full array if second argument > array.length", function () {
      var result = arrays.getLastElements(array, 10);
      expect(result.length).to.be.equal(array.length);
    });

    it("should return empty array if second argument < array.length", function () {
      array      = [1, 2, 3, 4, 5, 6];
      var result = arrays.getLastElements(array, -3);
      expect(result.length).to.be.equal(0);
    });


  })

  describe("5. join(array, separator)", function () {
    it("should return error if argument not array", function () {
      testOnArray(arrays, "join");
    });

    it("should return string without separator on the end", function () {
      array         = [1, 2, 3, 4];
      var separator = ';';
      var result    = arrays.join(array, separator);
      expect(result[result.length - 1]).to.not.equal(separator);
    });

    it("should join array with + separator", function () {
      array         = ["Red", "Green", "White", "Black"];
      var separator = '+';
      var testJoin  = array.join('+');
      var result    = arrays.join(array, separator);
      expect(result).to.equal(testJoin);
    });

    it("should join array with , separator if second argument not pass", function () {
      array      = ["Red", "Green", "White", "Black"];
      var join   = array.join(',');
      var result = arrays.join(array);
      expect(result).to.equal(join);
    });

    it("should join array with any data inside", function () {
      array      = ["Red", 3522, {1: 35235}, true, undefined, null, '', NaN, 0, false];
      var join   = array.join(',');
      var result = arrays.join(array);
      expect(result).to.equal(join);
    });

    it("should return error if pass not array", function () {
      array = [];
      expect(arrays.join.bind(arrays, array)).to.throw("Enter an array");
    });
  })

  describe("6. setDashes(number)", function() {
    it("should return error if first argument not a string", function() {
      expect(arrays["setDashes"].bind(arrays, 235234)).to.throw(Error);
    });

    it('should return correct string with 236459284', function() {
      var number = "236459284";
      var result = arrays.setDashes(number);
      var correct = "236-4592-8-4";
      expect(result).to.equal(correct);
    });

    it('should return correct string with 234658', function() {
      var result = arrays.setDashes("0235552354658");
      var correct = "0-235552354-658";
      expect(result).to.equal(correct);
    });

    it('should return same string if not even numbers or not a pair one', function() {
      var number = "3737373737";
      var result = arrays.setDashes(number);
      expect(result).to.equal(number);
    });

    it('should return same string if not even numbers or not a pair one', function() {
      var number = "235";
      var result = arrays.setDashes(number);
      expect(result).to.equal(number);
    });

    it('should return just one number', function() {
      var result = arrays.setDashes("146fwwe");
      var correct = "14-6fwwe";
      expect(result).to.equal(correct);
    });
  })

  describe("7. sort(number)", function () {
    it("should return error if first argument not a number", function () {
      expect(arrays["sort"].bind(arrays, "fekjfvj")).to.throw(Error);
    });

    it('should return correct array with numbers inside without negative numbers', function () {
      var number  = [32, 2, 362, 36, 23, 63, 41, 347, 381, 3, 7, 83, 2, 1];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return correct array with numbers inside without negative numbers', function () {
      var number  = [-32, 2, 362, -6, 23, 63, -25, 347, 381, -3, 7, 83, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return array with string and it must be same with array after common sort method', function () {
      var number  = [-32, 2, "adwwherh", -6, 23, "oiurege", -25, 347, 381, "mvtey", 7, 83, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return array with different type of elements', function () {
      var number  = [-32, 2, "adwwherh", true, 23, null, -25, {"ew": 525}, 381, "mvtey", 7, undefined, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });
  })

  describe("8. mostFrequent(array)", function () {
    it("should return error if first argument not a number", function () {
      testOnArray(arrays, "mostFrequent")
    });

    it("should return 0 if each of element is unique", function () {
      var array  = [1, 2, 3, 4, 5, 6];
      var result = arrays.mostFrequent(array);
      expect(result).to.equal(0);
    });

    it("should return 3 = 2", function () {
      var array  = [1, 2, 3, 3, 4, 5, 5, 6];
      var result = arrays.mostFrequent(array);
      expect(result).to.equal("3 = 2");
    });

    it("should return a = 5", function () {
      var array  = [1, 2, 'a', 3, 'a', 3, 4, 'a', 5, 'a', 5, 'a', 6];
      var result = arrays.mostFrequent(array);
      expect(result).to.equal("a = 5");
    });

    it("should return undefined = 5", function () {
      var array  = [1, 2, undefined, 3, undefined, 3, 4, undefined, 5, undefined, 5, undefined, 6];
      var result = arrays.mostFrequent(array);
      expect(result).to.equal("undefined = 5");
    });

    it("should return 3 = 2 on array with objects", function () {
      var array  = [1, 2, { "fwefwe" : 55}, 3, {"fwefwe" : 55}, 3, 4, {"fwefwe" : 55}, 5, undefined, 5, {"fwefwe" : 55}, 6];
      var result = arrays.mostFrequent(array);
      expect(result).to.equal("3 = 2");
    });

    it("should return 3 = 2 on array with NaN", function () {
      var array  = [1, 2, NaN, 3, NaN, 3, 4, NaN, 5, undefined, 5, {"fwefwe" : 55}, 6];
      var result = arrays.mostFrequent(array);
      expect(result).to.equal("3 = 2");
    });

    it("should return false = 4", function () {
      var array  = [1, 2, false, 3, false, 3, 4, false, 5, false, 5, {"fwefwe" : 55}, 6];
      var result = arrays.mostFrequent(array);
      expect(result).to.equal("false = 4");
    });


  })

  describe("9. swapLetter()", function () {
    it("should return error if first argument not a string", function () {
      expect(arrays["swapLetter"].bind(arrays, 235234)).to.throw(Error);
    });

    it("should return mY nUMBER mORE tHAN yOUR", function () {
      var string = "My Number More Than Your";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('mY nUMBER mORE tHAN yOUR')
    });

    it("should return My Number More Than Your", function () {
      var string = "mY nUMBER mORE tHAN yOUR";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('My Number More Than Your')
    });

    it("should return My Number552 More123 Than Your22", function () {
      var string = "mY nUMBER552 mORE123 tHAN yOUR22";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('My Number552 More123 Than Your22')
    });

    it("should return abcdefghijklmnopqrstuvwxyz", function () {
      var string = "abcdefghijklmnopqrstuvwxyz";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });

    it("should return ABCDEFGHIJKLMNOPQRSTUVWXYZ", function () {
      var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('abcdefghijklmnopqrstuvwxyz')
    });


  })

});