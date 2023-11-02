/*Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
number and return it.
Note return the result in the form of string
Example 1:
Input: nums = [10,2]
Output: "210"
Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"
*/

//solution
function largestNumber(nums) {
    const newNumber = nums.map(num => num.toString());

    const eleSort = (a, b) => {
        const elem1 = a + b;
        const elem2 = b + a;
        return elem2.localeCompare(elem1); 
    };

    newNumber.sort(eleSort);

    if (newNumber[0] === '0') {
        return '0';
    }
    return newNumber.join('');
}

// example1
const nums1 = [10, 2];
console.log(largestNumber(nums1));

// example2
const nums2 = [3, 30, 34, 5, 9];
console.log(largestNumber(nums2));