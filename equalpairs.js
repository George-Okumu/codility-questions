// You are given an array of integers. Your task is to create pairs of them, such that every pair consists of equal numbers. Each array element may belong to one pair only. Is it possible to use all of the integers?

// Write a function:

// function solution(A);

// that, given an array A consisting of N integers, returns whether it is possible to split all integers into pairs.

// Examples:

// 1. Given A = [1, 2, 2, 1], your function should return True, as the pairs are (A[0], A[3]) (both have value 1) and (A[1], A[2]) (both have value 2).

// 2. Given A = [7, 7, 7], your function should return False, as you can make one pair of numbers 7, but you still have a single 7 left.

// 3. Given A = [1, 2, 2, 3], your function should return False, as there's nothing that A[0] can be paired with.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    // Implement your solution here

    let count = {};

    for (let i of A) {
    
        if (count[i]) {
            count[i]++;
        } else{
            count[i] = 1;
        }
    }

    for (let vali of Object.values(count)) {
        if (vali % 2 !== 0) {
            return false;
        }
    }

    return true;
}
