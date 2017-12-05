
function load(reportName, isCopy)
{
    // Set current report
    for(i = 0; i < REPORTLIST.length; i++)
    {
        if(REPORTLIST[i].reportName === reportName)
        {
            setReport(REPORTLIST[i]);
            console.log("Loading... " + REPORTLIST[i].reportName);
        }

        else {
            setReport(REPORTLIST[REPORTLIST.length - 1]);
        }
    }

    if (isCopy) {
        loadCopy();
    }

    // Save all inputs/selects/textareas

    // For the sections with multiple items
    var rowIdLast = 0;

    // General
    $('#general [name="reportName"]').val(REPORT.general.items[0].reportName);
    $('#general [name="logNumber"]').val(REPORT.general.items[0].logNumber);
    $('#general [name="ownerName"]').val(REPORT.general.items[0].ownerName);
    $('#general [name="businessAddress"]').val(REPORT.general.items[0].businessAddress);
    $('#general [name="contactName"]').val(REPORT.general.items[0].contactName);
    $('#general [name="contactPhoneNumber"]').val(REPORT.general.items[0].contactPhoneNumber);
    $('#general [name="contactAddress"]').val(REPORT.general.items[0].contactAddress);
    $('#general [name="businessType"]').val(REPORT.general.items[0].businessType);
    $('#general [name="businessCategory"]').val(REPORT.general.items[0].businessCategory);

    // Personal Property
    rowIdLast = $('#personal tr').last().attr('id');
    rowIdLast = rowIdLast.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        $('#personal [name="yearAcquired"]').val(REPORT.personal.items[i].yearAcquired);
        $('#personal [name="itemDescription"]').val(REPORT.personal.items[i].itemDescription);
        $('#personal [name="group"]').val(REPORT.personal.items[i].group);
        $('#personal [name="status"]').val(REPORT.personal.items[i].status);
        $('#personal [name="amtChanged"]').val(REPORT.personal.items[i].amtChanged);
        $('#personal [name="cost"]').val(REPORT.personal.items[i].cost);
        if (isCopy) {

        }
    }

    // Vehicles
    rowIdLast = $('#vehicles tr').last().attr('id');
    rowIdLast = rowIdLast.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        $('#vehicles [name="yearAcquired"]').val(REPORT.vehicle.items[i].yearAcquired);
        $('#vehicles [name="modelYear"]').val(REPORT.vehicle.items[i].modelYear);
        $('#vehicles [name="make"]').val(REPORT.vehicle.items[i].make);
        $('#vehicles [name="model"]').val(REPORT.vehicle.items[i].model);
        $('#vehicles [name="bodySize"]').val(REPORT.vehicle.items[i].bodySize);
        $('#vehicles [name="titleNum"]').val(REPORT.vehicle.items[i].titleNum);
        $('#vehicles [name="vehicleId"]').val(REPORT.vehicle.items[i].vehicleId);
        $('#vehicles [name="group"]').val(REPORT.vehicle.items[i].group);
        $('#vehicles [name="cost"]').val(REPORT.vehicle.items[i].cost);
    }

    // Other & supplies
    rowIdLast = $('#other-supplies tr').last().attr('id');
    rowIdLast = rowIdLast.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        $('#other-supplies [name="yearAcquired"]').val(REPORT.other.items[i].yearAcquired);
        $('#other-supplies [name="itemDescription"]').val(REPORT.other.items[i].itemDescription);
        $('#other-supplies [name="cost"]').val(REPORT.other.items[i].cost);
    }

    // Affirmation
    $('[name="signature"]').val(REPORT.other.items[0].signature);
}

function updateState() {
    // 0 = Prior
    // 1 = Addition
    // 2 = Deletion

    // Set status to prior
    var oldStatus = $('#personal [name="status"]').val();
    REPORT.personal.items[i].status = 0;
    $('#personal [name="status"]').val(REPORT.personal.items[i].status);

    // Update Cost
    // TODO: flip this so it uses object data members instead of DOM elements
    // to do make changes. Should change model, then send changes to view.
    var newCost = 0;
    var amtChanged = $('#personal [name="amtChanged"]').val();
    if (oldStatus === 2) amtChanged *= -1; // make it negative

    newCost = $('#personal [name="cost"]').val()
            + $('#personal [name="amtChanged"]').val();
    $('#personal [name="cost"]').val(newCost)
    $('#personal [name="amtChanged"]').val(0);

    $('#personal [name="amtChanged"]').val(REPORT.personal.items[i].amtChanged);
    $('#personal [name="cost"]').val(REPORT.personal.items[i].cost);
}
