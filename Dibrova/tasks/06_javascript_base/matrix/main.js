(function() {
    function Calculator() {
        var first, second;
        this.read = function() {
            first = +prompt("Enter first number : ");
            second = +prompt("Enter second number : ");
        }

        this.sum = function() {
            return first + second;
        }

        this.mul = function() {
            return first * second;
        }
    }

    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = function() {
            this.value += +prompt("Enter value")
        }
    }

    function Calculator() {

        var obj = {
            '+': function(a, b) {
                return a + b;
            },
            '-': function(a, b) {
                return a - b;
            }
        }

        this.calculate = function(string) {
            var str = string.split(' '),
                number1 = str[0],
                operator = str[1],
                number2 = str[2];
            obj[operator](+number1, +number2)
        }
    }

    var calc = new Calculator;
    calc.calculate("3 + 7"); // 10

})();
