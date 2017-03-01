/**
 * Created by trand on 3/1/2017.
 */

/*
Given a string, store a count of every letter that occurs in it.  Return an array of any letter that occurs 5 times total or 3 times in a row.
    For example: `myFunction('abcccdeabuajkeamak');`
would return `['c', 'a']`
*/
var answers = {};
function countLetters(input) {
    var originalInput = input.split("");
    function checkTriples(input){
        answers["Consecutive Triples"] = [];
        console.log("=== checking for Consecutive Triples ===");
        var inputString = input;
        var inputArray = inputString.split("");
        for (var i=0; i<inputArray.length; i++){ //checks triples
            var firstLetter = inputArray.shift();
            var tripleLetters = firstLetter+firstLetter+firstLetter;
            if (inputString.indexOf(tripleLetters) !== -1){
                console.log(firstLetter + " IS A TRIPLE");
                answers["Consecutive Triples"].push(firstLetter);
                inputArray = inputString.split(tripleLetters);
            } else {
                console.log(firstLetter + " does not consecutively appear 3 times.");
            }
            inputString = inputArray.join("");
        }
        if (answers["Consecutive Triples"] !== undefined){
            console.log("Letters appearing 3 times consecutively: " + answers["Consecutive Triples"]);
        } else {
            console.log("Did not find any letters that appeared 3 times consecutively.");
        }
    }
    function checkFives(input){
        answers["Five Occurrences"] = [];
        console.log("=== checking for five occurrences ===");
        var inputArray = input.split("");
        var sortedArray = inputArray.sort();
        var sortedString = sortedArray.join("");
        for (i=0; i<sortedString.length; i++) {
            var firstLetter = sortedString.charAt(0);
            var fiveLetters = firstLetter + firstLetter + firstLetter + firstLetter + firstLetter;
            if (sortedString.indexOf(fiveLetters) !== -1) {
                console.log(firstLetter + " APPEARED 5 TIMES");
                answers["Five Occurrences"].push(firstLetter);
                sortedArray = sortedString.split(fiveLetters);
            } else {
                console.log(firstLetter + " does not appear 5 times.");
                sortedString = sortedString.slice(1);
                sortedArray = sortedString.split("");
            }
            sortedString = sortedArray.join("");
        }
        if (answers["Five Occurrences"] !== undefined){
            console.log("Letters appearing 5 times: ", answers["Five Occurrences"]);
        } else {
            console.log("Did not find any letters that appeared 5 times.");
        }
    }
    checkTriples(input);
    checkFives(input);
    console.log(answers);
}


function doInputField() {
    var input = $('#inputField').val();
    if (input !== "" && input !== undefined) {
        var answer = countLetters(input);
        $('#outputDiv').text(answer);
    }
}
function allowEnterKey() {
    if (event.keyCode === 13) doInputField();
}
$(document).ready(function () {
    $('#countLetters').click(doInputField());
    $('#inputField').keypress(allowEnterKey);
});