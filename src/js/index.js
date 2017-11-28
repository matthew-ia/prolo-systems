/**
* Handles the creation of HTML elements, and managing them in the DOM
*/

/* Function to create tables for each section */
function generalTable() {
  //form element
  $('#general').append('<form></form>');
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
                                '<option value="1">Type 1</option>' +
                                '<option value="2">Type 2</option>' +
                                '<option value="3">Type 3</option>' +
                                '</select>');
                                console.log("business type made");

  //creates select-container section of general table
  $('#classification').append('<div class="select-container"></div>');
  $('.select-container:nth-of-type(2)').append('<select name="businessCategory">' +
                                '<option value="" disabled selected>Business Category</option>' +
                                '<option value="1">Category 1</option>' +
                                '<option value="2">Category 2</option>' +
                                '<option value="3">Category 3</option>' +
                                '</select>');
                                console.log("business category made");
}

function personalPropertyTable() {
  $('#personal').append('<h2>Personal Property</h2>');
  $('#personal').append('<form></form>');
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
  $('#personal tbody').append('<tr>' +
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
                                '<option value="0" selected>Prior</option>' +
                                '<option value="1">Addition</option>' +
                                '<option value="2">Deletion</option>' +
                              '</select>' +
                            '</td>' +
                            '<td><input type="text" name="amtChanged" placeholder="-"></td>' +
                            '<td><input type="text" name="cost" placeholder="$0"></td>' +
                          '</tr>');
  $('#personal form').append('<div class="addRow"></div>');
  $('#personal .addRow').append('<button>Add Row</button>');

}

function vehiclesTable() {
  $('#vehicles').append('<h2>Vehicles</h2>');
  $('#vehicles').append('<form></form>');
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
  $('#vehicles tbody').append('<tr>' +
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
  $('#vehicles .addRow').append('<button>Add Row</button>');
}

function otherSuppliesTable(){
  $('#other-supplies').append('<h2>Other &amp; Supplies</h2>');
  $('#other-supplies').append('<form></form>');
  $('#other-supplies form').append('<table></table>');
  $('#other-supplies table').append('<thead></thead>');
  $('#other-supplies thead').append('<tr>' +
                                    '<th>Year Acq.</th>' +
                                    '<th>Item(s) Description</th>' +
                                    '<th>Cost</th>' +
                                    '</tr>');
  $('#other-supplies table').append('<tbody></tbody>');
  $('#other-supplies tbody').append('<tr>' +
                                    '<td><input type="text" name="yearAcquired" placeholder="2017"></td>' +
                                    '<td><input type="text" name="itemDescription" placeholder="Items A"></td>' +
                                    '<td><input type="text" name="cost" placeholder="$0"></td>' +
                                    '</tr>');
  $('#other-supplies form').append('<div class="addRow"></div>');
  $('#other-supplies .addRow').append('<button>Add Row</button>');
}

function affirmationTable(){
  $('#affirmation').append('<h2>Affirmation</h2>');
  $('#affirmation').append('<form></form>');
  $('#affirmation form').append('<table></table>');
  $('#affirmation table').append('<tr>' +
                                '<td><label>Signature<input type="text" name="signature" placeholder="Your Name"></label></td>' +
                                '</tr>');
  $('#affirmation').append('<button>Submit</button>');
}

generalTable();
personalPropertyTable();
vehiclesTable();
otherSuppliesTable();
affirmationTable();


/* DATE PICKER */
$('[data-toggle="datepicker"]').datepicker();

/* SIDEBAR JUMP MENU */
var offset = -160;
var scrollTime = 500;

$('a[href^="#"]').click(function() {
    $("html, body").animate({
        scrollTop: $( $(this).attr("href") ).offset().top + offset
    }, scrollTime);
});
