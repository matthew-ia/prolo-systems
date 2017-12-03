
$('#report-list-page').click(function() {
    var isSafe = true;
    if ($('#general').css("display") !== "none") {
        if ($('#general [name="reportName"]').val() === undefined ||
            $('#general [name="reportName"]').val() === "") {
                showPopup();
                isSafe = false;
                return;
        }

        // Error checking for same name
        // In order to work, needs a second identifier for Reports
        // aka implementing report IDs
        /* else {
            for (i = 0; i < REPORTLIST.length; i++) {
                if (REPORT.reportName === REPORTLIST[i].reportName) {
                    showPopup(someIdToIndicateDifferentPopup);
                    isSafe = false;
                }
            }
        } */
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
