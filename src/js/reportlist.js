
function displayReports() {
    for(var i = 0; i < REPORTLIST.length; i++) {
        $('#report-list table').append('<tr><td>' +
                        REPORTLIST[i].general.items[0].reportName +
                        '</tr></td>');
    }
}


$('#report-list td').click(function() {
    //load();
});
