# 2620. Counter

[Link to Problem on LeetCode](https://leetcode.com/problems/counter/)

## 1. Problem Description

The task is to write a function `createCounter` that accepts an initial integer `n`. This function must return a *new* counter function. The first time this new counter function is called, it should return `n`. Each subsequent call should return the value from the previous call plus one.

**Example:**
* `counter()` returns `10`
* `counter()` returns `11`
* `counter()` returns `12`

## 2. My Approach

This solution relies on a **closure** to maintain the state of the counter between calls.

1.  The outer `createCounter(n)` function initializes a `count` variable to `0`. This `count` will track how many times the counter has been called.
2.  It then returns a new anonymous function (the "counter").
3.  This inner function is a **closure**, meaning it "remembers" both the initial `n` and the `count` variable from its parent's scope, even after the parent function has finished running.
4.  When the counter is called:
    * It first calculates the `st` (state) by adding `n + count`.
    * Then, it increments `count` by 1.
    * Finally, it returns the `st` it calculated.

This works perfectly:
* **1st Call:** `count` is 0. Returns `n + 0`. Increments `count` to 1.
* **2nd Call:** `count` is 1. Returns `n + 1`. Increments `count` to 2.
* **3rd Call:** `count` is 2. Returns `n + 2`. Increments `count` to 3.

## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
    Each call to the returned counter function involves a single addition and a single increment, which are constant-time operations.

* **Space Complexity:** `O(1)`
    The closure maintains two variables (`n` and `count`), which require a constant amount of memory. This space does not grow no matter how many times the counter is called.