<?="<pre>"?>
substr(string*,start*,length)
The substr() function returns a part of a string;

substr_count(string*,substring*,start,length)
The substr_count() function counts the number of times a substring occurs in a string;<hr><?php

$test1 = "da2kr32a2";
$test2 = "sskfssbbb9bbb";

function patternFinder ($input){
    $found = [];
    for ($start = 0; $start < strlen($input); $start++){
        echo "[$input] starting from: $input[$start]<br>";
        for ($len = 0; $len < strlen($input); $len++){
            $substring = substr($input,$start,$len);
            if (empty($substring))
                continue;
//        echo "<br>$substring";
            if (substr_count($input, $substring) > 1){
                if (empty($found[$substring])){
                    echo "<br>$substring repeats";
                    $found[$substring] = strlen($substring);
                }
            }
        }

    }
    echo "<hr>";
    $longest = "";
    foreach ($found as $substring => $length){
        if ($length > strlen($longest)){
            $longest = $substring;
            echo "$substring is longer than $longest<br>";
        }
    }
    echo "<br>[$longest] is the longest repeating<hr>";
    return $longest;
};
$test1checked = patternFinder($test1);
$test2checked = patternFinder($test2);
echo "<hr>";
echo "Answer is: $test1checked<br>";
echo "Answer is: $test2checked<br>";
//var_dump($test1checked);
//var_dump($test2checked);


?>
