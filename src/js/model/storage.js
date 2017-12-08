
function store() {
    localStorage.setItem("reportList", JSON.stringify(REPORTLIST));
    console.log("Stored report list...");
}

// Function to restore a report to its blank form
function restore() {
    var JSONString = localStorage.getItem("reportList");
    var reportListTemp = JSON.parse(JSONString)
    var oldReportObj;
    var newReportObj;

    for (i = 0; i < reportListTemp.length; i++) {
        oldReportObj = reportListTemp[i];
        newReportObj = new Report();
        newReportObj.initReport();
        newReportObj.reportName = oldReportObj.reportName;
        newReportObj.general.items = oldReportObj.general.items;
        newReportObj.personal.items = oldReportObj.personal.items;
        newReportObj.vehicle.items = oldReportObj.vehicle.items;
        newReportObj.other.items = oldReportObj.other.items;
        newReportObj.sectionc.items = oldReportObj.sectionc.items;
        newReportObj.affirmation.items = oldReportObj.affirmation.items;
        REPORTLIST[i] = newReportObj;
    }
    console.log("Restored report list...\n");
    console.log(REPORTLIST);
}
