$(document).ready(function () {
    // Reset Style Button
    $("#resetStyleButton").click(function () {
        $("*").css("color", "revert");
        $("*").css("background-color", "revert");

        $(".list").css("border", "3px double green");
        $(".newRecord").css("background-color", "lightyellow");
        $(".tblHdr").css("background-color", "lightgray");
        $(".departments").css("width", "200px");
        $(".oldRecord").css("font-style", "italic");

        var jqObj = $("tr.newRecord").children().eq(0);
        var name = $(jqObj).text();
        $(jqObj).text(name + " (new record)");
    });
    $("#resetStyleButton").click();

    // Example 01
    // 각 선택된 엘리먼트의 자식 노드 구하기
    // $(selector).children(childSelector);
    $("#test01Button").click(function () {
        $(".newRecord").children().each(function () {
            alert($(this).text());
        });
    });

    // Example 02
    // 텍스트 및 코멘트 노드를 포함한 모든 선택된 엘리먼트의 자식 노드 구하기
    // $(selector).contents();
    // Literal string, HTML 엘리먼트 및 빈 문자열(empty string: 태그 간 New line 문자 및 공백 문자)
    $("#test02Button").click(function () {
        $(".list").contents().each(function () {
            alert($(this).text());
        });
    });

    // Example 03
    // 명시된 셀렉터, jQuery 객체, 또는 HTML 엘리먼트에 의해 필터링 된
    // 모든 선택된 엘리먼트의 자손 노드 구하기
    // $(selector).find(descendantSelector);
    $("#test03Button").click(function () {
        $("table, ul").find(".newRecord").css("background-color", "lightblue");
    });

    // Example 04
    // 주어진 셀렉터에 일치하는 각 선택된 엘리먼트의 첫 번째 조상(ancestor) 구하기
    // $(selector).closest(ancestorSelector);
    var method1 = function () {
        $(".newRecord").closest(".list").each(function () {
            alert($(this).prop("tagName"));
        });
    };
    var method2 = function () {
        var jqObj = $(".list");
        $(".newRecord").closest(jqObj).each(function () {
            alert($(this).prop("tagName"));
        });
    }
    $("#test04Button").click(method2);

    // Example 05
    // 각 선택된 엘리먼트의 부모 구하기
    // $(selector).parent(parentSelector);
    $("#test05Button").click(function () {
        $("td").each(function (index, htmlElement) {
            var cellValue = $(this).text();
            // if Department is Technology, do something
            if (cellValue == "Technology") {
                $(this).parent().css("background-color", "darkslateblue").css("color", "white");
            }
        });
    });

    // Example 06
    // 각 선택된 엘리먼트의 조상 구하기
    // $(selector).parents(ancestorSelector);
    $("#test06Button").click(function () {
        $(".bestSalary").parents().each(function () {
            alert("Getting ancestors with parents(): " + $(this).prop("tagName"));
        });
    });

    // Example 07
    // 임의의 노드에 도달할 때까지 각 선택된 엘리먼트의 조상 구하기
    // $(selector).parentsUntil(ancestorSelector);
    $("#test07Button").click(function () {
        $(".oldRecord").parentsUntil("div").css("background-color", "lightblue");
    });

    // Example 08
    // 선택된 엘리먼트의 각 엘리먼트의 바로 직전의 형제(siblings) 구하기
    // $(selector).prev(siblingSelector);
    $("#test08Button").click(function () {
        $(".newRecord").prev().css("background-color", "darkslateblue").css("color", "red");
    });

    // Example 09
    // 선택된 엘리먼트들의 각 엘리먼트 바로 다음 형제 구하기
    // $(selector).next(siblingSelector);
    $("#test09Button").click(function () {
        $(".newRecord").next().css("background-color", "darkslateblue").css("color", "red");
    });

    // Example 10
    // 집합의 각 엘리먼트의 모든 형제 구하기
    // #(selector).siblings(siblingSelector);
    $("#test10Button").click(function () {
        $("tr.newRecord").siblings().not(".tblHdr, .tableFooter").css("background-color", "darkslateblue").css("color", "white");
    });
});