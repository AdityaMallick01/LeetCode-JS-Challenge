# 2704. To Be or Not To Be

[Link to Problem on LeetCode](https://leetcode.com/problems/to-be-or-not-to-be/)

## 1. Problem Description

The task is to write a function `expect` that mimics the behavior of a common testing assertion.

1. It must accept an initial value (`val`).

2. It must return an object.

3. This object needs to have two methods:

   * `toBe(otherVal)`: Returns `true` if `val` is strictly equal (`===`) to `otherVal`. If not, it must **throw an error** with the message "Not Equal".

   * `notToBe(otherVal)`: Returns `true` if `val` is strictly unequal (`!==`) to `otherVal`. If they are equal, it must **throw an error** with the message "Equal".

## 2. My Approach

This solution uses a **closure** to store the initial `val` and returns an object literal containing the two required assertion functions.

1. The `expect(val)` function is called and it "closes over" or "remembers" the `val` that was passed into it.

2. Inside `expect`, two inner functions, `toBe` and `notToBe`, are defined.

3. **`toBe(a)`**: This function compares the stored `val` with the new argument `a` using strict equality (`===`). If they are equal, it returns `true`. If they are different, it uses `throw new Error(...)` to stop execution and report the failure.

4. **`notToBe(a)`**: This function does the opposite. It compares `val` and `a` using strict inequality (`!==`). If they are different, it returns `true`. If they are the same, it throws an error.

5. Finally, `expect` returns a new object `{ toBe, notToBe }` that gives the user access to these two assertion methods.

## 3. Complexity Analysis

* **Time Complexity:** `O(1)`
  Both the `toBe` and `notToBe` methods perform a single comparison, which is a constant-time operation.

* **Space Complexity:** `O(1)`
  The returned object holds a reference to the two methods, which in turn hold a reference to the initial `val`. This is a constant amount of space and does not scale with any input.