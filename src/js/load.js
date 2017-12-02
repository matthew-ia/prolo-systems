
function load(reportName)
{

    // Set current report
    for(i = 0; i < REPORTLIST.length; i++)
    {
        if(REPORTLIST[i].reportName === reportName)
        {
            setReport(REPORTLIST[i]);
            console.log("Loading... " + REPORTLIST[i].reportName);
            console.log(REPORTLIST[i]);
        }

        else if (REPORTLIST[i].reportName === undefined) {
            setReport(REPORTLIST[REPORTLIST.length - 1]);
        }
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

    /**
    $('#general input, #general select, #general textarea').blur(function()
        {
        switch($(this).attr('name'))
        {
            case 'reportName':
                $(this).val() = REPORT.reportName;
                REPORT.reportName = REPORT.general.items[0].reportName;
                break;
            case 'logNumber':
                $(this).val();
                REPORT.id = REPORT.general.items[0].logNumber;
                break;
            case 'ownerName':
                $(this).val() = REPORT.general.items[0].ownerName;
                break;
            case 'businessAddress':
                $(this).val() = REPORT.general.items[0].businessAddress;
                break;
            case 'contactName':
                $(this).val() = REPORT.general.items[0].contactName;
                break;
            case 'businessCategory':
                $(this).val() = REPORT.general.items[0].businessCategory;
                break;
            default:
                console.log("Got to default...");
        }
    });


    $('#personal input, #personal select').blur(function() {
        let parents = $(this).parents();
        var rowId = undefined;
        for (i = 0; i < parents.length; i++)
        {
            if($(parents[i]).is('tr'))
            {
                rowId = $(parents[i]).attr('id');
                rowId = rowId.split("-").pop();
                console.log(rowId);
            }
        }
        if(rowId == undefined) {console.log("Invalid rowId...exiting."); return;}
        switch($(this).attr('name')) {
            case 'yearAcquired':
                $(this).val() = REPORT.personal.items[rowId].yearAcquired;
                break;
            case 'itemDescription':
                $(this).val() = REPORT.personal.items[rowId].itemDescription;
                break;
            case 'group':
                $(this).val() = REPORT.personal.items[rowId].group;
                break;
            case 'status':
                $(this).val() = REPORT.personal.items[rowId].statusP;
                break;
            case 'amtChanged':
                $(this).val() = REPORT.personal.items[rowId].amtChanged;
                break;
            case 'cost':
                $(this).val() = REPORT.personal.items[rowId].cost;
            break;
        }
    });


    $('#vehicle input, #vehicle select').blur(function() {
        let parents = $(this).parents();
        var rowId = undefined;
        for( i = 0; i < parents.length; i++)
        {
            if($(parents[i]).is('tr'))
            {
                rowId = $(parents[i]).attr('id');
                rowId = rowId.split("-").pop();
                console.log(rowId);
            }
        }
        if(rowId == undefined) {console.log("Invalid rowId...exiting."); return;}
        switch($(this).attr('name'))
        {
            case 'yearAcquired':
                $(this).val() = REPORT.vehicle.items[rowId].yearAcquired;
                break;
            case 'modelYear':
                $(this).val() = REPORT.vehicle.items[rowId].modelYear;
                break;
            case 'make':
                $(this).val() = REPORT.vehicle.items[rowId].make;
                break;
            case 'model':
                $(this).val() = REPORT.vehicle.items[rowId].model;
                break;
            case 'bodySize':
                $(this).val() = REPORT.vehicle.items[rowId].bodySize;
                break;
            case 'titleNum':
                $(this).val() = REPORT.vehicle.items[rowId].titleNum;
                break;
            case 'vehicleId':
                $(this).val() = REPORT.vehicle.items[rowId].vehicleId;
                break;
        }
    });

    $('#other input, #other select').blur(function() {
        let parents = $(this).parents();
        var rowId = undefined;
        for( i = 0; i < parents.length; i++)
        {
            if($(parents[i]).is('tr'))
            {
                rowId = $(parents[i]).attr('id');
                rowId = rowId.split("-").pop();
                console.log(rowId);
            }
        }
        if(rowId == undefined) {console.log("Invalid rowId...exiting."); return;}
        switch($(this).attr('name'))
        {
            case 'yearAcquired':
                $(this).val() = REPORT.other.items[rowId].yearAcquired;
                break;
            case 'itemDescription':
                $(this).val() = REPORT.other.items[rowId].itemDescription;
                break;
            case 'cost':
                $(this).val() = REPORT.other.items[rowId].cost;
                break;
        }
    });

    $('#affirmation input, #affirmation select, #general textarea').blur(function()
        {
        switch($(this).attr('name'))
        {
        case 'signature':
            $(this).val() = REPORT.affirmation.items[0];
            break;
        }
    });
    */
}
