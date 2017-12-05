
// Add new row with increminted row ID
function enableAddRow() {
    // Attach listener to buttons once report is loaded
    $('.addRow button').unbind("click").click(function (){
        addRow(true, $(this));
        enableAutoSave();
    });
}

function addRow(isReportLoaded, sectionElem) {
    var sectionId = sectionElem.parents('.section').attr('id');
    var rowId = $('#' + sectionId).find('tbody tr:last-of-type').attr('id');
    rowId = rowId.split("-").pop();
    var newId = parseInt(rowId) + 1;
    var rowData = $('#' + sectionId + ' table tr').last().html();
    $('#' + sectionId + ' table').append('<tr id="1-' + newId + '">'+ rowData + '</tr>');
    console.log("addRow called (" + sectionId + ", " + newId + ")");

    switch(sectionId) {
        case "personal":
            REPORT.personal.addItem();
            break;
        case "vehicles":
            REPORT.vehicle.addItem();
            break;
        case "other-supplies":
            REPORT.other.addItem();
            break;
    }
}
