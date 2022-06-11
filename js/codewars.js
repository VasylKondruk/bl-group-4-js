/**String repeat */
// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    return s.repeat(n)
}

// console.log(repeatStr(6, "I")); // "IIIIII"
// console.log(repeatStr(5, "Hello"));  // "HelloHelloHelloHelloHello"

// ================================================================================
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    return a.includes(x) ? true : false;
}

// console.log((check([101, 45, 75, 105, 99, 107], 107)));
// console.log((check(['t', 'e', 's', 't'], 'e')));
// console.log((check(['what', 'a', 'great', 'kata'], 'kat')));

// ================================================================================
// Write a function to split a string and convert it into an array of words.
function stringToArray(string){
	return string.split(' ')
}

// console.log(stringToArray("I love arrays they are my favorite"));

//=================================================================================
// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

function rowSumOddNumbers(n) {
    let total = 0;

    for (let i = (n - 1) * n + 1; i <= n * n + (n -1 ); i += 2) {     
        total += i;
    }

    return total;
    // return Math.pow(n, 3);
}


// console.log(rowSumOddNumbers(5));
// console.log(rowSumOddNumbers(42));
// console.log(rowSumOddNumbers(100));

