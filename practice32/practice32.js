function find_middle_letters(input){
    var string = input.toString();

    //String Methods
    if (string.length % 2 === 1) {
        var middleLetter = string.charAt((string.length - 1) / 2);
        answer = middleLetter;
    } else {
        var middle1 = string.charAt(string.length / 2 - 1);
        var middle2 = string.charAt(string.length / 2);
        var middleLetters = middle1 + middle2;
        answer = middleLetters;
//             return string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2);
    }

    // Array Methods
    var stringArray = string.split("");
    if (string.length % 2 === 0) {
        var mid1 = stringArray[string.length / 2 - 1];
        var mid2 = stringArray[string.length / 2];
        var evenAnswer = mid1 + mid2;
        answer = evenAnswer;
        // return stringArray[string.length / 2 - 1] + stringArray[string.length / 2];
    } else {
        var oddAnswer = stringArray[(string.length - 1) / 2];
        answer = oddAnswer;
    }
    var answer;
    return answer;
}