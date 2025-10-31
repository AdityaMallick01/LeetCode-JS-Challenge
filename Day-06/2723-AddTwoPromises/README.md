# 2723. Add Two Promises

[Link to Problem on LeetCode](https://leetcode.com/problems/add-two-promises/)

## 1. Problem Description

The task is to write an `async` function `addTwoPromises` that takes two promises as input, `promise1` and `promise2`. These promises will resolve with numerical values.

The function must return a *new* promise that resolves with the sum of the values from the two input promises.

## 2. My Approach

This solution uses modern `async/await` syntax combined with `Promise.all` for a clean and efficient approach.

1.  **Async Function:** The function is declared as `async` (`async function(...)`). This automatically does two things:
    * It allows us to use the `await` keyword inside.
    * It ensures that the function automatically returns a new promise.
2.  **Concurrent Waiting:** `Promise.all([promise1, promise2])` is used to wait for *both* promises to resolve. This is highly efficient because it waits for them concurrently (at the same time), rather than one after the other.
3.  **`await` Keyword:** The `await` keyword pauses the function's execution *only* at this line until `Promise.all` has a result (i.e., both input promises have resolved).
    
4.  **Array Destructuring:** `Promise.all` returns an array containing the resolved values in order (e.g., `[2, 2]`). I use array destructuring `const [value1, value2] = ...` to instantly assign these values to two new variables.
5.  **Sum and Return:** The two resolved values are added (`const sum = value1 + value2;`).
6.  This `sum` is then returned. Because this is an `async` function, the `sum` is automatically wrapped in a promise that resolves *to* this value (e.g., `Promise.resolve(sum)`), which perfectly satisfies the problem's requirements.

## 3. Complexity Analysis

* **Time Complexity:** `O(max(T1, T2))`
    The time taken is the time of the *slowest* of the two promises. `Promise.all` runs them in parallel, so we only have to wait for the one that takes the longest (`T1` or `T2`) to finish. The addition is a simple `O(1)` operation.

* **Space Complexity:** `O(1)`
    The function only stores a few fixed-size variables (`value1`, `value2`, `sum`). The space required is constant and does not depend on the input.