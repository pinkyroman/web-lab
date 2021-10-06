$(document).ready(function () {
    // $(selector).filter(filterSelector);
    $("tr").filter(".newRecord").css("background-color", "darkslateblue").css("color", "white").css("font-weight", "bold");

    // $(selector).filter(function() { ... });
    $("tr").filter(function () {
        return ($(this).children().eq(0).text() == "Mary Jones");
    }).css("color", "white").css("background-color", "red").css("font-weight", "bold");

    // $(selector).has(descendantSelector);
    $("tr").has(".bestSalary").addClass("rowWithBestSalary");

    // $(selector).not(descendantSelector);
    $("tr").not(".newRecord").not(".bestSalaray").css("background-color", "cornflowerblue");

    // $(selector).not(function() { ... });
    $("tr:gt(0)").not(function (index) {
        // 헤더를 제외 시키기위해 gt(0) 사용
        // td의 두 번째 child는 "Department Name" 컬럼 값에 해당.
        return ($(this).children().eq(1).text() == "Technology");
    }).css("background-color", "lightblue");

    // 인덱스로 임의 범주의 엘리먼트 선택
    // $(select).slice(startIndexNumber, endIndexNumber);
    $("tr").slice(3, 5).children().text("sliced");

    // 선택된 엘리먼트 집합에 엘리먼트 추가 하기
    //$(selector1).add(selector2);
    $("tr:gt(0)").add("li").css("background-color", "pink");

    // $(selector1).is(selector2);
    // selector2 에 의한 엘리먼트 집합 중 최소 하나의 엘리먼트가 selector1에 의한 집합에 포함되어 있으면 true 반환
    if ($("tr:gt(0)").is(".newRecord")) {
        $("#message").prop("innerHTML", "<strong>There is a new record in the table.</strong>").css("color", "red");
    }

    // 특정 작업을 수행하기 위해 jQuery 객체의 각 HTML 엘리먼트에 대한 반복하기
    // $("selector").each(function() {currentIndexNumber, currentElement) {
    //     ... 수행할 동작 ...
    // });
    $("tr").each(function (index, htmlElement) {
        var firstColumn = $(htmlElement).children().eq(0);
        var orig = $(firstColumn).text();
        $(firstColumn).text(orig + "(" + index + ")");
    });

    // 가장 마지막 확장(expansion) 이나 축소(narrow)에 대한 취소
    // $(selector).add(additionalSelector).manipulationMethod().end();
    // $(selector).filter(additionalSelector).manipulationMethod().end();
    // 아래 예제의 경우, 
    // tr 엘리먼트 선택 > li 엘리먼트 선택 > 이들에 대한 background - color 설정 한 후, 
    // end()에 의해 li 엘리먼트 선택 취소 > tr 엘리먼트에 대해서만 underline 속성 반영 처리 하고 있음.
    $("tr:gt(0)").add("li").css("background-color", "lightblue").end().css("text-decoration", "underline");

    // 이전 엘리먼트 집합을 현재의 집합에 추가 하기
    // $(selector1).selectionMethod().addBack(selector2);
    $(".newRecord").nextAll().addBack().css("background-color", "darkslateblue");

    // 함수를 사용하여 기존 jQuery 객체로부터 새로운 jQuery 객체 생성
    // $(selctor).map(function() { ... return(element) });
    var jqObj = $("tr:gt(0)").map(function () {
        return $(this).children().first().text();
    });
    var employeeNames = jqObj.get().join(", ");
    $("#employees").prop("innerHTML", "<i>Employees List: " + employeeNames + "</i>");
});