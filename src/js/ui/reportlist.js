
function displayReports() {

    $('#report-list table').html("");

    if (REPORTLIST.length === 0) {
        $('#report-list table').append('<tr id="defaultReportRow"><td>' +
                        '<a href="#">Create a new report</a>' +
                        '</td></tr>');
                    console.log("Default");



    }
    else {
        for (var i = 0; i < REPORTLIST.length; i++) {
            $('#report-list table').append('<tr><td><a href="#">' +
                        REPORTLIST[i].general.items[0].reportName +
                        '</a></td></tr>');
        }


    }

    // Attach listners

    $('#report-list td a').click(function() {
        var reportName = $(this).text();
        showReportList(false);
        showReport(true);
        load(reportName);
        setAutoSave();
        console.log("Reg fired");
    });

    $('report-list #defaultReportRow a').click(function() {
        // Same functionality as clicking New Report
        addReport();
        showReportList(false);
        showReport(true);
        load(REPORT.reportName);
        setAutoSave();
    });
}
