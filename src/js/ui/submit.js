function enableSubmitButton() {
  $('#subBut').click(function() {
  var isSafe = true;
  if ($('#general').css("display") !== "none") {
    if ($('#general [name="reportName"]').val() === undefined ||
    $('#general [name="reportName"]').val() === "") {
      showPopup();
      isSafe = false;
      return;
    }
  }

  if (isSafe) {
    manualSave();
    showReport(false);
    showReportList(true);
    displayReports();

  }
});
}
