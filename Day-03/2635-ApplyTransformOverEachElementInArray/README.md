# 2635. Apply Transform Over Each Element in Array

[Link to Problem on LeetCode](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)

## 1. Problem Description

The task is to implement the `Array.prototype.map` method from scratch.

Given an input array `arr` and a transformation function `fn`, the goal is to return a *new* array where each element is the result of applying the `fn` to the corresponding element (and its index) from the original `arr`.

The `fn` function will receive two arguments:
1.  `element`: The value of the element at the current index.
2.  `index`: The current index `i`.

## 2. My Approach

This solution manually re-creates the `map` functionality using a simple `for` loop.

1.  First, an empty array `newArray` is initialized. This is where we will store the transformed values.
2.  Next, a `for` loop is used to iterate through the input `arr` from the first index (`i = 0`) up to the last.
3.  Inside the loop, for each iteration `i`, we call the provided mapping function `fn`. We pass it both the element `arr[i]` and the index `i`, as required by the problem.
4.  The value returned by `fn(arr[i], i)` is then assigned to the `newArray` at the same index `i`.
5.  After the loop finishes, `newArray` is fully populated with the transformed values, and it is returned as the result.

## 3. Complexity Analysis

* **Time Complexity:** `O(n)`
    The function iterates through the input array `arr` exactly once, where `n` is the length of `arr`. All operations inside the loop (function call, assignment) are `O(1)`.

* **Space Complexity:** `O(n)`
    We create a `newArray` that has the same length as the input array. The space required is directly proportional to the size of the input.