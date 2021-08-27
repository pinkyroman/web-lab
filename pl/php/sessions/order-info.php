<?php
session_start();

include "./main-dishes.php";

if (isset($_SESSION["order"]) && (count($_SESSION["order"]) > 0)) {
    print "<ul>";
    foreach ($_SESSION["order"] as $order) {
        $dish_name = $main_dishes[$order["dish"]];
        print "<li>$dish_name : $order[quantity] 개</li>";
    }
    print "</ul>";
} else {
    print "주문 내역이 없습니다.";
}

print '<a href="/sessions/order.php">주문 화면으로 돌아가기</a>';

?>