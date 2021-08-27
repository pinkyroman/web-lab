<?php
$a = 1;
$b = 3;

if ($a > $b) {
    print "a is bigger than b\n";
} elseif ($a < $b) {
    print "a is less than b\n";
} else {
    print "a is equal to b\n";
}

$diff = $a <=> $b;
print "$a <=> $b = $diff\n";

function evaluate($x) {
    if ($x) {
        print "$x is evaluated as ture.\n";
    } else {
        print "$x is evaluated as false.\n";
    }
}

evaluate(0);
evaluate(-1);
evaluate(1);

$price1 = 50.0;
$price2 = 50.0;

if (abs($price1 - $price2) == 0.0) {
    printf("%.5f == %.5f\n", $price1, $price2);
} else {
    printf("%.5f != %.5f\n", $price1, $price2);
}

if (abs($price1 - $price2) < 0.00001) {
    printf("%.5f == %.5f\n", $price1, $price2);
} else {
    printf("%.5f != %.5f\n", $price1, $price2);
}

?>