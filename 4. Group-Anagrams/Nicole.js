class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {}
        for(const str of strs) {
             //console.log(str)
            const sorted = str.split('').sort().join('')
            //console.log(sorted)
            if(obj[sorted]) obj[sorted].push(str)
            else obj[sorted] = [str]
            //console.log(obj)
        }
        return Object.values(obj)
    }
}
