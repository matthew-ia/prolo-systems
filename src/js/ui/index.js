/**
* Handles the creation of HTML elements, and managing them in the DOM
*/

function generateContainers() {
    $('#content-container').append('<div class="section" id="general"></div>');
    $('#content-container').append('<div class="section" id="personal"></div>');
    $('#content-container').append('<div class="section" id="vehicles"></div>');
    $('#content-container').append('<div class="section" id="other-supplies"></div>');
    $('#content-container').append('<div class="section" id="sectionC"></div>');
    $('#content-container').append('<div class="section" id="affirmation"></div>');
}

/* Function to create tables for each section */
function generalTable() {
  //form element
  $('#general').append('<form id="generalForm"></form>');
  $('#general form').append('<input type="text" name="reportName" placeholder="Report Name">');

  //creates General info section of general table
  $('#general form').append('<div id="general-info" class="sub-section"></div>');
  $('#general-info').append('<h2>General Info</h2>');
  $('#general-info').append('<input type="text" name="logNumber" placeholder="Log #">');
  $('#general-info').append('<input data-toggle="datepicker" type="text" name="date" placeholder="Date">');
  //\$('#general-info').append('<div id="date" data-toggle="datepicker"></div>');
  $('#general-info').append('<input type="text" name="ownerName" placeholder="Owner Name">');
  $('#general-info').append('<textarea name="businessAddress" placeholder="Business Address"></textarea>');

  //creates Audit contract section of general table
  $('#general form').append('<div id="audit-contact" class="sub-section"></div>');
  $('#audit-contact').append('<h2>Audit Contact</h2>');
  $('#audit-contact').append('<input type="text" name="contactName" placeholder="Contact Name">');
  $('#audit-contact').append('<input type="text" name="contactPhoneNumber" placeholder="Contact Phone #">');
  $('#audit-contact').append('<textarea name="contactAddress" placeholder="Contact Address"></textarea>');

  //creates classificaetion section of general table
  $('#general form').append('<div id="classification" class="sub-section"></div>');
  $('#classification').append('<h2>Classification</h2>');

  //creates select-container class
  $('#classification').append('<div class="select-container"></div>');
  $('.select-container:first-of-type').append('<select name="businessType">' +
                                '<option value="" disabled selected>Business Type</option>' +
                                '<option value="0">Corporation</option>' +
                                '<option value="1">Sole Proprietorship</option>' +
                                '<option value="2">Partnership</option>' +
                                '<option value="3">Unincorporated Association</option>' +
                                '<option value="4">Other</option>' +
                                '</select>');

  //creates select-container section of general table
  $('#classification').append('<div class="select-container"></div>');
  $('.select-container:nth-of-type(2)').append('<select name="businessCategory">' +
                                '<option value="" disabled selected>Business Category</option>' +
                                '<option value="0">Retail</option>' +
                                '<option value="1">Wholesale</option>' +
                                '<option value="2">Manufacturing</option>' +
                                '<option value="3">Service</option>' +
                                '<option value="4">Leasing/Rental</option>' +
                                '<option value="5">Farming</option>' +
                                '<option value="6">Other</option>' +
                                '</select>');
}

