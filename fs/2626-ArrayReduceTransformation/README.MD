# 2626. Array Reduce Transformation

[Link to Problem on LeetCode](https://leetcode.com/problems/array-reduce-transformation/)

## 1. Problem Description

The task is to implement the `Array.prototype.reduce` method from scratch.

Given an array `nums`, a reducer function `fn`, and an initial value `init`, the goal is to "reduce" the array into a single value.

The `fn` function takes two arguments:
1.  `accumulator`: The value from the previous function call (or `init` for the first call).
2.  `currentValue`: The current element from the `nums` array.

The return value of `fn` becomes the new `accumulator` for the next iteration. The final accumulated value should be returned after iterating through the entire array. If the `nums` array is empty, the function should return `init`.

## 2. My Approach

This solution implements the `reduce` logic using a `for` loop and a single "accumulator" variable.

1.  A variable `val` is initialized with the `init` value. This `val` will track the accumulated value throughout the process.
2.  The function then iterates through the `nums` array using a `for` loop.
3.  Inside the loop, for each element `nums[i]`, the reducer function `fn` is called with the *current accumulated value* (`val`) and the *current array element* (`nums[i]`).
4.  The result of this function call is then immediately re-assigned to `val`, updating the accumulator for the next loop.
    
5.  After the loop finishes, `val` holds the final reduced value, which is returned.
6.  This approach also handles the edge case of an empty `nums` array: If the array is empty, the `for` loop is never entered, and the function correctly returns the original `init` value.

## 3. Complexity Analysis

* **Time Complexity:** `O(n)`
    The function iterates through the `nums` array exactly once, where `n` is the length of `nums`.

* **Space Complexity:** `O(1)`
    The function only uses a single extra variable (`val`) to store the accumulated value. The space required is constant and does not depend on the size of the input array.