<?php
$d = new DateTime();
$month = $d->format("n");
$day = $d->format("j");

$content = file_get_contents("http://numbersapi.com/$month/$day");

print <<< _PAGE_
오늘은 $month 월 $day 일 입니다.
<p>
    <code>
    $content
    </code>
</p>
_PAGE_;


print "<pre>";
print var_dump($d);
print "</pre><br>";

print die("현재 파일: " . __FILE__);

error_log("에러는 없지만 테스트 용으로 ...");
?>