/**
 * Created by trand on 3/10/2017.
 */


function YOUR_TEST_FUNCTION(PARAMETER) {

}

function doFeatureSet2_1() {
    $('#outputDiv').text("Feature Set 2_1 - For In loops: Value and Key reference");
    $('#outputDiv').append($('<div>').text("Classroom:  [" + classRoom + "]"))
        .append($('<hr>'));
    var classRoom = {desk1: 'Stu', desk2: 'Peggy', desk3: 'LoneStar', desk4: 'George', desk5: 'Sheldon'};
    for (aDesk in classRoom) {
        $('#outputDiv').append($('<div>').text(classRoom[aDesk] + " is at " + aDesk));
    }
}
function doInputField() {
    var PARAMETER = $('#inputField').val();
    if (PARAMETER !== "" && PARAMETER !== undefined) {
        var answer = YOUR_TEST_FUNCTION(PARAMETER);
        $('#outputDiv').text(answer);
    }
}
function allowEnterKey() {
    if (event.keyCode === 13) doInputField();
}
$(document).ready(function () {
    $('#callFunction1_1Button').click(doFeatureSet1_1);
    $('#callFunction1_2Button').click(doFeatureSet1_2);
    $('#callFunction1_3Button').click(doFeatureSet1_3);
    $('#callFunction1_4Button').click(doFeatureSet1_4);
    $('#callFunction2_1Button').click(doFeatureSet2_1);
    $('#callFunction3_1Button').click(doFeatureSet3_1);
    $('#inputField').keypress(allowEnterKey);
});