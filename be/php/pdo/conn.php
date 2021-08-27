<?php
require "./pdo_lib.php";

try {
    $db = new DishesDB("mysql:host=127.0.0.1;dbname=testbed", "root", "root.123");
    $db->connect();
} catch (Exception $e) {
    print "Failed to connect to DB: " . $e->getMessage();
}

$db->addDish("참깨 퍼프", 2.50, 0);

?>
