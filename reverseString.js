var reverseString = function(s) {
    var newStr="";
    for(var i=s.length - 1; i >= 0; i--) {
            newStr += s[i];
    }
return newStr;
};
