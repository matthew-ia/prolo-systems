/**
 * Handles the Store and Restore of Reports
 */


// NOTE: console logs are good for testing, but not necessarily required. I say
// we keep them until final version so we can keep an eye on stuff
// while debugging easier

// NOTE: The storing and restoring should be in functions that look something like:
// function store(currentObject) {...}
// function restore(oldObject, newObject) {...}
//
// Think about whether or not we need these exact parameters, this is just what
// I'm thinking at the moment.

/* GLOBALS, GETTER, SETTER */
// We're gonna need these to keep track of what the current report is
// in order to save inputs to the correct report
var REPORTLIST = [];
var REPORT = undefined;

// Function to set a report to a report list object
function setReport(report) {
    REPORT = report;
}

// Function to retrieve a past report
function getReport() {
    return REPORT;
}

// Function to add a report to the reportlist array
function addReport(isCopy) {
    var report;
    report = new Report("");
    report.initReport();
    if (isCopy) {
        report = copyReport(REPORT);
        console.log("create new from old");
        console.log(report);
    }

    REPORTLIST.push(report);
    setReport(REPORTLIST[REPORTLIST.length - 1]);
}

function copyReport(oldReport) {
    var copy = JSON.parse(JSON.stringify(oldReport));
    var newReport = new Report();
    newReport.initReport();
    
    newReport.general.items = copy.general.items;
    newReport.personal.items = copy.personal.items;
    newReport.vehicle.items = copy.vehicle.items;
    newReport.other.items = copy.other.items;
    newReport.affirmation.items = copy.affirmation.items;

    var name = copy.reportName + " copy";
    newReport.reportName = name;
    newReport.general.items[0].reportName = name;

    return newReport;
}

//TODO: Implement a remove report function
function deleteReport(reportName) {
    for (i = 0; i < REPORTLIST.length; i++) {
        if (REPORTLIST[i].reportName === reportName) {
            // Shift report list to overwrite report to delete
            REPORTLIST.splice(i, 1);
            break;
        }
    }
}

//TODO: Implement a remove row function
/* Function to remove a row from a report
function removeRow(name, id) {
}*/



//TODO: FOR TESTING ONLY; REMOVE THIS!
//addReport("test");
//setReport(REPORTLIST[0]);
