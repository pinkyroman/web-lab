<?php
require "lib-sample.php";
require "./testlib/a.php";

$message = lib_func_abc();
print "message from lib: $message\n";

$message = testlib_a();
print "message from another lib: $message\n";
?>