<?php
$sweets = [
    "puff" => "참깨 퍼프",
    "square" => "코코넛 우유 젤리",
    "cake" => "흑설탕 케이크",
    "ricemeat" => "찹쌀 경단",
];

function generate_options_with_value($options) {
    $html = "";
    foreach ($options as $value => $option) {
        $html .= "<option value=\"$value\">$option</option>\n";
    }
    return $html;
}

function show_form() {
    $sweets = generate_options_with_value($GLOBALS['sweets']);
    print <<< _HTML_
    <form method="POST" action="$_SERVER[PHP_SELF]">
        메뉴 선택: <select name="order">
        $sweets
        </select>
        <br>
        <input type="submit" value="주문">
    </form>
    _HTML_;
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    show_form();
} else if ($_SERVER["REQUEST_METHOD"] == "POST") {
    print <<< _HTML_
    <p>선택된 메뉴는 $_POST[order] 입니다.</p>
    _HTML_;
}
?>