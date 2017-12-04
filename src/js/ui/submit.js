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
    displayReports();
    showReportList(true);
    window.location="https://www.google.com/";

    document.write("You will be redirected to main page in 10 sec.");
    setTimeout('Redirect()', 10000);
  }
});
