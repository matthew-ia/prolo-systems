
$('#report-list-page').click(function() {
    var isSafe = true;
    if ($('#general').css("display") !== "none") {
        if ($('#general [name="reportName"]').val() === undefined ||
            $('#general [name="reportName"]').val() === "") {
                showPopup();
                isSafe = false;
        }
    }

    if (isSafe) {
        showReport(false);
        displayReports();
        showReportList(true);
    }
});

$('#new-report-page').click(function() {
    showReportList(false);
    showReport(true);
    enableAutoSave();
    enableDatepicker();
    enableSmoothScrollJump();
    addReport();
    load(REPORT.reportName);
});
