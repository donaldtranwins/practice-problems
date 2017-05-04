<?="<pre>"?>
substr(string*,start*,length)
The substr() function returns a part of a string;

substr_count(string*,substring*,start,length)
The substr_count() function counts the number of times a substring occurs in a string;<hr><?php

$test1 = "da2kr32a2";
$test2 = "sskfssbbb9bbb";

function patternFinder ($input){
    $found = [];
    $patternFound = false;
    for ($start = 0; $start < strlen($input)-1; $start++){
        echo "<br>[$input] starting from: $input[$start]";
        for ($len = 0; $len < strlen($input)-$start; $len++){
            $substring = substr($input,$start,$len);
            if (empty($substring))
                continue;
            echo "<br>$substring";
            if (substr_count($input, $substring) > 1){
                if (empty($found[$substring])){
                    echo " repeats";
                    $found[$substring] = strlen($substring);
                    $patternFound = true;
                }
            } else if ($patternFound){
                echo ' does not repeat, breaking';
                $patternFound = false;
                break;
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
