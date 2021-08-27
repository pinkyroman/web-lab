<?php
require "./FormHelper.php";
session_start();

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

    print <<< _FORM_
    <form method="POST" action="{$form->encode($_SERVER['PHP_SELF'])}">
        $errorHtml
        아이디: {$form->input("text", ["name" => "username"])} <br>
        패스워드: {$form->input("password", ["name" => "password"])} <br>
        {$form->input("submit", ["value" => "로그인"])}
    </form>
    _FORM_;
}

function validate_form() {
    $input = [];
    $errors = [];
    $users = [
        "alice" => "alice.123",
        "bob" => "bob.123",
        "john" => "john.123",
    ];

    $input["username"] = $_POST["username"] ?? "";
    if (! array_key_exists($input["username"], $users)) {
        $errors[] = "올바른 사용자명과 비밀번호를 입력해주세요.";
    } else {
        $saved_password = $users[$input["username"]];
        $submitted_password = $_POST["password"] ?? "";
        if ($saved_password != $submitted_password) {
            $errors[] = "올바른 사용자명과 비밀번호를 입력해주세요($saved_password, $submitted_password).";
        }
    }
    return [$errors, $input];
}

function process_form($input) {
    $_SESSION["username"] = $input["username"];
    print "안녕하세요, $_SESSION[username] 님.<br>";
    print '<a href="/sessions/todo.php">작업</a>을 시작하세요.';
}

?>