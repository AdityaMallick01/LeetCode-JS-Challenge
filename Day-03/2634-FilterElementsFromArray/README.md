# 2634. Filter Elements from Array

[Link to Problem on LeetCode](https://leetcode.com/problems/filter-elements-from-array/)

## 1. Problem Description

The task is to implement the `Array.prototype.filter` method from scratch.

Given an input array `arr` and a filtering function `fn`, the goal is to return a *new* array. This new array should only contain the elements from `arr` for which the function `fn(element, index)` returns a "truthy" value (a value that evaluates to `true`).

## 2. My Approach

This solution manually re-creates the `filter` functionality using a `for` loop and an `if` condition.

1.  An empty array, `newArray`, is initialized. This array will store the elements that pass the filter.
2.  A `for` loop iterates through every element in the input `arr`, using `i` as the index.
3.  Inside the loop, the filtering function `fn` is called with the current element (`arr[i]`) and its index (`i`).
4.  An `if` statement checks the return value of `fn`. If `fn` returns a truthy value, the `if` block is executed.
5.  Inside the `if` block, the *original element* (`arr[i]`) is added to the end of `newArray` using the `push()` method.
6.  After the loop completes, `newArray`, which now contains only the filtered elements, is returned.

## 3. Complexity Analysis

* **Time Complexity:** `O(n)`
    The function iterates through the input array `arr` exactly once, where `n` is the length of `arr`. All operations inside the loop (function call, `if` check, and an amortized `O(1)` `push`) are considered constant time.

* **Space Complexity:** `O(n)`
    In the worst-case scenario, every element passes the filter, and the `newArray` will grow to be the same size as the input array `arr`. Therefore, the space required is proportional to the size of the input.