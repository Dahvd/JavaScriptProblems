// Daily Coding Problem #843
// Given a string and a pattern, find the starting indices of 
// all occurrences of the pattern in the string. For example, 
// given the string "abracadabra" and the pattern "abr", you 
// should return [0, 7].

const patternFinderReg = (str, pat) => {
    const occurances = [];
    str = str.toLowerCase();
    
    let reg = new RegExp(pat, 'g');
    while( (arr = reg.exec(str)) !== null ){
        console.log(arr);
        occurances.push(arr.index)
    }
    console.log(occurances);
}
patternFinderReg("abcdefgabc", "abc");