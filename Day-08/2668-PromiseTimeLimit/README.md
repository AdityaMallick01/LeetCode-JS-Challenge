# 2668. Promise Time Limit

[Link to Problem on LeetCode](https://leetcode.com/problems/promise-time-limit/)

## 1. Problem Description

The task is to write a function `timeLimit` that takes an asynchronous function `fn` and a time limit `t` (in milliseconds).

The `timeLimit` function should return a *new* asynchronous function. This new function, when called, will "race" the original `fn` against the `t` millisecond timer.

* If `fn` completes (resolves or rejects) within the time limit, the new function should resolve or reject with that value.
* If `fn` takes *longer* than `t` milliseconds, the new function should reject with the string `"Time Limit Exceeded"`.

## 2. My Approach

This solution uses `Promise.race()` to create a competition between the original function and a custom-made timeout.

1.  **Return `async` Function:** The `timeLimit` function returns a new `async function(...args)` that accepts the arguments for the original `fn`.
2.  **Create Two Promises:** Inside this new function, two promises are created to compete against each other:
    * **`timeoutPromise`**: A new promise is created. It uses `setTimeout` to call `reject("Time Limit Exceeded")` after `t` milliseconds.
    * **`originalPromise`**: The original `fn` is called with all of its arguments (`fn(...args)`). This returns the promise we want to time.
3.  **`Promise.race()`:** This is the core of the solution. `Promise.race([originalPromise, timeoutPromise])` takes an array of promises and waits. It will resolve or reject with the value of the *very first* promise to settle.
    * **Case 1 (fn is fast):** If `originalPromise` resolves or rejects before `t` ms, it "wins" the race. `Promise.race` immediately resolves/rejects with that result. The `timeoutPromise` is effectively ignored.
    * **Case 2 (fn is slow):** If `t` ms pass and `originalPromise` has not settled, the `timeoutPromise` "wins" by rejecting with "Time Limit Exceeded". `Promise.race` immediately rejects with that string.



## 3. Complexity Analysis

* **Time Complexity:** The *setup* time is `O(1)`. The *resolution* time is `O(min(T_fn, t))`, where `T_fn` is the time `fn` takes and `t` is the time limit. The race will end as soon as the first promise settles.

* **Space Complexity:** `O(1)`
    The function only creates two new promise objects and a timeout, which is a constant amount of space.