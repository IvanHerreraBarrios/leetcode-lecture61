var isPalindrome = function(s) {
    let filterString = ""
    for(let i=0; i<s.length; i++){
        const char = s[i].toLowerCase()
        if(isLetter(char)){
            filterString += char
        }
    }

    for(let i=0, j=filterString.length-1; i<=j; i++, j--){
        if(filterString[i] !== filterString[j]) return false
    }
    return true
};

function isLetter(char){
    let asscii = char.charCodeAt(0)
    if( (asscii > 96 && asscii < 123) || (asscii > 47 && asscii < 58) ) return true
}