# 2623. Memoize

[Link to Problem on LeetCode](https://leetcode.com/problems/memoize/)

## 1. Problem Description

The task is to write a `memoize` function. This function takes another function `fn` as an argument and returns a *new*, "memoized" version of that function.

The memoized function should cache the results of its calls. If it's called with a set of arguments it has seen before, it must return the cached result *without* calling the original `fn` again. If it's called with new arguments, it should call `fn`, store the result in the cache, and then return the result.

## 2. My Approach

This solution uses a **closure** to store a `cache` and returns a new function that manages access to that cache.

1.  **Cache Storage:** I'm using a `Map` for the `cache`. A `Map` is highly efficient for this purpose because it can store key-value pairs and provides fast `O(1)` average time for `.has()`, `.get()`, and `.set()` operations.
2.  **Key Generation:** This is the most crucial part. The function's arguments (e.g., `(2, 3)`) must be converted into a single, unique key for the `Map`.
    * The returned function uses the rest parameter `...args` to capture all arguments as an array (e.g., `[2, 3]`).
    * `JSON.stringify(args)` is used to serialize this array into a string (e.g., `"[2,3]"`) that can be used as a unique key in the `Map`.
3.  **Lookup Logic:**
    * **Cache Hit:** When the memoized function is called, it first creates the `key`. It then checks `if (cache.has(key))`. If the key exists, the cached value is returned instantly with `cache.get(key)`, and the original `fn` is *not* executed.
    * **Cache Miss:** If `cache.has(key)` is `false`, it means this is a new set of arguments.
        * The original `fn(...args)` is executed, and its return value is stored in `result`.
        * This new `result` is then saved to the cache: `cache.set(key, result)`.
        * Finally, the `result` is returned.



## 3. Complexity Analysis

* **Time Complexity:** This depends on two scenarios for the *memoized* function:
    * **Cache Hit:** The time is dominated by `JSON.stringify(args)` and the `Map.get()` operation. This is very fast.
    * **Cache Miss:** The time is the cost of the **Cache Hit** *plus* the execution time of the original `fn` (let's call it `T_fn`).
* **Space Complexity:** `O(U)`
    Where `U` is the number of *unique* argument combinations ever passed to the memoized function. The `cache` (Map) will grow to store one entry for each unique set of arguments it encounters.