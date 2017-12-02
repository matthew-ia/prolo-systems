
function store() {
    localStorage.setItem("reportList", JSON.stringify(REPORTLIST));
    console.log("Stored report list...\n");
}

// Function to restore a report to its blank form
function restore() {
    var JSONString = localStorage.getItem("reportList");
    var reportListTemp = JSON.parse(JSONString)
    var oldReportObj = undefined;
    var newReportObj = undefined;
    for (i = 0; i < reportListTemp.length; i++) {
        oldReportObj= reportListTemp[i];
        newReportObj = new Report();
        newReportObj.general.items = oldReportObj.general.items;
        newReportObj.personal.items = oldReportObj.personal.items;
        newReportObj.vehicle.items = oldReportObj.vehicle.items;
        newReportObj.other.items = oldReportObj.other.items;
        newReportObj.affirmation.items = oldReportObj.affirmation.items;
        REPORTLIST[i] = newReportObj;
    }
    console.log("Restored report list...\n");
}
