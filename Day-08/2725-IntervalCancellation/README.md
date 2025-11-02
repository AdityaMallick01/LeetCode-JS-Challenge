# 2725. Interval Cancellation

[Link to Problem on LeetCode](https://leetcode.com/problems/interval-cancellation/)

## 1. Problem Description

The task is to write a function `cancellable` that takes a function `fn`, an array of arguments `args`, and an interval time `t` in milliseconds.

The `fn` function should be executed *immediately* upon calling `cancellable`, and then it should be executed *repeatedly* every `t` milliseconds.

The `cancellable` function must return a *new* "cancel" function. When this "cancel" function is called, it should stop all future repetitions of `fn`.

## 2. My Approach

This solution uses the built-in JavaScript functions `setInterval` and `clearInterval`.

1.  **Immediate Call:** The problem requires the function to be called immediately. So, the first line of the `cancellable` function is `fn(...args);` to execute it one time, right at the start.
2.  **Schedule Repetition:** `setInterval` is used to schedule the repeated execution of `fn(...args)` every `t` milliseconds.
3.  **Store the ID:** `setInterval` returns a unique `timerId` that references this repeating schedule. This `timerId` is stored in a constant.
4.  **Return Cancel Function:** The `cancellable` function returns a new anonymous "cancel" function.
5.  **Closure:** This returned function is a **closure** and "remembers" the `timerId` from its parent's scope.
6.  **Cancel Logic:** When the "cancel" function is called, it executes `clearInterval(timerId)`. This is the built-in JavaScript way to find the repeating interval associated with `timerId` and permanently stop all future calls.



## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
    Both setting up the interval with `setInterval` and clearing it with `clearInterval` are constant-time operations.

* **Space Complexity:** `O(1)`
    The function only needs to store the `timerId` (a single number) and the closure for the cancel function. The space required is constant.