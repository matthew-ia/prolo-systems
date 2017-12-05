// 1 function
// add new row with increminted id.
// ---figuring out what the parent is---
function enableAddRow() {
  // Figure out parents
  // Get last row id and save in var
  addRow('personal');
  addRow('vehicles');
  addRow('other-supplies');
  // append new row and set id to var + 1
};

function addRow(tableId){
  $('#' + tableId + ' .addRow button').click(function (){
    // row data
    var sectionId = $(this).parents('.section').attr('id');
    var rowId = $('#' + sectionId).find('tbody tr:last-of-type').attr('id');
    rowId = rowId.charAt(2);
    var newId = parseInt(rowId) + 1;
    var rowData = $('#' + sectionId + ' table tr:last').html();
    $('#' + sectionId + ' table').append('<tr id="1-' + newId + '">'+ rowData + '</tr>');
    //$('#1-0').append()
  });

}
