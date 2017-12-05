/**
 * Handles saving input to the report object
 */

/* jQuery Action Listeners
 * All input/select/textarea fields are handled by an ActionListener
 * that updates the report object data members on blur
 */

 // Total costs
 PERSONAL_COST = 0;
 VEHICLES_COST = 0;
 OTHER_COST = 0;

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
        var cost = 0;
        var amtChanged = 0;
        //var isCostChanged = false;
        //var isAmtChanged = false;

        let parents = $(this).parents();
        var rowIdSelected = undefined;
        var rowIdLast;
        var rowId;
        for (i = 0; i < parents.length; i++) {
            if($(parents[i]).is('tr')) {
                rowIdSelected = $(parents[i]).attr('id');
                rowIdLast = rowIdSelected.split("-").pop();
            }
        }
        //if (rowId === undefined) {console.log("Invalid rowId...exiting."); return;}
        rowId = '#' + rowIdSelected;
        console.log("I'm in boi" + rowId);
        console.log('this is: ');
        console.log($(this).val());
        switch($(this).attr('name')) {
            case 'yearAcquired':
                REPORT.personal.items[rowIdLast].yearAcquired = parseInt($(rowId + ' [name="yearAcquired"]').val());
                break;
            case 'itemDescription':
                REPORT.personal.items[rowIdLast].itemDescription = $(rowId + ' [name="itemDescription"]').val();
                break;
            case 'group':
                REPORT.personal.items[rowIdLast].group = $(rowId + ' [name="group"]').val();
                break;
            case 'status':
                REPORT.personal.items[rowIdLast].status = $(rowId + ' [name="status"]').val();
                break;
            case 'amtChanged':
                if (parseInt($(rowId + ' [name="amtChanged"]').val()) !==
                    REPORT.personal.items[rowIdLast].amtChanged) {
                        amtChanged = REPORT.personal.items[rowIdLast].amtChanged;
                }
                REPORT.personal.items[rowIdLast].amtChanged = parseInt($(rowId + ' [name="amtChanged"]').val());
                //isAmtChanged = true;
                break;
            case 'cost':
                console.log("cost is: " + PERSONAL_COST);
                if (parseInt($(rowId + ' [name="cost"]').val()) !==
                    REPORT.personal.items[rowIdLast].amtChanged) {
                        cost = REPORT.personal.items[rowIdLast].cost;
                }
                REPORT.personal.items[rowIdLast].cost = parseInt($(rowId + ' [name="cost"]').val());
                //isCostChanged = true;w
                break;
        }

        var status = $('#personal [name="status"]').val();
        changeCost("personal", cost, amtChanged, status);
        console.log("total cost: " + PERSONAL_COST);

    });

    // Vehicles section
    $('#vehicles input, #vehicles select').blur(function() {
        let parents = $(this).parents();
        var rowIdSelected = undefined;
        var rowIdLast;
        var rowId;
        for (i = 0; i < parents.length; i++) {
            if($(parents[i]).is('tr')) {
                rowIdSelected = $(parents[i]).attr('id');
                rowIdLast = rowIdSelected.split("-").pop();
            }
        }
        rowId = '#' + rowIdSelected;

        switch($(this).attr('name')) {
            case 'yearAcquired':
                REPORT.vehicle.items[rowIdLast].yearAcquired = parseInt($(rowId + ' [name="yearAcquired"]').val());
                break;
            case 'modelYear':
                REPORT.vehicle.items[rowIdLast].modelYear = $(rowId + ' [name="modelYear"]').val();
                break;
            case 'make':
                REPORT.vehicle.items[rowIdLast].make = $(rowId + ' [name="make"]').val();
                break;
            case 'model':
                REPORT.vehicle.items[rowIdLast].model = $(rowId + ' [name="model"]').val();
                break;
            case 'bodySize':
                REPORT.vehicle.items[rowIdLast].bodySize = $(rowId + ' [name="bodySize"]').val();
                break;
            case 'titleNum':
                REPORT.vehicle.items[rowIdLast].titleNum = $(rowId + ' [name="titleNum"]').val();
                break;
            case 'vehicleId':
                REPORT.vehicle.items[rowIdLast].vehicleId = $(rowId + ' [name="vehicleId"]').val();
                break;
            case 'group':
                REPORT.vehicle.items[rowIdLast].group = $(rowId + ' [name="group"]').val();
                break;
            case 'cost':
                REPORT.vehicle.items[rowIdLast].cost = parseInt($(rowId + ' [name="yearAcquired"]').val());
                break;
        }
    });

    // Other & Supplies section
    $('#other-supplies input, #other-supplies select').blur(function() {
        let parents = $(this).parents();
        var rowIdSelected = undefined;
        var rowIdLast;
        var rowId;
        for (i = 0; i < parents.length; i++) {
            if($(parents[i]).is('tr')) {
                rowIdSelected = $(parents[i]).attr('id');
                rowIdLast = rowIdSelected.split("-").pop();
            }
        }
        rowId = '#' + rowIdSelected;

        switch($(this).attr('name')) {
            case 'yearAcquired':
                REPORT.other.items[rowIdLast].yearAcquired = $(rowId + ' [name="yearAcquired"]').val();
                break;
            case 'itemDescription':
                REPORT.other.items[rowIdLast].itemDescription = $(rowId + ' [name="itemDescription"]').val();
                break;
            case 'cost':
                REPORT.other.items[rowIdLast].cost = parseInt($(rowId + ' [name="yearAcquired"]').val());
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

// Save all inputs/selects/textareas
function manualSave() {

    // For the sections with multiple items
    var rowIdLast = 0;

    REPORT.reportName = $('#general [name="reportName"]').val();

    // General
    REPORT.general.items[0].reportName = $('#general [name="reportName"]').val();
    REPORT.general.items[0].logNumber = $('#general [name="logNumber"]').val();
    REPORT.general.items[0].ownerName = $('#general [name="ownerName"]').val();
    REPORT.general.items[0].businessAddress = $('#general [name="ownerName"]').val();
    REPORT.general.items[0].contactName = $('#general [name="contactName"]').val();
    REPORT.general.items[0].contactPhoneNumber = $('#general [name="contactPhoneNumber"]').val();
    REPORT.general.items[0].contactAddress = $('#general [name="contactAddress"]').val();
    REPORT.general.items[0].businessType = $('#general [name="businessType"]').val();
    REPORT.general.items[0].businessCategory = $('#general [name="businessCategory"]').val();

    // Personal Property
    var rowIdSelected = $('#personal tr').last().attr('id');
    var rowIdFirst= rowIdSelected.charAt(0);
    var rowIdLast = rowIdSelected.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        var rowId = rowIdFirst + "-" + i;
        REPORT.personal.items[i].yearAcquired = $('#personal #' + rowId + ' [name="yearAcquired"]').val();
        REPORT.personal.items[i].itemDescription = $('#personal #' + rowId + ' [name="itemDescription"]').val();
        REPORT.personal.items[i].group = $('#personal #' + rowId + ' [name="group"]').val();
        REPORT.personal.items[i].status = $('#personal #' + rowId + ' [name="status"]').val();
        REPORT.personal.items[i].amtChanged = $('#personal #' + rowId + ' [name="amtChanged"]').val();
        REPORT.personal.items[i].cost = $('#personal #' + rowId + ' [name="cost"]').val();
    }

    // Vehicles
    rowIdSelected = $('#vehicles tr').last().attr('id');
    rowIdFirst= rowIdSelected.charAt(0);
    rowIdLast = rowIdSelected.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        var rowId = rowIdFirst + "-" + i;
        REPORT.vehicle.items[i].yearAcquired = $('#vehicles #' + rowId + ' [name="yearAcquired"]').val();
        REPORT.vehicle.items[i].modelYear = $('#vehicles #' + rowId + ' [name="modelYear"]').val();
        REPORT.vehicle.items[i].make = $('#vehicles #' + rowId + ' [name="make"]').val();
        REPORT.vehicle.items[i].model = $('#vehicles #' + rowId + ' [name="model"]').val();
        REPORT.vehicle.items[i].bodySize = $('#vehicles #' + rowId + ' [name="bodySize"]').val();
        REPORT.vehicle.items[i].titleNum = $('#vehicles #' + rowId + ' [name="titleNum"]').val();
        REPORT.vehicle.items[i].vehicleId = $('#vehicles #' + rowId + ' [name="vehicleId"]').val();
        REPORT.vehicle.items[i].group = $('#vehicles #' + rowId + ' [name="group"]').val();
        REPORT.vehicle.items[i].cost = $('#vehicles #' + rowId + ' [name="cost"]').val();
    }

    // Other & supplies
    rowIdSelected = $('#other-supplies tr').last().attr('id');
    rowIdFirst= rowIdSelected.charAt(0);
    rowIdLast = rowIdSelected.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        var rowId = rowIdFirst + "-" + i;
        REPORT.other.items[i].yearAcquired = $('#other-supplies #' + rowId + ' [name="yearAcquired"]').val();
        REPORT.other.items[i].itemDescription = $('#other-supplies #' + rowId + ' [name="itemDescription"]').val();
        REPORT.other.items[i].cost = $('#other-supplies #' + rowId + ' [name="cost"]').val();
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
