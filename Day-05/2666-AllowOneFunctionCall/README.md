# 2666. Allow One Function Call

[Link to Problem on LeetCode](https://leetcode.com/problems/allow-one-function-call/)

## 1. Problem Description

The task is to write a function `once` that accepts another function `fn` as an argument. The `once` function should return a *new* function.

This new function should behave just like the original `fn` when called the **first time**. However, every subsequent time it's called, it should do nothing and return `undefined`.

## 2. My Approach

This solution uses a **closure** to create a "stateful" function that remembers whether it has been called or not.

1.  **State Variables:** Inside the `once` function, two variables are initialized:
    * `let called = false;`: A boolean flag that acts as our "memory."
    * `let result;`: A variable to store the result of the first (and only) call to `fn`.
2.  **Closure:** The `once` function returns a new anonymous function. This new function "closes over" the `called` and `result` variables, meaning it has access to them and can modify them, even after the `once` function has finished running.
3.  **Inner Function Logic:** This is what happens when the new function is called:
    * It checks `if (!called)`.
    * **First Call:** `called` is `false`, so the `if` block executes.
        * `fn.apply(this, args)`: The original `fn` is called. `apply` is used to ensure that the correct `this` context and all arguments (`...args`) are passed to `fn`.
        * `result = ...`: The return value of `fn` is stored in `result`.
        * `called = true;`: The "memory" flag is flipped to `true`.
        * `return result;`: The cached result is returned.
    * **Subsequent Calls:** `called` is now `true`. The `if (!called)` check fails, and the `else` block executes, returning `undefined`.



## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
    The returned function performs a single check (`if (!called)`), which is a constant-time operation. (This assumes the original `fn` itself is also `O(1)`).

* **Space Complexity:** `O(1)`
    The closure only needs to store two state variables (`called` and `result`), which is a constant amount of memory. This space does not grow with the number of calls.