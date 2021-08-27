<?php
require "FormHelper.php";

session_start();

include "./main-dishes.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    list($errors, $input) = validate_form();
    if ($errors) {
        show_form($errors);
    } else {
        process_form($input);
    }
} else {
    show_form();
}

function show_form($errors = []) {
    $form = new FormHelper();

    if ($errors) {
        $errorHtml = "<ul><li>";
        $errorHtml .= implode("</li><li>", $errors);
        $errorHtml .= "</li></ul>";
    } else {
        $errorHtml = "";
    }

    print <<<_FORM_
    <form method="POST" action="{$form->encode($_SERVER['PHP_SELF'])}">
        $errorHtml
        메뉴: {$form->select($GLOBALS["main_dishes"], ["name" => "dish"])} <br>
        수량: {$form->input("text", ["name" => "quantity"])} <br>
        {$form->input("submit", ["value" => "주문하기"])}
    </form>
    <p>
        <a href="/sessions/order-info.php">주문 내역 보기</a>
    </p>
    _FORM_;
}

function validate_form() {
    $input = [];
    $errors = [];

    $input["dish"] = $_POST["dish"] ?? "";
    if (! array_key_exists($input["dish"], $GLOBALS["main_dishes"])) {
        $errors[] = "올바른 메뉴를 선택해주세요.";
    }

    $input["quantity"] = filter_input(INPUT_POST, "quantity", FILTER_VALIDATE_INT, ["options" => [
        "min_range" => 1
    ]]);
    if (($input["quantity"] === false) || ($input["quantity"] === null)) {
        $errors[] = "수량을 입력해주세요.";
    }
    return [$errors, $input];
}

function process_form($input) {
    $_SESSION["order"][] = ["dish" => $input["dish"], "quantity" => $input["quantity"]];
    print "주문이 완료 되었습니다.\n";
    print '<a href="/sessions/order-info.php">주문 내역 보기</a>';
}

?>