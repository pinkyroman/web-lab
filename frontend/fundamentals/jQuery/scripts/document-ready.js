// jQuery의 문서 로드 완료 이벤트(load) 핸들러 3가지 방식
$(document).ready(function () {
    alert("first method");
});

jQuery(document).ready(function () {
    alert("second method");
});

$(function () {
    alert("third method");
});