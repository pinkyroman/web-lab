<?php
$val = 128;
print "val = $val\n";
printf("%%d = %d\n", $val);
printf("%%08d = %08d\n", $val);
printf("%%+8d = %+8d\n", $val);
printf("%%-8d = %-8d\n", $val);
printf("%%.2f = %.2f\n", $val);

$message = "hello, world!";
print "original message: $message\n";
printf("strtoupper(): %s\n", strtoupper($message));
printf("strtolower(): %s\n", strtolower($message));
printf("ucwords(): %s\n", ucwords($message));
printf("the first 5 characters from '$message': %s\n", substr($message, 0, 5));
printf("the last 5 characters from '$message': %s\n", substr($message, -5, 5));
printf("replace 'hello' with 'greetings': %s\n", str_replace("hello", "greetings", $message));
?>