$('[name="reportName"]').text() = report.general.items[0].reportName;

function loadInput(report, sectionId, dataName, data) {
  $('[name="reportName"]').text() = report.general.items[0].reportName;
}
function load(REPORT)
{
    for(i = 0; i < reportList.length; i++)
    {
        if(reportList[i].reportName == REPORT)
        {
            REPORT = reportList[i];
        }
    }
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

    /* Person Section Loader */
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
            case 'cost'
                $(this).val() = REPORT.personal.items[rowId].cost;
            break;
            }
            }
    }

    /* Vehicles Section Loader */
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
            }
    }


    /* Other & Supplies Section Loader */
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
    }

    $('#affirmation input, #affirmation select, #general textarea').blur(function()
            {
            switch($(this).attr('name'))
            {
            case 'signature':
            $(this).val() = REPORT.affirmation.items[0];
            break;
            }
            });
}
