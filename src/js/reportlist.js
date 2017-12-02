
function displayReports() {
    $('#report-list table').html("");
    for(var i = 0; i < REPORTLIST.length; i++) {
        $('#report-list table').append('<tr><td><a href="#">' +
                        REPORTLIST[i].general.items[0].reportName +
                        '</a></td></tr>');
    }

    // Attach Listeners
    $('#report-list td a').click(function() {
        var reportName = $(this).text();
        showReportList(false);
        showReport(true);
        load(reportName);
        setAutoSave();
    });
}
