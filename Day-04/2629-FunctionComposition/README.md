# 2629. Function Composition

[Link to Problem on LeetCode](https://leetcode.com/problems/function-composition/)

## 1. Problem Description

The task is to write a function `compose` that takes an array of functions, `functions`, and returns a new function. This new function, when called with an initial value `x`, should apply all the functions in the array to `x`, from right to left.

This is known as function composition. For example, `compose([f, g, h])(x)` should be equivalent to `f(g(h(x)))`.

If the `functions` array is empty, the returned function should just be the identity function (i.e., it should return `x`).

## 2. My Approach

The `compose` function returns a new function that "closes over" the `functions` array.

1.  **Edge Case:** The returned function first checks if the `functions` array is empty. If it is, it immediately returns the input `x` as per the problem's requirements.
2.  **Initialization:** A `result` variable is initialized with the value of the input `x`.
3.  **Right-to-Left Loop:** The core logic is a `for` loop that iterates through the `functions` array **in reverse**. It starts at the last index (`functions.length - 1`) and moves backward to index `0`.
4.  **Composition:** Inside the loop, each function is applied to the *current* `result`. The value of `result` is updated with the output of `functions[i](result)`.



This right-to-left execution ensures that the last function in the array is applied first (to `x`), its output is fed to the second-to-last function, and so on, until the first function in the array is applied to the final result.

**Example: `fn = compose([x => x + 1, x => 2 * x])` and `fn(4)`**
1.  `result` starts as `4`.
2.  Loop starts at `i = 1`. The function is `x => 2 * x`.
3.  `result = (2 * 4)`, so `result` becomes `8`.
4.  Loop continues at `i = 0`. The function is `x => x + 1`.
5.  `result = (8 + 1)`, so `result` becomes `9`.
6.  The loop finishes. The function returns `9`.

## 3. Complexity Analysis

* **Time Complexity:** `O(n)`
    Where `n` is the number of functions in the `functions` array. The returned function performs a single loop that iterates `n` times. (This assumes that each function `fn[i]` runs in `O(1)` time).

* **Space Complexity:** `O(1)`
    The function only uses a single extra variable (`result`) to store the intermediate and final values. The space required is constant and does not depend on the number of functions.