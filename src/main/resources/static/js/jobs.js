$(document).ready(function () {
    $.ajax({
        // url: "http://localhost:8085/activities",

        success: function (result) {
            console.log(result);
            let tableContent = "";

            $.each(result, function (key, value) {
                tableContent += "<tr>";
                tableContent +=
                    "<td>" + value["jobTitle"] + "</td>" +
                    "<td>" + value["jobDescription"] + "</td>" +
                    "<td>" + value["company"] + "</td>"+
                    "<td>" + value["jobType "] + "</td>"+
                    "<td>" + value["location "] + "</td>";
            });
            tableContent += "</tr>";
            $('#tbl tbody').html(tableContent)
        }
    });
});