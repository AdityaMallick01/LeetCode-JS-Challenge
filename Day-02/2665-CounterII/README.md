# 2665. Counter II

[Link to Problem on LeetCode](https://leetcode.com/problems/counter-ii/)

## 1. Problem Description

The task is to write a function `createCounter` that accepts an initial integer `init`. This function should return an object that contains three methods:

* `increment()`: Increases the current counter value by 1 and returns it.

* `decrement()`: Decreases the current counter value by 1 and returns it.

* `reset()`: Resets the counter value back to the original `init` and returns it.

## 2. My Approach

This solution uses a **closure** to maintain a persistent state for the counter.

1. The outer function `createCounter(init)` is called once and "remembers" the initial value.

2. It stores two separate values:

   * `const initial = init;`: A constant variable to permanently store the original `init` value. This is crucial for the `reset` method.

   * `let current = init;`: A changeable (let) variable to track the counter's current value as it gets incremented or decremented.

3. Three functions (`increment`, `decrement`, and `reset`) are defined within the scope of `createCounter`. Because they are defined here, they all have access to the *same* `initial` and `current` variables.

4. **`increment()`**: Simply adds 1 to `current` and returns the new value.

5. **`decrement()`**: Simply subtracts 1 from `current` and returns the new value.

6. **`reset()`**: Resets the `current` value back to the `initial` value and returns it.

7. Finally, the function returns an object `{ increment, reset, decrement }` that exposes these three methods to the user.

## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
  All three methods (`increment`, `decrement`, and `reset`) perform a single arithmetic or assignment operation. The time for each call is constant.

* **Space Complexity:** `O(1)`
  The closure maintains two variables (`current` and `initial`). This requires a constant amount of space, regardless of how many times the methods are called.