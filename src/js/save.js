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

//yearAcquired, itemDescription, group, statusP,
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
    if (rowId == undefined) {console.log("Invalid rowId...exiting."); return;}
    switch($(this).attr('name')) {
        case 'yearAcquired':
            console.log(REPORT.personal);
            REPORT.personal.items[rowId].yearAcquired = $(this).val();
            console.log($(this).val());
            break;
    }
});

// TODO: Fix bug, still doesn't work
$('.datepicker-panel').on('hide.datepicker', function () {
    console.log("Datepicker hide");
});

$('.datepicker-dropdown').blur(function() {
    console.log("Ayo datepicker onblur fired!");
    console.log($(this).val());

});
