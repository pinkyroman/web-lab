$(document).ready(function () {
    // Example 01
    // 모든 선택된 엘리먼트에 CSS Class(es) 추가
    // $(selector).addClass("className1 className2, ...");
    $("#ex01Button").click(function () {
        $("ul").addClass("highlight");
    });

    // Example 01-1
    // $(selector).addClass(function (index, currentClass) { ... });
    $("#ex01_1Button").click(function () {
        $("li").addClass(function (index, currentClass) {
            if (index % 2 == 0) {
                return "evenRow";
            } else {
                return "oddRow";
            }
        });
    });



    // Example 02
    // 임의의 CSS Class가 선택된 엘리먼트의 어느 것과 관련이 있는지 확인하기
    // .hasClass("className");
    $("#ex02Button").click(function () {
        if ($("ul").hasClass("highlight") == true) {
            $("#classAssociation").prop("innerHTML", "ul tag has the class - 'highlight'");            
        } else {
            $("#classAssociation").prop("innerHTML", "ul tag doesn't have the class - 'highlight'");
        }
    });

    // Example 03
    // 각 선택된 엘리먼트에서 CSS Class(es) 제거
    // $(selector).removeClass("className1 className2 ...")
    $("#ex03Button").click(function () {
        $("ul").removeClass("highlight").children().removeClass("oddRow evenRow");
    });

    // Example 04
    // 선택된 엘리먼트들의 각 엘리먼트에 대하여 CSS Class(es) 토글 하기
    // $(selector).toggleClass("className1 className2 ...");
    $("#ex04Button").click(function () {
        $("ul").toggleClass("highlight");
    });

    // Example 05
    // 함수의 반환 값을 기반으로 선택된 엘리먼트의 CSS Class(es) 토글 하기
    // $(selector).toggleClass(function(index, currentClass) { ... });
    $("#ex05Button").click(function () {
        $("li").toggleClass(function (index, currentClassName) {
            return "item_" + index;
        });
    });

    // Example 06
    // 모든 선택된 엘리먼트들에 대하여 여러 개의 CSS 속성 설정하기
    // cssProperties = { "propertyName1" : "propertyValue1",
    //  "propertyName2" : "propertyValue2",
    //  ...
    // };
    // $(selector).css(cssPropertes);
    $("#ex06Button").click(function () {
        var cssProperties = {
            "width": "140px",
            "font-weight": "normal",
            "color": "white",
            "background-color": "darkblue"
        };
        $(".label").css(cssProperties);
    });

    // Example 07
    // 선택된 엘리먼트 집합의 각 엘리먼트에 대한 하나의 CSS 속성을 함수를 기반으로 설정 하기
    // $(selector).css("propertyName", function(index) { ... });
    $("#ex07Button").click(function () {
        $("input:text").css("background-color", function (index) {
            if (index == 1) {
                return "lightblue";
            } else {
                return "lightyellow";
            }
        });
    });

    // Example 08
    // 선택된 엘리먼트 집합의 모든 엘리먼트의 애트리뷰트의 값을 구하거나 설정하기
    // $(selector).attr()
    $("#ex08Button").click(function () {
        $("#txtName").attr("value", "this was set by attr()");
        var attributesDetail =
            "input Textbox: " +
            " <b>type:</b> " + $("#txtName").attr("type") +
            " <b>id:</b> " + $("#txtName").attr("id") +
            " <b>value:</b> " + $("#txtName").attr("value");
        $("#message").prop("innerHTML", attributesDetail);
    });

    // Example 09
    // 선택된 엘리먼트 집합의 모든 엘리먼트에 대하여 복수 개의 애트리뷰트 값 설정하기
    // $(selector).attr(attributes);
    $("#ex09Button").click(function () {
        var attributes = {
            "class": "dataEntry setByattr(attributes)",
            "value": "setByattr(attributes)"
        };
        $("#txtName").attr(attributes);
        var attributesDetail =
            "input Textbox: " +
            " <b>type:</b> " + $("#txtName").attr("type") +
            " <b>class:</b> " + $("#txtName").attr("class") +
            " <b>value:</b> " + $("#txtName").attr("value");
        $("#message").prop("innerHTML", attributesDetail);
    });

    // Example 10
    // 함수로 애트리뷰트 값 변경하기
    // $(selector).attr("attribute", function (index) { ... });
    $("#ex10Button").click(function () {
        var attributes = {
            "value": "John Smith",
            "style": "background-color: yellow",
        };
        $("#txtName").attr("value", function () {
            if ($("#chkMale").prop("checked") == true) {
                return "John Smith";
            } else {
                return "Jane Smith";
            }
        });
    });

    // Example 11-0, 1
    // 선택된 엘리먼트(들)의 속성 값 설정 및 가져오기
    // $(selector).val();
    $("#ex11_0Button").click(function () {
        alert($("#txtName").val());
    });
    $("#ex11_1Button").click(function () {
        $("#txtName").val("Ozzy Osbourne");
    });

    // Example 12
    // 함수 기반으로 선택된 엘리먼트(들)의 속성 값 설정 및 가져오기
    // $(selector).val(function (index, currentValue) { ... });
    $("#ex12Button").click(function () {
        $("#txtName").val(function (index, currentValue) {
            return currentValue.toUpperCase();
        });
    });

    // Example 13
    // 선택된 엘리먼트(들)의 첫 번째 엘리먼트의 HTML 가져오기
    // $(selector).html();
    $("#ex13Button").click(function () {
        alert($("ul").html());
    });

    // Example 14
    // 모든 선택된 엘리먼트의 HTML 대체하기
    // $(selector).html("htmlString");
    $("#ex14Button").click(function () {
        $("ul").html("<li>New Department</li>");
    });

    // Example 14-1
    // 함수 기반 HTML 대체
    $("#ex14_1Button").click(function () {
        $("ul").children().html(function (index, oldHTML) {
            if (index % 2 == 0) {
                return "<li>REPLACED</li>";
            }
        });
    });

    // Example 15
    // 엘리먼트의 Combined Text 가져오기
    $("#ex15Button").click(function () {
        alert($("li").text());
    })

    // Example 16
    // 선택된 집합의 끝에 HTML 컨텐트 추가.
    // $(selector).append("htmlContent");
    $("#ex16Button").click(function () {
        $("ul").append("<li>Newly appended list item</li>");
        
        $("<li>Another method to append</li>").appendTo("ul");

        var items = ["<li>Apple</li>", "<li>Orange</li>", "<li>Banana</li>"];
        $("ul").append(items);

        $("ul").append(function (index, currentHTML) {
            return "<li>Appended content based on the function</li>";
        });
    });

    // Example 17
    // 선택된 엘리먼트들의 목록 시작 위치에 컨텐트 삽입
    // $(selector).prepend("htmlContent");
    $("#ex17Button").click(function () {
        var items = ["<li>Prepended Apple</li>", "<li>Prepended Orange</li>", "<li>Prepended Banana</li>"];
        $("ul").prepend(items);

        $("ul").prepend("<li>The last prepended item</li>");
    });

    // Example 18
    // 선택된 엘리먼트 주위에 HTML 컨텐트를 래핑 하기
    // $(selector).wrap("htmlCotent");
    // $(selector).wrap(wrapingSelector);
    // $(selector).wrap(htmlElement);
    // $(selector).wrap(jQueryObject);
    // $(selector).wrap(function (index) { ... });
    $("#ex18Button").click(function () {
        $("ul").wrap("<div class='highlight'></div>");        
    });

    // Example 19
    // 선택된 엘리먼트의 컨텐트를 래핑 하기
    // $(selector).wrapInner("htmlContent");
    $("#ex19Button").click(function () {
        $("li").wrapInner("<div class='highlight'></div>");
    });

    // Example 20
    // 모든 선택된 엘리먼트 주위에 HTML 래핑하기
    // $(selector).wrapAll("htmlContent");
    $("#ex20Button").click(function () {
        $("li").wrapAll("<div class='highlight'></div>");
    });

    // Example 21
    // 각 선택된 엘리먼트 다음에 컨텐트 추가하기
    // $(selector).after("htmlContent");
    $("#ex21Button").click(function () {
        $("#lstDepartments").after("<b> - Implementation with after()</b>");
        $("#lstDepartments").append("<b> - Implementation with append()</b>");
    });

    // Example 22
    // 선택된 모든 엘리먼트 복사/제거 하기
    // $(selector).clone();
    // $(selector).remove();
    $("#chkShippingAddress").click(function () {
        if ($(this).prop("checked")) {
            $("#shippingAddress").append($(".billingAddress").clone());
        } else {
            $("#shippingAddress > .billingAddress").remove();
        }
    });

    // Example 23
    // 모든 선택된 엘리먼트의 자식 노드를 DOM에서 제거하기
    // $(selector).remove();
    $("#ex23Button").click(function () {
        $("#tech").empty();
        $("#tech").append("<li>Mobile Development</li>");
    });

    // Example 24
    // 각 선택된 엘리먼트의 부모를 제거하기
    // $(selector).unwrap();
    $("#ex24Button").click(function () {
        $("p.para").unwrap();
    });

    // Example 25
    // DOM 에서 선택된 아이템(들)을 HTML 문자열로 명시된 새로운 아이템(들)로 대체 하기
    // $(selector).replaceWith("newHTMLContent");
    $("#ex25Button").click(function () {
        $(".newRecord").replaceWith("<li>Mobile Development</li>");
        $("<li>Core Development</li>").replaceAll(".oldRecord");
        $("#lstDepartments").replaceWith(function () {
            return "<p>REPLACED WITH ME :-)</p>";
        });
    });
});