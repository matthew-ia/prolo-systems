/**
 * Handles saving input to the report object
 */

/* jQuery Action Listeners
 * All input/select/textarea fields are handled by an ActionListener
 * that updates the report object data members on blur
 */

function enableAutoSave() {
    // General section
    $('#general input, #general select, #general textarea').blur(function() {
        switch($(this).attr('name')) {
            case 'reportName':
                REPORT.reportName = $(this).val();
                REPORT.general.items[0].reportName = REPORT.reportName;
                console.log("made it");
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

    // Personal Property section
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

    // Vehicles section
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

    // Other & Supplies section
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

    $('#affirmation input, #affirmation select').blur(function() {
        switch($(this).attr('name')) {
            case 'signature':
                REPORT.other.items[0].signature = $(this).val();
                break;
        }
    });
}


function manualSave() {

    // Save all inputs/selects/textareas

    // For the sections with multiple items
    var rowIdLast = 0;

    // General
    REPORT.general.items[0].reportName = $('#general [name="signature"]').val();
    REPORT.general.items[0].logNumber = $('#general [name="logNumber"]').val();
    REPORT.general.items[0].ownerName = $('#general [name="ownerName"]').val();
    REPORT.general.items[0].businessAddress = $('#general [name="ownerName"]').val();
    REPORT.general.items[0].contactName = $('#general [name="contactName"]').val();
    REPORT.general.items[0].contactPhoneNumber = $('#general [name="contactPhoneNumber"]').val();
    REPORT.general.items[0].contactAddress = $('#general [name="contactAddress"]').val();
    REPORT.general.items[0].businessType = $('#general [name="businessType"]').val();
    REPORT.general.items[0].businessCategory = $('#general [name="businessCategory"]').val();

    // Personal Property
    rowIdLast = $('#personal tr').last().attr('id');
    rowIdLast = rowIdLast.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        REPORT.personal.items[i].yearAcquired = $('#personal [name="yearAcquired"]').val();
        REPORT.personal.items[i].itemDescription = $('#personal [name="itemDescription"]').val();
        REPORT.personal.items[i].group = $('#personal [name="group"]').val();
        REPORT.personal.items[i].status = $('#personal [name="status"]').val();
        REPORT.personal.items[i].amtChanged = $('#personal [name="amtChanged"]').val();
        REPORT.personal.items[i].cost = $('#personal [name="cost"]').val();
    }

    // Vehicles
    rowIdLast = $('#vehicles tr').last().attr('id');
    rowIdLast = rowIdLast.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        REPORT.vehicle.items[i].yearAcquired = $('#vehicles [name="yearAcquired"]').val();
        REPORT.vehicle.items[i].modelYear = $('#vehicles [name="modelYear"]').val();
        REPORT.vehicle.items[i].make = $('#vehicles [name="make"]').val();
        REPORT.vehicle.items[i].model = $('#vehicles [name="model"]').val();
        REPORT.vehicle.items[i].bodySize = $('#vehicles [name="bodySize"]').val();
        REPORT.vehicle.items[i].titleNum = $('#vehicles [name="titleNum"]').val();
        REPORT.vehicle.items[i].vehicleId = $('#vehicles [name="vehicleId"]').val();
        REPORT.vehicle.items[i].group = $('#vehicles [name="group"]').val();
        REPORT.vehicle.items[i].cost = $('#vehicles [name="cost"]').val();
    }

    // Other & supplies
    rowIdLast = $('#other-supplies tr').last().attr('id');
    rowIdLast = rowIdLast.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        REPORT.other.items[i].yearAcquired = $('#other-supplies [name="yearAcquired"]').val();
        REPORT.other.items[i].itemDescription = $('#other-supplies [name="itemDescription"]').val();
        REPORT.other.items[i].cost = $('#other-supplies [name="cost"]').val();
    }

    // Affirmation
    REPORT.other.items[0].signature = $('[name="signature"]').val();
}

// TODO: ActionListener for a save button


// TODO: Need to do a preliminary save of items that may have valid defaults (status),
// or change them to have invalid defaults


// TODO: Fix bug, still doesn't work
$('.datepicker-panel').on('hide.datepicker', function () {
    console.log("Datepicker hide");
});

$('.datepicker-dropdown').blur(function() {
    console.log("Ayo datepicker onblur fired!");
    console.log($(this).val());

});
