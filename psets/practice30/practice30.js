function random_range(start_num, end_num){
    if(Array.isArray(start_num)){
        start_num = start_num.sort(function(a, b){
            return 0.5 - Math.random();
        });
        return start_num[0];
    } else if(end_num === undefined) {
        return "Please supply an end number";
    } else {
        start_num = parseInt(start_num);
        end_num = parseInt(end_num);
        if(end_num > start_num){
            return Math.floor(Math.random() * (end_num - start_num + 1) ) + start_num;
        } else {
            return Math.floor(Math.random() * (start_num - end_num + 1) ) + end_num;
        }
    }
}