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
            console.log(REPORT.general.items[0].reportName);
            console.log(REPORT);
            break;
        case 'logNumber':
            REPORT.id = $(this).val();
            REPORT.general.items[0].logNumber = REPORT.id;
            console.log(REPORT.general.items[0].logNumber);
        case 'date':
            /* TODO: fix bug, doesn't save on blur until refocus -> blur */
            REPORT.general.items[0].date = $(this).val();
            console.log(REPORT.general.items[0].date);
        default:
            console.log("Got to default...");
    }

    //saveInput(REPORT, 0, reportName, $(this).text());
});
