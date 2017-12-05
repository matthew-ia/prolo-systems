
// Add new row with increminted row ID
function enableAddRow() {
    // Attach listener to buttons once report is loaded
    $('.addRow button').click(function (){
        addRow(true, $(this));
    });
}

function addRow(sectionElem) {
    var sectionId = sectionElem.parents('.section').attr('id');
    var rowId = $('#' + sectionId).find('tbody tr:last-of-type').attr('id');
    rowId = rowId.charAt(2);
    var newId = parseInt(rowId) + 1;
    var rowData = $('#' + sectionId + ' table tr:last').html();
    $('#' + sectionId + ' table').append('<tr id="1-' + newId + '">'+ rowData + '</tr>');
}
