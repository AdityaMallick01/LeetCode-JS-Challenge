# 2627. Debounce

[Link to Problem on LeetCode](https://leetcode.com/problems/debounce/)

## 1. Problem Description

The task is to write a `debounce` function. This function takes another function `fn` and a time `t` (in milliseconds) as arguments.

It must return a *new* "debounced" function. This new function, when called, should not execute `fn` immediately. Instead, it should wait until `t` milliseconds have passed *since the last time it was called*. Only then should it execute `fn` with the arguments from that very last call.

This is a common pattern used to prevent rapid-fire events (like search-bar typing or window resizing) from triggering a function dozens of times.

## 2. My Approach

This solution uses a **closure** to maintain a reference to a single `timer` variable.

1.  **State Variable:** A `timer` variable is declared in the outer `debounce` function's scope. This variable will be "remembered" by the returned function.
2.  **Return Function:** The `debounce` function returns a new function that accepts any number of arguments (`...args`).
3.  **Cancel Previous Timer:** The first thing this new function does is `clearTimeout(timer)`. This is the core of the debounce logic. It cancels any previously scheduled `fn` execution that hasn't happened yet.
    
4.  **Set New Timer:** After clearing the old timer, it immediately sets a *new* one using `timer = setTimeout(...)`.
5.  **Execution:** This new timer is scheduled to execute the original `fn(...args)` after `t` milliseconds.

This ensures that only the *last* call in a rapid series of calls will ever get to execute. All previous calls in that series will have their timers cleared before they can run.

## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
    Each call to the debounced function just performs a `clearTimeout` and a `setTimeout`, which are both constant-time operations.

* **Space Complexity:** `O(1)`
    The closure only needs to store a single `timer` variable. The space is constant and does not depend on the number of calls.