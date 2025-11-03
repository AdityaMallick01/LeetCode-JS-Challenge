# 2622. Cache With Time Limit

[Link to Problem on LeetCode](https://leetcode.com/problems/cache-with-time-limit/)

## 1. Problem Description

The task is to implement a time-limited cache using an ES5-style class. The class must have:
1.  A constructor `TimeLimitedCache()`.
2.  A `set(key, value, duration)` method: This inserts or updates a key-value pair. The entry should expire after `duration` milliseconds. It must return `true` if an *un-expired* key was overwritten, and `false` otherwise.
3.  A `get(key)` method: This retrieves the value for a key. If the key exists and has not expired, it returns the value. Otherwise, it returns `-1`.
4.  A `count()` method: This returns the total number of *un-expired* keys currently in the cache.

## 2. My Approach

This solution uses a `Map` as the core storage, combined with `setTimeout` for the expiration logic.

* **Constructor (`TimeLimitedCache`)**: Initializes `this.cache = new Map()`. A `Map` is used because it provides efficient `O(1)` average time for getting, setting, deleting, and checking for keys.

* **`set(key, value, duration)`**: This is the most complex method.
    1.  **Check for Existing Key**: It first checks if the key already exists in the cache using `this.cache.has(key)`. This boolean is stored to be returned later.
    2.  **Clear Old Timer**: If the key *does* exist, it means we are updating it. We retrieve the old entry (`oldEntry = this.cache.get(key)`) and, most importantly, **cancel its pending expiration timer** using `clearTimeout(oldEntry.timer)`. This is critical to prevent the old timer from deleting our new value.
    3.  **Set New Timer**: A *new* `setTimeout` is created. This timer is scheduled to run after `duration` milliseconds. Its only job is to delete the `key` from the cache: `this.cache.delete(key)`.
    4.  **Store Entry**: The `cache` stores an object as its value: `{ value: value, timer: newTimer }`. We store the `value` to be returned by `get()` and the `newTimer` ID so we can cancel it (as seen in step 2).
    5.  **Return**: Finally, it returns `keyAlreadyExists`.

* **`get(key)`**: This method is now very simple.
    1.  It just checks `if (this.cache.has(key))`.
    2.  If `true`, it returns the stored value (`this.cache.get(key).value`).
    3.  If `false`, it returns `-1`. We don't need to check for expiration here because the `setTimeout` *automatically removes* expired keys from the cache.

* **`count()`**: This method is also very simple.
    1.  It just returns `this.cache.size`.
    2.  This works because, as with `get()`, expired keys are actively deleted, so the `Map`'s size is always the correct count of active, un-expired keys.



## 3. Complexity Analysis

* **`set(key, value, duration)`**: **`O(1)`** (average time).
    `Map.has`, `Map.get`, `Map.set`, `clearTimeout`, and `setTimeout` are all `O(1)` operations.

* **`get(key)`**: **`O(1)`** (average time).
    `Map.has` and `Map.get` are `O(1)`.

* **`count()`**: **`O(1)`**.