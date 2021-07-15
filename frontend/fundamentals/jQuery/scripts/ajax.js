$(document).ready(function () {
    function processData(response, status) {
        $("#ajaxStatusMessage").append("Status: " + status + "<br>");

        var records = response.split("\n");
        for (var i = 0; i < records.length; i++) {
            var fields = records[i].split(",");

            $("#tblEmployee").append("<tr><td>" + fields[0] +
                "</td><td>" + fields[1] +
                "</td><td>" + fields[2] + "</td></tr>"
            );
        }
        $("tr").eq(0).addClass("header");
        $("tr:even:gt(0)").addClass("evenRow");
        $("tr:odd").addClass("oddRow");
    }
    
    function reportError(request, status, errorMessage) {
        $("#ajaxStatusMessage").append("Status: " + status + "<br>Error Message: " + errorMessage);
        $("#ajaxStatusMessage").addClass("errMsg");
    }

    $.ajax({
        type: "GET",
        url: "employees.txt",
        dataType: "text",
        success: processData,
        error: reportError
    });
});