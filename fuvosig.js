/**
 * Created by trand on 3/1/2017.
 */

/*fill the following variables with values according to their names*/

var array_var = [2,4,6,8,10,11,13,15,17,19]; //fill with 10 numbers between 1 and 20
var array2_var; //leave empty
var array3_var = ["Josh","Miranda","Erik","Sean","Jinwoo","Joseph","Chalmers","Andres","Brian","Ryan"]; //fill with the names of 10 classmates
var object_literal_var; //leave empty
var object2_literal_var = {
    CSS: {
        description: "that splinter thats stuck inside your middle finger, while youre forced to repeatedly press the 3 key",
        enjoyment: -1
    },
    jQuery: {
        description: "the auto-save feature, after your word document crashes 7 hours into work at 4:45pm",
        enjoyment: 9
    },
    Bootstrap: {
        description: "when you reinstall a new Windows OS, but the DEFAULTS for sticky keys comes up during Overtime of your first game of Overwatch because you're spamming Shift as Mei after being hooked by Roadhog",
        enjoyment: 3
    },
    "Practice Problems and Presentations": {
        description: "a fun kind of nerve-wracking that forces you to truly know what you are doing, AND be able to present that in a way for your audience to understand",
        enjoyment: 9+1
    }
};
//a list of 4 topics you've learned here as keys, with values of objects.  the objects will have a description and a rating of 'enjoyment' from 1 to 10, 10 being highly enjoyed, for example
/*{
 'underwater basket weaving': {
 description: 'the weaving of baskets underwater',
 fun_factor: 5
 },
 'badminton debate': {
 description: 'make friends and influence enemies with a birdie and racket',
 fun_factor: 8
 },
 }*/
var number_var = 4; //give it a number between 1 and 10
/***************************************/

//using the variables above, do the following
/*
 1) copy array_var by value into array2_var.  NOT BY REFERENCE.
 change one value in array2_var, show that it did not also change something in array_var
 2) create a function, 'find_val'.
 @purpose: finds the times a number is found in an array
 @params:
 needle: the number to be found
 haystack: the array to search
 @globals: none
 @returns: a number with the count of times needle was found in haystack
 example: some_function(5,[3,2,5,5,1,2,5]) would return 3
 hint: make a variable to hold the times the number was found and increment it
 test: use number_var and array_var to call your function and test it
 */
function copyArray1to2(){
    array2_var = [];
    for (i=0; i<array_var.length; i++){
        array2_var[i] = array_var[i];
    }
}
copyArray1to2();
console.log("copied array_var into array2_var")

function find_val(needle, haystack){
    var hayObj = {};
    for (var i=0; i<haystack.length; i++){
        var number = haystack[i];
        hayObj[number] = hayObj[number]+1 || 1;
    }
    return hayObj[needle];
}
var found = find_val(number_var,array_var);
console.log(found+" occurrence of "+number_var+" in "+array_var);

/*****************************************
 3) create a function, 'pick_rating'.
 @purpose: chooses a random number inside an array, pairs it with a name another array, and puts those two values into an object literal {name:?, rating:?}, and pushes that object into a new array
 @params:
 ratings: the array with numbers inside to randomly choose
 names: the array to names to pair numbers with
 @globals: none
 @returns: an array with objects inside it.  Each object has one of the names from the name array, and one of the ratings from the ratings array
 example:
 some_function([2,5,1,2,4],['Bob','Clyde','Gertrude'])
 would return
 [
 {name: 'Bob', rating: 5},
 {name: 'Clyde', rating: 1},
 {name: 'Gertrude', rating: 4}
 ]
 hint: your names array should dictate how many times your loop runs.
 test: call your function using array3_var and array_var
 */
function pick_rating(ratings, names){
    var randomRatings = ratings.sort(function(a,b){return Math.random()-0.5});
    var randomNames = names.sort(function(a,b){return Math.random()-0.5});
    var ratedPeople = [];
    for (var i=0; i<randomNames.length; i++){
        var ratedPerson = {
            name: randomNames[i],
            rating: randomRatings[i]
        };
        ratedPeople[i] = ratedPerson;
    }
    return ratedPeople;
}
pick_rating(array_var, array3_var);
console.log(pick_rating(array_var, array3_var));
/*****************************************
 4) create a function, 'assign_topics'.
 @purpose: takes an array of names and an object of topics.  Randomly picks a number of topics, and assigns them to the names, outputting an array of objects with names and topics
 @params:
 names: the array to names to pair numbers with
 topics: an object with topics inside it
 @globals: none
 @returns: an array with objects inside it.  Each object has one of the names from the name array, and one or more topics from the original topic object
 example:
 var topics =  {'underwater basket weaving': {
            description: 'the weaving of baskets underwater',
            fun_factor: 5
    },
    'badminton debate': {
            description: 'make friends and influence enemies with a birdie and racket',
            fun_factor: 8
    },}
 some_function(['Bob'],topics)
 would return
 [
 {name: 'Bob', topics: {'underwater basket weaving': {
description: 'the weaving of baskets underwater',
fun_factor: 5}
  }
]
hint: a random number of topics should be assigned to each name, and each topic assigned randomly
test: call your function using array3_var and object2_literal_var

*/

function shuffleArray(array) { // pass in your array
    for (var i = array.length - 1; i > 0; i--) { // keep looping through your original array til its gone
        var j = Math.floor(Math.random() * (i + 1)); // create a random index of whats left of array
        var temp = array[i]; // keep note of the last element of your array
        array[i] = array[j]; // replace the last element of your array with the randomed index
        array[j] = temp; // remember the last element of your array?  swap that into your random index //WHY?
    }
    return array;
}

function assign_topics(names, topics){
    var assignments = [];
    var keysArray = Object.keys(topics);
    var keyValuesArray = [];
    for (var property in topics){
        var temp = {};
        temp[property] = object2_literal_var[property];
        keyValuesArray.push(temp);
    }
    for (var i=0;i<names.length;i++){
        var numberOfTopics = Math.floor(Math.random() * topics.length)+1;

        assignments[i] = assignments.push(names[i])
    }


    return assignments;
}
assign_topics(array3_var, object2_literal_var);