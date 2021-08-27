<?php 
require "./FormHelper.php";

// 데이터베이스 접속
try {
    $db = new PDO("mysql:host=127.0.0.1;dbname=testbed", "root", "root.123");    
} catch (PDOException $e) {
    print "DB에 접속할 수 없습니다: " . $e->getMessage();
    exit();
}

// DB 오류 예외 설정
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// 객체 방식으로 가져오기
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

// 맵기 선택 값
$spicy_choices = ["no", "yes", "either"];

// 페이지의 메인 로직:
// - 폼이 제출되면, 검증 과정을 수행하고 재표시 한다. 
// - 제출되지 않았으면 폼을 표시한다. 
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
    $defulats = [
        "min_price" => "5.00",
        "max_price" => "25.00",
    ];

    $form = new FormHelper($defulats);

    include "./retrieve_form.php";
}

function validate_form() {
    $input = [];
    $errors = [];

    $input["dish_name"] = trim($input["dish_name"]) ?? "";
    
    $input["min_price"] = filter_input(INPUT_POST, "min_price", FILTER_VALIDATE_FLOAT);
    if ($input["min_price"] === null || $input["min_price"] === false) {
        $errors[] = "최저 가격을 올바르게 입력해주세요.";
    }

    $input["max_price"] = filter_input(INPUT_POST, "max_price", FILTER_VALIDATE_FLOAT);
    if ($input["max_price"] === null || $input["max_price"] === false) {
        $errors[] = "최대 가격을 올바르게 입력해주세요.";
    }

    if ($input["min_price"] >= $input["max_price"]) {
        $errors[] = "최소 가격은 최대 가격보다 낮아야 합니다.";
    }

    $input["is_spicy"] = $_POST["is_spicy"] ?? "";
    if (! array_key_exists($input["is_spicy"], $GLOBALS["spicy_choices"])) {
        $errors = "올바른 '맵기'를 선택해주세요.";
    }

    return [$errors, $input];
}

function process_form($input) {
    global $db;

    $sql = "SELECT dish_name, price, is_spicy FROM dishes WHERE price >= ? AND price <= ?";
    if (strlen($input["dish_name"])) {
        $dish = $db->quote($input["dish_name"]);
        $dish = strtr($dish, ["_" => "\_", "%" => "\%"]);
        $sql .= " AND dish_name LIKE $dish";
    }

    // is_spicy가 "yes" 또는 "no"일 때 SQL에 추가 
    // "either"일 때는 WHERE 절에 is_spicy 조건을 추가하지 않음. 
    $spicy_choice = $GLOBALS["spicy_choices"][$input["is_spicy"]];
    if ($spicy_choice == "yes") {
        $sql .= " AND is_spicy = 1";
    } elseif ($spicy_choice == "no") {
        $sql .= " AND is_spicy = 0";
    }

    $stmt = $db->prepare($sql);
    $stmt->execute([$input["min_price"], $input["max_price"]]);
    $dishes = $stmt->fetchAll();

    if (count($dishes) == 0) {
        print "조건에 맞는 메뉴가 없습니다.";
    } else {
        print "<table>";
        print "<tr><th>메뉴명</th><th>가격</th><th>맵기</th></tr>";
        foreach ($dishes as $dish) {
            if ($dish->is_spicy == 1) {
                $spicy = "예";
            } else {
                $spicy = "아니오";
            }
            printf("<tr><td>%s</td><td>$%.02f</td><td>%s</td></tr>",
                htmlentities($dish->dish_name), $dish->price, $spicy);
        }
    }
}
?>