<?php 
$page = file_get_contents("./page-template.html");

$page = str_replace("{page_title}", "환영합니다", $page);

if (date("H") >= 12) {
    $page = str_replace("{color}", "blue", $page);
} else {
    $page = str_replace("{color}", "green", $page);
}

// $page = str_replace("{name}", $_SESSION["username"], $page);
$page = str_replace("{name}", "사용자", $page);

print $page;
?>