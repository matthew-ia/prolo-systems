function enableSubmitButton() {
    $('#subBut').click(function() {
        var errorStatus = checkError();

        if (errorStatus !== OK) {
          console.log("NOT OK: " + errorStatus);
          showPopup(errorStatus);
          //else if (errorStatus === DUPLICATE) console.log("NOT OK: " + errorStatus);
        } else if (errorStatus === OK) {
          submit();
        }
    });
}

function submit() {
    manualSave();
    showReport(false);
    showReportList(true);
    displayReports();
}
