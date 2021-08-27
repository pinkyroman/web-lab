<?php
$meals = [
    "아침" => [ "호두 번", "커피" ],
    "점심" => [ "캐슈너트", "양송이버섯" ],
    "간식" => [ "말린 오디", "참깨 게살 무침" ],
];
printf("%s\n", $meals['점심'][1]); // 양송이버섯
// 또는 print "{$meals['점심'][1]}\n";

$lunches = [
    [ "닭고기", "가지", "쌀" ],
    [ "소고기", "부추", "국수" ],
    [ "가지", "두부" ],
];
printf("%s\n", $lunches[1][2]); // 국수

$lunches[] = [ "라면", "김치" ]; // 마지막에 추가
$last_index = count($lunches) - 1;
printf("%s\n", $lunches[$last_index][0]); // 라면
// 또는 print "{$lunches[$last_index][0]}\n";

$lunches[$last_index][] = "콜라";
$last_lunch = $lunches[$last_index];
$last_index_of_last_lunch = count($last_lunch) - 1;
printf("%s\n", $lunches[$last_index][$last_index_of_last_lunch]); // 콜라

$flavors = [
    "한국" => [
        "매운맛" => "고추장",
        "짠맛" => "간장",
    ],
    "미국" => [
        "매운맛" => "머스터드",
        "짠맛" => "허브잎",
    ],
];
printf("%s\n", $flavors["미국"]["짠맛"]); // 허브잎

foreach($flavors as $culture => $culture_flavors) {
    foreach($culture_flavors as $taste => $flavor) {
        print "$culture 의 $taste 을 내는 식재는 $flavor 입니다.\n";
    }
}
?>
