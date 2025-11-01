# 2715. Timeout Cancellation

[Link to Problem on LeetCode](https://leetcode.com/problems/timeout-cancellation/)

## 1. Problem Description

The task is to write a function `cancellable` that takes a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds.

The `cancellable` function should schedule `fn` to be called with `args` after `t` milliseconds.

Crucially, it must also return a *new* function. If this new "cancel" function is called *before* the `t` milliseconds have passed, it should cancel the scheduled execution of `fn`.

## 2. My Approach

This solution leverages the built-in JavaScript functions `setTimeout` and `clearTimeout`.

1.  **Schedule Execution:** The `setTimeout` function is called immediately. It's instructed to execute the provided `fn` (using the spread syntax `...args` to pass all arguments) after `t` milliseconds.
2.  **Store the ID:** `setTimeout` returns a numeric `timerId`. This ID is a unique reference to the scheduled task. This `timerId` is stored in a constant.
3.  **Return the Cancel Function:** The `cancellable` function then returns a new anonymous "cancel" function.
4.  **Closure:** This returned function is a **closure**. It "closes over" and remembers the `timerId` from its parent's scope.
5.  **Cancel Logic:** When the "cancel" function is eventually called, it simply executes `clearTimeout(timerId)`. This is the built-in JavaScript way to find the scheduled task associated with `timerId` and remove it from the execution queue, effectively canceling it.



## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
    Both setting up the timeout with `setTimeout` and canceling it with `clearTimeout` are constant-time operations.

* **Space Complexity:** `O(1)`
    The function only needs to store the `timerId`, which is a single number. The space required is constant.