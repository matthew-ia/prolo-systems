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

var REPORT = undefined;

function setReport(report) {
    REPORT = report;
}

function getReport() {
    return REPORT;
}


// Creating Report
console.log("Creating report...\n");
var report = new Report("My Report");
report.initReport();

// This would be created from user input,
// but for this test I'm manually creating it here
report.general.addItem("My Report 1", 1, "01/01/2017", "Jane Doe", "123 Street",
    "John Doe", "555-555-1234", "456 Drive", 1, 2);

// Storing Report in localStorage
console.log("Storing report...\n");
localStorage.setItem('Report1', JSON.stringify(report));

console.log("Restoring report...\n");
var JSONstring = localStorage.getItem('Report1');
var oldReport = JSON.parse(JSONstring);
var newReport = new Report();
newReport.initReport();
newReport.general.items = oldReport.general.items;
newReport.personal.items = oldReport.personal.items;
console.log(newReport.personal.items);
// initialize other section's items
// ...

// If you try the following code, you'll see in the console that addItem() doesn't exist
// in the context of the OLD object (that had its data members restored via string):

// oldReport.general.addItems("My Report 2", 2, "02/02/2017", "Jimmy John", "ABC Street",
//      "Nancy John", "555-555-4567", "XYZ Drive", 2, 3);


// Next we ddd new Item to general section of NEW object
// We see that the addItem() function and Item() constructor is intact
// because we created a new object instance of a report.

newReport.general.addItem("My Report 2", 2, "02/02/2017", "Jimmy John", "ABC Street",
    "Nancy John", "555-555-4567", "XYZ Drive", 2, 3);

console.log("Printing restored contents...\n");

// This is just for testing, we want to print all the data member values
// from both the Item we restored, and the new one we added

// TODO: Can we reference a key less verbosely than this without changing the object?
// That would be helpful when we're setting these values from user input,
// but isn't necessarily important here
/*for (i = 0; i < newReport.general.items.length; i++) {
    console.log(newReport.general.items[i].reportName + " " +
                newReport.general.items[i].logNumber + " " +
                newReport.general.items[i].date + " " +
                newReport.general.items[i].ownerName + " " +
                newReport.general.items[i].businessAddress + " " +
                newReport.general.items[i].contactName + " " +
                newReport.general.items[i].contactPhoneNumber + " " +
                newReport.general.items[i].contactAddress + " " +
                newReport.general.items[i].businessCategory + " " +
                newReport.general.items[i].businessType +
                "\n");
}*/

setReport(newReport);
