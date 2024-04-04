Write a function solution that, given a string S of length N, returns any palindrome which can be obtained by replacing all of the question marks in S by lowercase letters ('a'−'z'). If no palindrome can be obtained, the function should return the string "NO".

A palindrome is a string that reads the same both forwards and backwards. Some examples of palindromes are: "kayak", "radar", "mom".

Examples:

1. Given S = "?ab??a", the function should return "aabbaa".

2. Given S = "bab??a", the function should return "NO".

3. Given S = "?a?", the function may return "aaa". It may also return "zaz", among other possible answers. The function is supposed to return only one of the possible answers.

Assume that:

N is an integer within the range [1..1,000];
string S consists only of lowercases letters ('a' − 'z') or '?'.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Copyright 2009–2024 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


// Solution Below

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');r

// BDD
// input any string with ?
// output == palindrome after replacing all question marks || "NO", if no palindrome

// pseudo code
//start
// solution (S)
//   s.split();
//   loop thorugh the splitted array
//   check conditions
//          1st = if the string has a question at the begining, replace it with the          //           letter  at  the end
//           2nd = if the string has a question at the begining and also at the end, replace the with the same letter
//           check if a palindrome is formed, return the word or NO if no.

// END


function solution(S) {
    let newS = S.split('');
    const N = S.length;


    for(let i = 0; i < N / 2; i++) {
        let forwardGottenLetter = N - i - 1;

        if (S[i] === '?' && S[forwardGottenLetter] === '?') {
            newS[i] = newS[forwardGottenLetter] = 'h';
        } else if (S[i] === '?') {
            newS[i] = newS[forwardGottenLetter];
        } else if (S[forwardGottenLetter] === '?') {
            newS[N - i - 1] = newS[i];
        } else if (S[i] !== S[forwardGottenLetter]) {
            return "NO";
        }
    }

    return newS.join('');
}
