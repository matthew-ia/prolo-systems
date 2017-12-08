
function load(reportName, isCopy)
{
    // Set current report
    var reportIndex = -1;
    for(i = 0; i < REPORTLIST.length; i++)
    {
        if(REPORTLIST[i].reportName === reportName)
        {
            reportIndex = i;
            break;
        }
    }

    //if (reportIndex !== -1) {
    if (reportIndex === -1) reportIndex = REPORTLIST.length - 1;
    setReport(REPORTLIST[reportIndex]);
    console.log("Loading... " + REPORTLIST[reportIndex].reportName);
    //console.log(REPORT);
    //} else {
    //    setReport(REPORTLIST[REPORTLIST.length - 1]);
    //    console.log("Loadingb... " + REPORT.reportName + " from " + reportName);
    //}

    // Load all inputs/selects/textareas

    // For the sections with multiple items
    var rowIdLast = 0;

    // General
    //REPORT.general.items[0].reportName = REPORT.reportName;
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
    var rowIdSelected = $('#personal tr').last().attr('id');
    var rowIdFirst= rowIdSelected.charAt(0);
    var rowIdLast = rowIdSelected.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        var rowId = rowIdFirst + "-" + i;
        if (isCopy) updateState(i);
        //console.log("on iteration " + i);
        $('#personal #' + rowId + ' [name="yearAcquired"]').val(REPORT.personal.items[i].yearAcquired);
        $('#personal #' + rowId + ' [name="itemDescription"]').val(REPORT.personal.items[i].itemDescription);
        $('#personal #' + rowId + ' [name="group"]').val(REPORT.personal.items[i].group);
        $('#personal #' + rowId + ' [name="status"]').val(REPORT.personal.items[i].status);
        $('#personal #' + rowId + ' [name="amtChanged"]').val(REPORT.personal.items[i].amtChanged);
        $('#personal #' + rowId + ' [name="cost"]').val(REPORT.personal.items[i].cost);
        //console.log("Current row id: " + rowId);
        //console.log("=== itemDesc: " + REPORT.personal.items[i].itemDescription);
    }

    // Vehicles
    rowIdSelected = $('#vehicles tr').last().attr('id');
    rowIdFirst= rowIdSelected.charAt(0);
    rowIdLast = rowIdSelected.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        var rowId = rowIdFirst + "-" + i;
        //console.log("on iteration " + i);
        $('#vehicles #' + rowId + ' [name="yearAcquired"]').val(REPORT.vehicle.items[i].yearAcquired);
        $('#vehicles #' + rowId + ' [name="modelYear"]').val(REPORT.vehicle.items[i].modelYear);
        $('#vehicles #' + rowId + ' [name="make"]').val(REPORT.vehicle.items[i].make);
        $('#vehicles #' + rowId + ' [name="model"]').val(REPORT.vehicle.items[i].model);
        $('#vehicles #' + rowId + ' [name="bodySize"]').val(REPORT.vehicle.items[i].bodySize);
        $('#vehicles #' + rowId + ' [name="titleNum"]').val(REPORT.vehicle.items[i].titleNum);
        $('#vehicles #' + rowId + ' [name="vehicleId"]').val(REPORT.vehicle.items[i].vehicleId);
        $('#vehicles #' + rowId + ' [name="group"]').val(REPORT.vehicle.items[i].group);
        $('#vehicles #' + rowId + ' [name="cost"]').val(REPORT.vehicle.items[i].cost);
    }

    // Other & supplies
    rowIdSelected = $('#other-supplies tr').last().attr('id');
    rowIdFirst= rowIdSelected.charAt(0);
    rowIdLast = rowIdSelected.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        var rowId = rowIdFirst + "-" + i;
        //console.log("on iteration " + i);
        $('#other-supplies #' + rowId + ' [name="yearAcquired"]').val(REPORT.other.items[i].yearAcquired);
        $('#other-supplies #' + rowId + ' [name="itemDescription"]').val(REPORT.other.items[i].itemDescription);
        $('#other-supplies #' + rowId + ' [name="cost"]').val(REPORT.other.items[i].cost);
    }


    // Section C
    rowIdSelected = $('#sectionC tr').last().attr('id');
    rowIdFirst= rowIdSelected.charAt(0);
    rowIdLast = rowIdSelected.split("-").pop();
    for (i = 0; i <= rowIdLast; i++) {
        var rowId = rowIdFirst + "-" + i;
        console.log("on iteration " + i);
        console.log("nameOwner: " + REPORT.sectionc.items[i].nameOwner);
        $('#sectionC #' + rowId + ' [name="nameOwner"]').val(REPORT.sectionc.items[i].nameOwner);
        $('#sectionC #' + rowId + ' [name="description"]').val(REPORT.sectionc.items[i].description);
        $('#sectionC #' + rowId + ' [name="leaseNumber"]').val(REPORT.sectionc.items[i].leaseNumber);
        $('#sectionC #' + rowId + ' [name="monthlyPay"]').val(REPORT.sectionc.items[i].monthlyPay);
        $('#sectionC #' + rowId + ' [name="costNew"]').val(REPORT.sectionc.items[i].costNew);
        $('#sectionC #' + rowId + ' [name="startEndDates"]').val(REPORT.sectionc.items[i].startEndDates);
    }

    // Affirmation
    $('[name="signature"]').val(REPORT.other.items[0].signature);
}

function updateState(rowIndex) {

    // 0 = Prior
    // 1 = Addition
    // 2 = Deletion
    // Set status to prior
    var oldStatus = $('#personal [name="status"]').val();
    REPORT.personal.items[i].status = 0;
    console.log("old status: " + oldStatus);
    //Update Cost
    var newCost = 0;
    var oldCost = REPORT.personal.items[rowIndex].cost;
    var amtChanged = REPORT.personal.items[rowIndex].amtChanged;
    if (oldStatus == 2) amtChanged *= -1; // make it negative

    if (oldStatus == 0 || oldStatus == null) newCost = oldCost;
    else newCost = oldCost + amtChanged;
    //console.log("newCost: " + newCost + " : " + oldCost);
    REPORT.personal.items[rowIndex].cost = newCost;
    REPORT.personal.items[rowIndex].amtChanged = "";
    //console.log("Update called on ");
    //console.log(REPORT);

}
