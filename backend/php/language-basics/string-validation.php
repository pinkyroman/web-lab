<?php
// trim() & strlen()
$zipcode = " \r\n \t abcd ef gh ijk   \t\n \t ";
$zip_orig_length = strlen($zipcode);
print "original zipcode: $zipcode\r\n";

$tr_zipcode = trim($zipcode);
$zip_tr_length = strlen($tr_zipcode);
print "trimmed zipcode: $tr_zipcode\r\n";

print "before trim()\r\n";

// string comparison
if ($zipcode == $tr_zipcode) {
    print "they were the same!";
} else {
    print "they were different!";
}

// ignore-case string comparison
$string_1 = "ABC";
$string_2 = "abc";
if ($string_1 == $string_2) {
    print "EQUAL!\r\n";
} else {
    print "NOT EQUAL: $string_1, $string_2\r\n";
}
if (strcasecmp($string_1, $string_2) == 0) {
    print "EQUAL!\r\n";
} else {
    print "NOT EQUAL: $string_1, $string_2\r\n";
}

?>