# 2703. Return Length of Arguments Passed

[Link to Problem on LeetCode](https://leetcode.com/problems/return-length-of-arguments-passed/)

## 1. Problem Description

The task is to write a function `argumentsLength` that returns the total count of arguments passed to it.

## 2. My Approach

This solution utilizes a modern JavaScript feature called the **rest parameter syntax** (`...`).

1.  The function is defined with `...args` in its signature: `var argumentsLength = function(...args)`.
2.  This special syntax gathers all arguments passed to the function, no matter how many there are, and bundles them into a single array named `args`.
3.  The function then simply returns `args.length`, which is the standard property for getting the number of elements in an array. This number directly corresponds to the number of arguments that were passed.



**Example:**
If `argumentsLength(1, 2, 3)` is called:
* The `...args` syntax creates an array `args = [1, 2, 3]`.
* The function returns `args.length`, which is `3`.

## 3. Complexity Analysis

* **Time Complexity:** `O(n)`
    Where `n` is the number of arguments passed. The rest parameter syntax needs to iterate through all `n` arguments to create the `args` array.

* **Space Complexity:** `O(n)`
    The `args` array stores all `n` arguments, so the space required is directly proportional to the number of arguments.