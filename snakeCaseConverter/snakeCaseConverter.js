function snakeCaseConverter(string){
    var arrayOfString = string.split(" ");
    for (var i=0; i<arrayOfString.length; i++){
        arrayOfString[i] = arrayOfString[i].toLowerCase();
        var splitWord = arrayOfString[i].split("");
        splitWord[0] = splitWord[0].toUpperCase();
        var joinedWord = splitWord.join("");
        arrayOfString[i] = joinedWord;
    }
    var joinedString = arrayOfString.join("_");
    console.log(joinedString);
    return joinedString;
}
function callFunction(){
    var string = $('#input').val();
    if (string !== "" && string !== undefined) {
        var answer = snakeCaseConverter(string);
        $('#output').text(answer);
    }
}
function allowEnterKey(){
    if (event.keyCode === 13) callFunction();
}
$(document).ready(function(){
   $('#call').click(callFunction);
   $('#input').keypress(allowEnterKey);
});