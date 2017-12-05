
function displayReports() {

    $('#report-list table').html("");

    if (REPORTLIST.length === 0) {
        $('#report-list table').append('<tr id="defaultReportRow"><td>' +
                        '<a href="#">' +
                            'Create a new report' +
                        '</a>' +
                        '</td>' +
                        '</tr>');
    }
    else {
        for (var i = 0; i < REPORTLIST.length; i++) {
            $('#report-list table').append('<tr><td><a href="#">' +
                            REPORTLIST[i].reportName +
                        '</a></td>' +
                        '<td><button id="copyReport">' +
                            '<img src="images/copy.png">' +
                            '<br>Copy' +
                        '</button></td>' +
                        '<td><button id="deleteReport">' +
                            '<img src="images/delete.png">' +
                            '<br>Delete' +
                        '</button></td>' +
                        '</td></tr>');
        }
    }

    // Attach listners

    $('#report-list tr:first-of-type').hover(
        function() {$('#report-list a').css("color", "#FAF5FA");},
        function() {$('#report-list a').css("color", "#B8B9D5");}
    );

    $('#report-list tr td:first-child').click(function() {
        if (REPORTLIST.length > 0) {
            var reportName = $(this).text();
            showReportList(false);
            showReport(true);
            load(reportName);
            enableAutoSave();
            enableSubmitButton();
            enableDatepicker();
            enableSmoothScrollJump();
        } else {
            addReport(false);
            showReportList(false);
            showReport(true);
            load(REPORT.reportName);
            enableAutoSave();
            enableSubmitButton();
            enableDatepicker();
            enableSmoothScrollJump();
        }

    });

    $('#report-list #copyReport').click(function() {
        showReportList(false);
        showReport(true);
        addReport(true);
        load(REPORTLIST[REPORTLIST.length - 1].reportName, true);
    });

    $('#report-list #deleteReport').click(function() {
        var reportName = $(this).parents('td').prev().prev().text();
        deleteReport(reportName);

    });

    $('#report-list #copyReport').hover(
        function() {
            $(this).find('img').attr('src', 'images/copy-hover.png');
        },
        function() {
            $(this).find('img').attr('src', 'images/copy.png');
        }
    );

    $('#report-list #deleteReport').hover(
        function() {
            $(this).find('img').attr('src', 'images/delete-hover.png');
        },
        function() {
            $(this).find('img').attr('src', 'images/delete.png');
        }
    );
}
