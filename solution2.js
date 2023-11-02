/*Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
nput: strs = ["a"]
Output: [["a"]]
*/

// solution
function groupAnagrams(strs) {
    const anagramMap = {};

    for (const str of strs) {
      const sortedStr = str.split("").sort().join("");
  
      if (!anagramMap[sortedStr]) {
        anagramMap[sortedStr] = [];
      }
      anagramMap[sortedStr].push(str);
    }

    const anagramGroups = [];
    for (const sortedStr in anagramMap) {
      anagramGroups.push(anagramMap[sortedStr]);
    }
  
    return anagramGroups;
  }
//example1
  const strs1 = ["ear", "tea", "tan", "ate", "nat", "bat"];
  const output1 = groupAnagrams(strs1);
  console.log(output1);
 
//example2
  const strs2 = [""];
  const output2 = groupAnagrams(strs2);
  console.log(output2);
  
//example3
  const strs3 = ["a"];
  const output3 = groupAnagrams(strs3);
  console.log(output3);

