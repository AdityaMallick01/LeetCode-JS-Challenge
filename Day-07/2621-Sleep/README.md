# 2621. Sleep

[Link to Problem on LeetCode](https://leetcode.com/problems/sleep/)

## 1. Problem Description

The task is to write an `async` function `sleep` that takes one argument, `millis` (milliseconds).

This function should "pause" the execution of any code that `await`s it for the specified number of milliseconds. After the time has passed, the function should resolve.

## 2. My Approach

This solution combines an `async` function with a `Promise` that wraps a `setTimeout`.

1.  **`async function`:** The function is declared as `async`. This is a requirement and also ensures that it automatically returns a promise.
2.  **`new Promise(resolve => ...)`:** The core of the solution is a new, manually-created promise. The `await` keyword will pause the function until this new promise's `resolve` function is called.
3.  **`setTimeout(resolve, millis)`:** This is the key. `setTimeout` is a built-in JavaScript function that executes a callback *after* a specified delay. Here, we tell `setTimeout` to execute the promise's `resolve` function after `millis` milliseconds have passed.
4.  **`await`:** The `await` keyword pauses the `sleep` function right at this line. It waits for the `new Promise` to settle.
    * For `millis` milliseconds, nothing happens.
    * After `millis` milliseconds, `setTimeout` fires and calls `resolve()`.
    * This "resolves" the `new Promise`.
    * The `await` is now satisfied, and the `sleep` function resumes.
    * Since there's no more code, the `sleep` function finishes, resolving its own promise.



## 3. Complexity Analysis

* **Time Complexity:** The function's execution is *temporally* dependent on the input. It takes `O(millis)` time to resolve, as it is designed to wait for that specific amount of time. The *computational* work (setting up the promise) is `O(1)`.