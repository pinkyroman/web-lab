<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    list($form_errors, $input) = validate_form();
    if ($form_errors) {
        show_form($form_errors);
    } else {
        process_form($input);
    }
} else {
    show_form([]);
}

function process_form($input) {
    print $input["age"]. "살이신 ". $input["name"]. "님 안녕하세요!";
}

function show_form($errors) {
    if ($errors) {
        print "다음 항목을 수정해 주세요: <ul><li>";
        print implode("</li><li>", $errors);
        print "</li></ul>";
    }
    print<<<_HTML_
    <form method="POST" action="$_SERVER[PHP_SELF]">
        이름: <input type="text" name="user_name">
        <br>
        나이: <input type="text" name="user_age">
        <br>
        <input type="submit" value="인사">
    </form>
    _HTML_;
}

function validate_form() {
    $errors = [];
    $input = [];

    $input["name"] = trim($_POST["user_name"]) ?? "";
    if (strlen($input["name"]) < 3) {
        $errors[] = "이름은 3글자 이상 입력해 주세요.";
    }

    $input["age"] = filter_input(INPUT_POST, "user_age", FILTER_VALIDATE_INT, [
        "options" => [
            "min_range" => 0,
            "max_range" => 180,
        ]
    ]);
    if (is_null($input["age"]) || !$input["age"]) {
        $errors[] = "나이를 정확하게(0 ~ 180) 입력해 주세요.";
    }

    return [$errors, $input];
}
?>