$(document).ready(function () {
    //alert("DOM is completely created!");

    // Example 1
    // Event Handling Methods
    $("#ex01Button").on("click", function () {
        alert("Submit button is clicked.");
    });

    $(".withHoverEventHandling").hover(function () {
        $(this).text("mouseenter event is triggered!");
    }, function () {
        $(this).text("mouseleave event is triggered!");
    });

    $(".handlingMultipleEventsWithSingleHandler").on("mouseenter mouseleave mousedown", function (e) {
        $(this).text(e.type + " event is triggered!");
    });

    // Example 2
    // 디폴트 이벤트 핸들러 금지 시키기
    // $(sele)cor).on("eventName", function(e) { e.preventDefault(); });
    $("#googling").click(function (e) {
        var message = $(this).prop("tagName") + " is clicked.\n";
        e.preventDefault();
        message += "Default event handler is prevented.";
        alert(message);
    });

    // Example 3
    // 하나의 엘리먼트에 여러 이벤트 핸들러 바인딩 하기
    // $(selector).on( { "event#1": function { ... }, 
    //      "event#2": function { ... }, 
    //      ...
    // });
    $(".handlingMultipleEventsWithTheirOwnHandlers").on({
        "mouseenter": function () { $(this).css("background-color", "darkslateblue"); },
        "mouseleave": function () { $(this).css("background-color", "revert"); }
    });

    // Example 4
    // 이벤트 객체 프로퍼티 가져오기
    $(".box").on("mouseenter", function (e) {
        getEventObjectProperties(e);
    });
    $("input").on("focus", function (e) {
        getEventObjectProperties(e);
    });
    $("button").on("click", function (e) {
        getEventObjectProperties(e);
    });

    function getEventObjectProperties(e) {
        var message = "<u>" + e.type + "</u> event is triggered on <u>" +
            e.target.nodeName.toLowerCase() +
            "</u> with the id: <u>" +
            $(e.target).attr("id") +
            "</u> and with the class: <u>" +
            $(e.target).attr("class") + "</u><br>";
        message += "Key/Button was pressed: <u>" + e.which + "</u><br>";
        message += "(x, y) coordiate of the mouse when event is triggered: (<u>" +
            e.pageX + "</u>, <u>" + e.pageY + "</u>)";
        $("#eventInfo").html(message);
    }

    // Example 5
    // 이벤트 전파
    $("a").not(".propagationStopped").click(function (eventObj) {
        $("#eventPropagationInfo").append("Executing anchor (A) link click event handler ...<br>");
        eventObj.preventDefault();
    });
    $(".propagationStopped").click(function (eventObj) {
        $("#eventPropagationInfo").append("Executing anchor (A) link click event handler ...<br>");
        eventObj.preventDefault();
        eventObj.stopPropagation();
    });
    $("li").click(function () {
        $("#eventPropagationInfo").append("Executing LI click event handler...<br>");
    });
    $("ul").click(function () {
        $("#eventPropagationInfo").append("Executing UL click event handler...<br>");
    });
    $("body").click(function () {
        $("#eventPropagationInfo").append("Executing BODY click event handler...<br>");
    });
    $("html").click(function () {
        $("#eventPropagationInfo").append("Executing HTML click event handler...<br>");
    });

    $(document).click(function () {
        $("#eventPropagationInfo").append("Executing DOCUMENT click event handler...<br>");
    });
    $(window).click(function () {
        $("#eventPropagationInfo").append("Executing WINDOW (Browser) click event handler...<br>");
    });

    // Example 6
    // 기존 엘리먼트 및 추후 생성될 엘리먼트에 대한 이벤트 핸들러 바인딩 (이벤트 델리게이션)
    // $(selector).on("eventName", "childSelector", function() { ... });
    $("#createButton").click(function () {
        $("ul").append("<li>New Department</li>");
    });
    $("ul").on("click", "li", function (e) {
        $("#eventDelegationInfo").append("Event delegated! <br>");
    })

    // Example 7
    // 이벤트 핸들러 한 번만 실행되도록 하기
    $("#onlyOnceButton").one("click", function () {
        alert("This popup appears only once!");
    });

    // Example 8
    // 이벤트 핸들러 제거
    $("#removeEventHandlersButton").click(function () {
        $("li").off("click");
        $("ul").off("click");
        $("body").off("click");
        $("html").off("click");
        $(document).off("click");
        $(window).off("click");
    });
});
