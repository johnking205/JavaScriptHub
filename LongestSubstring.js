//LeetCode #3
//Need to adjust algorithm for "dvdf" type cases
////start with root char and then keep stepping forward until char repeat
////after char repeat found, measure length and then step root char forward +1 and start again

var lengthOfLongestSubstring = function(s) {
    var currentStr = [];
    var i = 0;
    var longestStr = 0;
    if(s.length === 0) {
        longestStr = 0;
    }
    else if(s.length === 1) {
        longestStr = 1;
    }
    else {
        for(i=0;i<s.length;i++) {
        //BLOOP take next letter of string and see if it is in the current array
            //if not in currentStr, push it in
            if(currentStr.indexOf(s.charAt(i)) === -1) {
                currentStr.push(s.charAt(i));
            }
            //if it is in currentStr
            else{
            ////if currentStr length is greater than longestStr
                if(currentStr.length > longestStr) {
            //////longestStr = currentStr length
                    longestStr = currentStr.length;
                }
            ////reset currentStr to start with current character
                currentStr = [s.charAt(i)];
            }
            //ELOOP
        }
        //check if last string from loop is longest
        if(currentStr.length > longestStr) {
            //////longestStr = currentStr length
            longestStr = currentStr.length;
        }
    }
    return(longestStr)
};