function personalPropertyTable() {
  $('#personal').append('<h2><span class="schedule">Schedule A</span>Personal Property</h2>');
  $('#personal').append('<form id="personalPropertyForm"></form>');
  $('#personal form').append('<table></table>')
  $('#personal table').append('<thead></thead>');
  $('#personal thead').append('<tr>' +
                              '<th>Year Acq.</th>' +
                              '<th>Item Description</th>' +
                              '<th>Group</th>' +
                              '<th>Status</th>' +
                              '<th>Amt. Changed</th>' +
                              '<th>Cost</th>' +
                              '</tr>');
  $('#personal table').append('<tbody></tbody>');
  $('#personal tbody').append('<tr id="1-0">' +
                              '<td><input type="text" name="yearAcquired" placeholder="2017"></td>' +
                              '<td><input type="text" name="itemDescription" placeholder="Item A"></td>' +
                              '<td>' +
                              '<select name="group">' +
                                '<option value="" disabled selected>Choose Group</option>' +
                                '<option value="0">Machinery &amp; Equp.</option>' +
                                '<option value="1">Office Furniture &amp; Fix.</option>' +
                                '<option value="2">Computer Equip.</option>' +
                                '<option value="3">Other &amp; Farm Equip.</option>' +
                                '<option value="4">Leadhold Improv.</option>' +
                                '<option value="5">Rental Equip.</option>' +
                                '<option value="6">Heavy Equip.</option>' +
                                '<option value="7">Signs &amp; Billboards</option>' +
                                '<option value="8">Misc</option>' +
                              '</select>' +
                            '</td>' +
                            '<td>' +
                              '<select name="status">' +
                                '<option value="" disabled selected>Select Status</option>' +
                                '<option value="0">Prior</option>' +
                                '<option value="1">Addition</option>' +
                                '<option value="2">Deletion</option>' +
                              '</select>' +
                            '</td>' +
                            '<td><input type="text" name="amtChanged" placeholder="-"></td>' +
                            '<td><input type="text" name="cost" placeholder="$0"></td>' +
                          '</tr>');
  $('#personal form').append('<div class="addRow"></div>');
  $('#personal .addRow').append('<button type="button">Add Row</button>');

}

function vehiclesTable()
{
  $('#vehicles').append('<h2><span class="schedule">Schedule B</span>Vehicles &amp; Equipment</h2>');
  $('#vehicles').append('<form id="vehiclesForm"></form>');
  $('#vehicles form').append('<table></table>');
  $('#vehicles table').append('<thead></thead>');
  $('#vehicles thead').append('<tr>' +
                              '<th>Year Acq.</th>' +
                              '<th>Model Year</th>' +
                              '<th>Make</th>' +
                              '<th>Model</th>' +
                              '<th>Body/Size</th>' +
                              '<th>Title #</th>' +
                              '<th>Vehicle ID #</th>' +
                              '<th>Group</th>' +
                              '<th>Cost</th>' +
                              '</tr>');
  $('#vehicles table').append('<tbody></tbody>');
  $('#vehicles tbody').append('<tr id="2-0">' +
                              '<td><input type="text" name="yearAcquired" placeholder="2017"></td>' +
                              '<td><input type="text" name="modelYear" placeholder="2000"></td>' +
                              '<td><input type="text" name="make" placeholder="Make name"></td>' +
                              '<td><input type="text" name="model" placeholder="Model Name"></td>' +
                              '<td><input type="text" name="bodySize" placeholder="Body type"></td>' +
                              '<td><input type="text" name="titleNum" placeholder="55555555555 AB"></td>' +
                              '<td><input type="text" name="vehicleId" placeholder="ABCDEFGHIJKLMNOPQ"></td>' +
                              '<td>' +
                              '<select name="group-vehicle">' +
                              '<option value="" disabled selected>Choose Group</option>' +
                              '<option value="1">Unreg. Motor Vehicle</option>' +
                              '<option value="2">Special Equip. Attach.</option>' +
                              '<option value="3">Aircraft</option>' +
                              '</select>' +
                              '</td>' +
                              '<td><input type="text" name="cost" placeholder="$0"></td>' +
                              '</tr>');

  $('#vehicles form').append('<div class="addRow"></div>');
  $('#vehicles .addRow').append('<button type="button">Add Row</button>');
}

function otherSuppliesTable(){
  $('#other-supplies').append('<h2><span class="schedule">Schedule B</span>Other &amp; Supplies</h2>');
  $('#other-supplies').append('<form id="otherSuppliesForm"></form>');
  $('#other-supplies form').append('<table></table>');
  $('#other-supplies table').append('<thead></thead>');
  $('#other-supplies thead').append('<tr>' +
                                    '<th>Year Acq.</th>' +
                                    '<th>Item(s) Description</th>' +
                                    '<th>Cost</th>' +
                                    '</tr>');
  $('#other-supplies table').append('<tbody></tbody>');
  $('#other-supplies tbody').append('<tr id="3-0">' +
                                    '<td><input type="text" name="yearAcquired" placeholder="2017"></td>' +
                                    '<td><input type="text" name="itemDescription" placeholder="Items A"></td>' +
                                    '<td><input type="text" name="cost" placeholder="$0"></td>' +
                                    '</tr>');
  $('#other-supplies form').append('<div class="addRow"></div>');
  $('#other-supplies .addRow').append('<button type="button">Add Row</button>');
}

