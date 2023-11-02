/*Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
Note - Do not use any sorting algorithm or library's sort method
Example-1:
Input: nums = [10,4,12,9,87,34], K = 2
Output: 34
*/

//solution
function findKthLargest(nums, k) {
    if (k < 1 || k > nums.length) {
        return undefined;
    }
    function partition(left, right, pivotIndex) {
        const pivotValue = nums[pivotIndex];
        let storeIndex = left;

        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

        for (let i = left; i < right; i++) {
            if (nums[i] > pivotValue) {
                [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
                storeIndex++;
            }
        }
        [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];

        return storeIndex;
    }
    function select(left, right, k) {
        if (left === right) {
            return nums[left];
        }

        const pivotIndex = partition(left, right, right);

        if (k === pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return select(left, pivotIndex - 1, k);
        } else {
            return select(pivotIndex + 1, right, k);
        }
    }

    return select(0, nums.length - 1, k - 1);
}

// example
const nums = [10, 4, 12, 9, 87, 34];
const k = 2;

// example
const result = findKthLargest(nums, k);
console.log(result);