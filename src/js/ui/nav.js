
$('#report-list-page').click(function() {
    var errorStatus = checkError();

    if (errorStatus !== OK) {
        console.log("NOT OK: " + errorStatus);
        showPopup(errorStatus);
        //else if (errorStatus === DUPLICATE) console.log("NOT OK: " + errorStatus);
    } else if (errorStatus === OK) {
        showReport(false);
        showReportList(true);
        displayReports();
    }
});

$('#new-report-page').click(function() {
    //var isSafe = true;
    var errorStatus = checkError();

    if (errorStatus !== OK) {
        console.log("NOT OK: " + errorStatus);
        showPopup(errorStatus);
        //else if (errorStatus === DUPLICATE) console.log("NOT OK: " + errorStatus);
    } else if (errorStatus === OK) {
        showReportList(false);
        showReport(true);
        enableAutoSave();
        enableAddRow();
        enableSubmitButton();
        enableDatepicker();
        enableSmoothScrollJump();
        addReport();
        load(REPORT.reportName);
    }

});
