/*Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
space-separated sequence of one or more array words.
Note that the same word in the array may be reused multiple times in the segmentation.
Example 1:
Input: s = "leetcode", wordArray = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:
Input: s = "applepenapple", wordArray = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:
Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
Output: false
*/


//solution
function wordBreak(s, wordArray) {
    const n = s.length;
    const table = new Array(n + 1).fill(false);
    table[0] = true; 
  
    for (let i = 1; i <= n; i++) {
      for (const word of wordArray) {
        if (i - word.length >= 0 && table[i - word.length] && s.slice(i - word.length, i) === word) {
          table[i] = true;
          break;
        }
      }
    }
  
    return table[n];
  }
  
// example
  const s1 = "leetcode";
  const wordArray1 = ["leet", "code"];
  console.log(wordBreak(s1, wordArray1)); 
  
// example
  const s2 = "applepenapple";
  const wordArray2 = ["apple", "pen"];
  console.log(wordBreak(s2, wordArray2)); 

// example
  const s3 = "catsandog";
  const wordArray3 = ["cats", "dog", "sand", "and", "cat"];
  console.log(wordBreak(s3, wordArray3)); 