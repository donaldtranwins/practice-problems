/**
 * Created by trand on 3/3/2017.
 */
function swapCase(input) {
    var inputString = input.toString();
    var answer = [];
    for (var i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) > 96 && inputString.charCodeAt(i) < 123) {//upper
            answer[i] = inputString[i].toUpperCase();
        } else if (inputString.charCodeAt(i) > 64 && inputString.charCodeAt(i) < 91) {//lower
            answer[i] = inputString[i].toLowerCase();
        } else {
            answer[i] = inputString[i];
        }
    }
    var answers = answer.join("");
    console.log(answers);
    return answers;
}
swapCase("ASda12ddSD");

//            0 1 2 3
var people = [3,1,2,1];

function communism(sammiches, people){
    var hungryPeople = people.slice(0);
    var foodStamps = hungryPeople.slice(0);
    foodStamps = foodStamps.fill(0);

    while (sammiches > 0){
        var hungriest = hungryPeople.length-1;
        for (var i=hungriest-1; i>=0; i--){
            if (hungryPeople[hungriest] < hungryPeople[i]) {
                hungriest = i;
            }
        }
        hungryPeople[hungriest]--;
        foodStamps[hungriest]++;
        sammiches--;
    }
    return foodStamps;
}

communism(5,[3,1,2,1]);
communism(15,[3,1,2,5,4,2,1]);
//true communism(3,[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);