
function displayReports() {

    $('#report-list table').html("");

    if (REPORTLIST.length === 0) {
        $('#report-list table').append('<tr id="defaultReportRow"><td><a href="#">' +
                        'Create a new report' +
                        '</td></tr></a>');
    }
    else {
        for (var i = 0; i < REPORTLIST.length; i++) {
            $('#report-list table').append('<tr><td><a href="#">' +
                        REPORTLIST[i].general.items[0].reportName +
                        '</a></td></tr>');
        }
    }

    // Attach listners

    $('#report-list tr:first-of-type').hover(
        function() {$('a').css("color", "#FAF5FA");},
        function() {$('a').css("color", "#B8B9D5");}
    );

    $('#report-list td:first-of-type').click(function() {
        if (REPORTLIST.length > 0) {
            var reportName = $(this).text();
            showReportList(false);
            showReport(true);
            load(reportName);
            enableAutoSave();
            enableDatepicker();
            enableSmoothScrollJump();
        } else {
            addReport();
            showReportList(false);
            showReport(true);
            load(REPORT.reportName);
            enableAutoSave();
            enableDatepicker();
            enableSmoothScrollJump();
        }

    });
}