function affirmationTable(){
  $('#affirmation').append('<h2>Affirmation</h2>');
  $('#affirmation').append('<form id="affirmationForm"></form>');
  $('#affirmation form').append('<table></table>');
  $('#affirmation table').append('<tr>' +
                                '<td><label>Signature<input type="text" name="signature" placeholder="Your Name"></label></td>' +
                                '</tr>');
  $('#affirmation').append('<button id="subBut">Submit</button>');
}

/* 12/6 edited */
function sectionCTable(){
  $('#sectionC').append('<h2><span class="schedule">Schedule C</span>Owned by Others</h2>');
  $('#sectionC').append('<form id="sectionCForm"></form>');
  $('#sectionC form').append('<table></table>');
  $('#sectionC table').append('<thead></thead>');
  $('#sectionC thead').append('<tr>' +
                                    '<th>Name & Address of Owner</th>' +
                                    '<th>Description of the Property</th>' +
                                    '<th>Lease&#35 or Account&#35</th>' +
                                    '<th>Monthly Payment</th>' +
                                    '<th>Cost New (Quoted)</th>' +
                                    '<th>Start &amp; End Lease Dates</th>' +
                                    '</tr>');
  $('#sectionC table').append('<tbody></tbody>');
  $('#sectionC tbody').append('<tr id="4-0">' +
                                    '<td><input type="text" name="nameOwner" placeholder="Name and Address"></td>' +
                                    '<td><input type="text" name="description" placeholder="Description"></td>' +
                                    '<td><input type="text" name="leaseNumber" placeholder="Lease &#35"></td>' +
                                    '<td><input type="text" name="monthlyPay" placeholder="Monthly Pay"></td>' +
                                    '<td><input type="text" name="costNew" placeholder="Cost New"></td>' +
                                    '<td><input type="text" name="startEndDates" placeholder="Start &amp; End Dates"></td>' +
                                    '</tr>');
  $('#sectionC form').append('<div class="addRow"></div>');
  $('#sectionC .addRow').append('<button type="button">Add Row</button>');
}

function generateReportList() {
    $('#content-container').append('<div class="section" id="report-list"></div>');
    $('#report-list').append('<h2>Your Reports</h2>');
    $('#report-list').append('<table></table>');
    displayReports();
}

function generateSidebar() {
    $('#content-container').append('<div id="sidebar"></div>');
    $('#sidebar').append('<ul></ul>');
    $('#sidebar ul').append('<li><a href="#general">General</a></li>');
    $('#sidebar ul').append('<li><a href="#personal">Personal</a></li>');
    $('#sidebar ul').append('<li><a href="#vehicles">Vehicles</a></li>');
    $('#sidebar ul').append('<li><a href="#other-supplies">Other & Supplies</a></li>');
    $('#sidebar ul').append('<li><a href="#affirmation">Affirmation</a></li>');
    $('#sidebar ul').append('<li><a href="#general">Back to top</a></li>');

}

function generateReportView() {
    generateSidebar();
    generateContainers();
    generalTable();
    personalPropertyTable();
    vehiclesTable();
    otherSuppliesTable();
    sectionCTable();
    affirmationTable();
}

function showReportList(show) {
    if (show) $('#report-list').show();
    else $('#report-list').hide();
}

function showReport(show) {
    if (show) {
        $('#sidebar').show();
        $('#general').show();
        $('#personal').show();
        $('#vehicles').show();
        $('#other-supplies').show();
        $('#sectionC').show()
        $('#affirmation').show();
    } else {
        $('#sidebar').hide();
        $('#general').hide();
        $('#personal').hide();
        $('#vehicles').hide();
        $('#other-supplies').hide();
        $('#sectionC').hide()
        $('#affirmation').hide();
    }
}

$(document).ready(function() {
    generateReportList();
    generateReportView();
    generatePopup();
    showReport(false);
    if (localStorage.getItem("reportList") != undefined ||
        localStorage.getItem("reportList") != "") {
            restore();
        }
    showReportList(true);
    displayReports();
});

$(window).bind("beforeunload", function() {
    store();
});
