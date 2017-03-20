/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr = new Array(26);
    arr.fill(0);
    for(let i = 0;i < magazine.length;i++){
        arr[magazine[i].charCodeAt() - 97]++;
    }
    for(let i = 0;i < ransomNote.length;i++){
        if(--arr[ransomNote[i].charCodeAt() - 97] < 0) return false;
    }
    return true;
};
