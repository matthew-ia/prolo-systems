/**
 * Handles saving input to the report object
 */

//reportName logNumber date ownerName businessAddress
//            contactName contactPhoneNumber contactAddress businessCategory
//            businessType

$('#general input, #general select, #general textarea').blur(function() {
    switch($(this).attr('name')) {
        case 'reportName':
            $(this).val() = REPORT.reportName;
            REPORT.general.items[0].reportName = REPORT.reportName;
            break;
        case 'logNumber':
            REPORT.id = $(this).val();
            REPORT.general.items[0].logNumber = REPORT.id;
            break;
        //case 'date':
            // TODO: fix bug, doesn't save on blur until refocus -> blur
        case 'ownerName':
            REPORT.general.items[0].ownerName = $(this).val();
            break;
        case 'businessAddress':
            REPORT.general.items[0].businessAddress = $(this).val();
            break;
        case 'contactName':
            REPORT.general.items[0].contactName = $(this).val();
            break;
        case 'contactPhoneNumber':
            REPORT.general.items[0].contactPhoneNumber = $(this).val();
            break;
        case 'contactAddress':
            REPORT.general.items[0].contactAddress = $(this).val();
            break;
        case 'businessCategory':
            REPORT.general.items[0].businessCategory = $(this).val();
            break;
        case 'businessType':
            REPORT.general.items[0].businessType = $(this).val();
            break;
        default:
            console.log("Got to default...");
    }
});

//yearAcquired, itemDescription, group, status,
//            amtChanged, cost
$('#personal input, #personal select').blur(function() {
    let parents = $(this).parents();
    var rowId = undefined;
    for (i = 0; i < parents.length; i++) {
        if($(parents[i]).is('tr')) {
            rowId = $(parents[i]).attr('id');
            rowId = rowId.split("-").pop();
            console.log(rowId);
        }
    }
    if (rowId === undefined) {console.log("Invalid rowId...exiting."); return;}
    switch($(this).attr('name')) {
        case 'yearAcquired':
            REPORT.personal.items[rowId].yearAcquired = $(this).val();
            break;
        case 'itemDescription':
            REPORT.personal.items[rowId].itemDescription = $(this).val();
            break;
        case 'group':
            REPORT.personal.items[rowId].group = $(this).val();
            break;
        case 'status':
            REPORT.personal.items[rowId].status = $(this).val();
            break;
        case 'amtChanged':
            REPORT.personal.items[rowId].amtChanged = $(this).val();
            break;
        case 'cost':
            REPORT.personal.items[rowId].cost = $(this).val();
            break;
    }
});

$('#vehicles input, #vehicles select').blur(function() {
    let parents = $(this).parents();
    var rowId = undefined;
    for (i = 0; i < parents.length; i++) {
        if($(parents[i]).is('tr')) {
            rowId = $(parents[i]).attr('id');
            rowId = rowId.split("-").pop();
            console.log(rowId);
        }
    }
    if (rowId === undefined) {console.log("Invalid rowId...exiting."); return;}
    switch($(this).attr('name')) {
        case 'yearAcquired':
            REPORT.vehicle.items[rowId].yearAcquired = $(this).val();
            break;
        case 'modelYear':
            REPORT.vehicle.items[rowId].modelYear = $(this).val();
            break;
        case 'make':
            REPORT.vehicle.items[rowId].make = $(this).val();
            break;
        case 'model':
            REPORT.vehicle.items[rowId].model = $(this).val();
            break;
        case 'bodySize':
            REPORT.vehicle.items[rowId].bodySize = $(this).val();
            break;
        case 'titleNum':
            REPORT.vehicle.items[rowId].titleNum = $(this).val();
            break;
        case 'vehicleId':
            REPORT.vehicle.items[rowId].vehicleId = $(this).val();
            break;
        case 'group':
            REPORT.vehicle.items[rowId].group = $(this).val();
            break;
        case 'cost':
            REPORT.vehicle.items[rowId].cost = $(this).val();
            break;
    }
});

$('#other-supplies input, #other-supplies select').blur(function() {
    let parents = $(this).parents();
    var rowId = undefined;
    for (i = 0; i < parents.length; i++) {
        if($(parents[i]).is('tr')) {
            rowId = $(parents[i]).attr('id');
            rowId = rowId.split("-").pop();
            console.log(rowId);
        }
    }
    if (rowId === undefined) {console.log("Invalid rowId...exiting."); return;}
    switch($(this).attr('name')) {
        case 'yearAcquired':
            REPORT.other.items[rowId].yearAcquired = $(this).val();
            break;
        case 'itemDescription':
            REPORT.other.items[rowId].itemDescription = $(this).val();
            break;
        case 'cost':
            REPORT.other.items[rowId].cost = $(this).val();
            break;
    }
});

$('#other-supplies input, #other-supplies select').blur(function() {
    switch($(this).attr('name')) {
        case 'signature':
            REPORT.other.items[0].signature = $(this).val();
            break;
    }
});

// Need to do a preliminary save of items that may have valid defaults (status),
// or change them to have invalid defaults


// TODO: Fix bug, still doesn't work
$('.datepicker-panel').on('hide.datepicker', function () {
    console.log("Datepicker hide");
});

$('.datepicker-dropdown').blur(function() {
    console.log("Ayo datepicker onblur fired!");
    console.log($(this).val());

});
