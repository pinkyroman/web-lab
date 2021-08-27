<?php
$name = "Ozzy";
print "name = $name\n";

function print_name() {
    $name = "Alice";
    print "name of print_name() = $name\n";
}

print_name();
print "name = $name\n";

function print_name_or_default($name = "default name") {
    print "name of print_name_or_default() = $name\n";
}
print_name_or_default($name);
print_name_or_default();

$artists = [
    "Ozzy",
    "Alice",
    "Robert"
];

print "\$artists[0] =  $artists[0]\n";
function change_first_element($a) {
    $a[0] = "CHANGED";
    print "\$a[0] =  $a[0]\n";
    return;
}
change_first_element($artists);
print "\$artists[0] =  $artists[0]\n";

// 지역 변수와 전역 변수
$v = "전역 변수";
print "전역으로 선언한 \$v = $v\n";
function xyz() {
    print "함수 시작.\n";
    print "전역으로 선언한 \$v = $v\n"; // $v는 이 함수 내에서 정의되지 않은 변수로 취급 됨.
    $v = "지역 변수"; // 이 함수 내에서 정의된 $v
    print "함수 내 \$v = $v\n";
    print "함수 종료.\n";
}
xyz();
print "다시 확인하는 전역으로 선언한 \$v = $v\n\n";

function use_global_variables() {
    print "함수 시작.\n";
    printf("\$GLOBALS['v'] = %s\n", $GLOBALS['v']);
    $v = "지역 변수"; // 이 함수 내에서 정의된 $v
    print "함수 내 \$v = $v\n";
    print "함수 종료.\n";
}
use_global_variables();
print "\n";

function use_global_variables_2() {
    print "함수 시작.\n";
    global $v;
    print "전역으로 선언한 \$v = $v\n";
    $v = "함수 내에서 변수 수정";
    print "함수 내 \$v = $v\n";
    print "함수 종료.\n";
}
use_global_variables_2();
print "다시 확인하는 전역으로 선언한 \$v = $v\n\n";

// 함수 매개변수에 대한 형 선언 (인수 값 제약 조건)
function add_two_numbers_1($a, $b) {
    return $a + $b;
}
print add_two_numbers_1(3, "xyz"); // Warning: A non-numeric value encountered in ...

function add_two_numbers_2(int $a, int $b) {
    return $a + $b;
}
// print add_two_numbers_2(3, "xyz"); // Fatal error: Uncaught TypeError ...

// 반환 값에 대한 형 제약 조건
function add_two_numbers_3(int $a, int $b): int {
    return $a + $b;
}
print "abc" + add_two_numbers_3(5, 8); // Warning: A non-numberic value encountered in ...

?>