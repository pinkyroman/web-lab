// jQuery의 문서 로드 완료 이벤트(load) 핸들러 3가지 방식
$(document).ready(function () {
    // tag-selector
    $("img").mouseover(function () {
        $(this).css("opacity", "0.3");
    });
    $("img").mouseout(function () {
        $(this).css("opacity", "1.0");
    });
    // id-selector
    $("#currentDateTime").prop("innerHTML", new Date());
    // multiple selectors (any-of matching)
    $("div, [class ~= 'bold']").css("font-style", "italic");

    // class-selector
    $(".highlighted").css("background-color", "yellow");

    // 애트리뷰트의 값이 지정한 문자열로 시작하고 하이픈이 붙는 엘리먼트 선택(하이픈이 없어도 지정한 문자열인 경우 선택 됨)
    $("[class |= 'para']").css("background-color", "darkgray");

    // 애트리뷰트의 값이 지정한 문자열을 담고있는 엘리먼트 선택(공백 문자로 구분되어 있는 경우 선택 됨)
    $("[class ~= 'bold']").css("font-weight", "bold");
    
    // 지정한 애트리뷰트를 가진 엘리먼트 선택
    $("[custom]").css("color", "red");
    
    // 모든 엘리먼트 선택
    // $("*").click(function (e) {
    //     alert('You clicked ' + e.target.tagName);
    //     e.stopPropagation();
    // });

    // n-th item
    $("p").eq(2).text("This is the 2nd paragraph!");

    // odd/even elements
    $("tr:even").css("background-color", "cornflowerblue");
    $("tr:odd").css("background-color", "lightskyblue");

    // up to n-th element
    $("tr:lt(1)").css("background-color", "darkslateblue").css("color", "lightgray");

    // all headers: <h#>
    $(":header").css("color", "darkgray");

    // First and/or Last Element
    $("tbody tr").first().css("font-style", "italic");
    $("tbody tr").last().css("font-weight", "bold");

    // excluding some elements from the matched elements
    $("tbody tr:not([class ~='guarded'])").css("color", "blue");

    // first or n-th child node
    $("tbody tr:first-child").css("background-color", "yellow");
    $("tbody tr:nth-child(3)").css("background-color", "orange");

    // all elements containing the specified text
    $("tbody tr:contains('Ody')").css("background-color", "red").css("color", "white");

    // no child nodes
    $("tbody tr td:empty").css("background-color", "lightgray").text("empty row");

    // child node matching
    $("tr:has(td.jpop)").css("color", "red").css("background-color", "white");

    // selecting form elements based on their types and attributes
    $("[id ^= 'btn']").click(function () {
        var selector = $(this).val();
        $(selector).css("background-color", "cornflowerblue");
    });
    $("#buttonReset").click(function () {
        $("form *").css("background-color", "initial");
    });

});
