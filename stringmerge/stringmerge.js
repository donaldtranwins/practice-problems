function stringmerge(input){
    var position = input.search("\\*");
    var leftSide = input.slice(0,position);
    var rightSide = input.slice(position+1);

    var answer = [];
    for (var i=0;i<leftSide.length;i++){ //ignores last char of rightSide if uneven lengths
        answer.push(leftSide.charAt(i));
        answer.push(rightSide.charAt(i));
    }
    return answer.join("");
}
