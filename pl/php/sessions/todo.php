<?php
session_start();

if (array_key_exists("username", $_SESSION)) {
    print "$_SESSION[username] 님의 할 일은 ...";
} else {
    print "로그인 후 사용할 수 있습니다.";
}
?>