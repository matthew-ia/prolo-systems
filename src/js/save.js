/**
 * Handles saving input to the report object
 */

//reportName logNumber date ownerName businessAddress
//            contactName contactPhoneNumber contactAddress businessCategory
//            businessType

 report.general.items[0].reportName = $('[name="reportName"]').text();

 function saveInput(report, sectionId, dataName, data) {
     report.general.items[0].reportName = $('[name="reportName"]').text();
 }

$('#general input, #general select, #general textarea').blur(function() {
    switch($(this).attr('name')) {
        case 'reportName':
            REPORT.reportName = $(this).val();
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
    switch($(this).attr('name')) {
        case 'yearAcquired':
            REPORT.personal.items[0].yearAcquired = $(this).val();
            break;
        case 'logNumber':


// TODO: Fix bug, still doesn't work
$('.datepicker-panel').on('hide.datepicker', function () {
    console.log("Datepicker hide");
});

$('.datepicker-dropdown').blur(function() {
    console.log("Ayo datepicker onblur fired!");
    console.log($(this).val());

});
