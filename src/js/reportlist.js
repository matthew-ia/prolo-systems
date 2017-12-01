
function displayReports() {
    for(var i = 0; i < REPORTLIST.length; i++) {
        var nameListItem = "<li>";
        nameListItem += REPORTLIST[i].general.items[0].reportName + "</li>";
        $('#report-list table').append('<tr><td>' +
                        REPORTLIST[i].general.items[0].reportName +
                        '</tr></td>');
    }
}


$('#report-list td').click(function() {
    //load();
});
