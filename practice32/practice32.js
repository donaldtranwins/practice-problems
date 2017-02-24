function find_middle_letters(input){
    var string = input.toString();

    //String Methods
    if (string.length % 2 === 1) {
        var oddString = string.charAt((string.length - 1) / 2);
        return oddString;
    } else {
        var mid1 = string.charAt(string.length / 2 - 1);
        var mid2 = string.charAt(string.length / 2);
        var evenString = mid1 + mid2;
        return evenString;
//             return string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2);
    }

    // Array Methods
    var stringArray = string.split("");
    if (string.length % 2 === 0) {
        var middle1 = stringArray[string.length / 2 - 1];
        var middle2 = stringArray[string.length / 2];
        var evenAnswer = middle1 + middle2;
        return evenAnswer;
        // return stringArray[string.length / 2 - 1] + stringArray[string.length / 2];
    } else {
        var oddAnswer = stringArray[(string.length - 1) / 2];
        return oddAnswer;
    }
}