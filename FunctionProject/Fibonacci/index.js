var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    let nth = req.body.nth
    /*
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        for (var i = 0; i < nth - 1; i++) {
            answer = nth_2.add(nth_1)
            nth_2 = nth_1
            nth_1 = answer
        }
    }
    */

    const fibonacci = (num, memo) => {
        memo = memo || {};
 
        if (memo[num]) return memo[num];
        if (num < 2) return num;
 
        return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    };

    context.res = {
        body: fibonacci(nth)
        //answer.toString()
    };
}