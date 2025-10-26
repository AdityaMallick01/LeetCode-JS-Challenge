# 2667. Create Hello World Function

[Link to Problem on LeetCode](https://leetcode.com/problems/create-hello-world-function/)

## 1. Problem Description

The task is to write a function `createHelloWorld` that returns a new function. This new (inner) function, when called, should always return the string "Hello World", regardless of any arguments it's given.

## 2. My Approach

This solution uses a fundamental JavaScript pattern: a **closure**.

1.  The outer function `createHelloWorld` is defined. Its only job is to return a new anonymous function.
2.  This inner function is designed to accept any number of arguments using the rest parameter syntax (`...args`).
3.  Inside the inner function, these `args` are completely ignored. It simply defines a constant string `"Hello World"` and returns it.

This works because the outer function "creates" and "configures" the inner function, which is then returned and can be called later (like `f()` in the example).

## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
    Each call to the returned function (`f()`) is a constant-time operation. It simply returns a string.

* **Space Complexity:** `O(1)`
    The returned function doesn't store any data or use memory that scales with any input.