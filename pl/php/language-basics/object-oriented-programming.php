<?php
// 클래스 정의 하기
class Entree {
    public $name; // 속성
    public $ingredients = [];

    public function __construct($name, $ingredients) {
        if (! is_array($ingredients)) {
            throw new Exception("$ingredients 가 배열이 아닙니다.");
        }
        $this->name = $name;
        $this->ingredients = $ingredients;
    }

    public function hasIngredient($ingredient) {
        return in_array($ingredient, $this->ingredients);
    }

    // 정적 메서드
    public static function getSizes() {
        return ["소", "중", "대"];
    }
}

// 객체 생성 및 사용하기
$soup = new Entree("닭고기 수프", ["닭고기", "물", "소금"]);
// $soup->name = "닭고기 수프";
// $soup->ingredients = ["닭고기", "물"];

$sandwich = new Entree("닭고기 샌드위치", ["닭고기", "빵", "양상치"]);
// $sandwich->name = "닭고기 샌드위치";
// $sandwich->ingredients = ["닭고기", "빵"];

foreach(["닭고기", "레몬", "빵", "물"] as $ing) {
    if ($soup->hasIngredient($ing)) {
        print "수프의 재료: $ing.\n";
    }
    if ($sandwich->hasIngredient($ing)) {
        print "샌드위치의 재료: $ing.\n";
    }
}

$sizes = Entree::getSizes();
foreach($sizes as $s) {
    print "$s\n";
}

try {
    new Entree("알 수 없는 요리", "알 수 없는 재료"); // Fatal error: Uncaught Exception: 알 수 없는 재료 가 배열이 아닙니다. in ...
} catch (Exception $e) {
    print "준비 할 수 없는 요리 입니다.\n";
} finally {
    print "다음 메뉴를 준비 합니다.\n";
}

require "./testlib/characters.php";

$c = new \Game\Character("고블린", 2, 50, 20, 3);
$atk = $c->attack();
print "{$c->getName()} 의 공격으로 $atk 의 데미지를 입었습니다.\n";

use Game\Goblin;

$g = new Goblin();
$atk = $g->attack();
print "{$g->getName()} 의 공격으로 $atk 의 데미지를 입었습니다.\n";

?>