function find_middle_letters(input){
    var string = input.toString();
    var stringArray = string.split("");
    if (string.length%2===0){
        var middle2 = stringArray[string.length/2];
        var middle1 = stringArray[string.length/2-1];
        var evenAnswer = middle1+middle2;
        return evenAnswer;
    } else {
        var oddAnswer = stringArray[(string.length-1)/2];
        return oddAnswer;
    }
}