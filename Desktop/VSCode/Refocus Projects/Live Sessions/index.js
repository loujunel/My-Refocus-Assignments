const string1 = "cat";
const string2 = "act";

function compareStrings(str1, str2) {
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    if (str1===str2){
        console.log("Anagram")
    }

    else {
        console.log("Not an anagram")
    }
}

compareStrings(string1,string2)