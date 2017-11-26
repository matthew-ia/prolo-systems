/**
 * Handles the creation of HTML elements, and managing them in the DOM
 */

/* Function to create tables for each section */
function generalTable() {
  $('#general').append('<form></form>');
  $('#general form').append('<input type="text" name="reportName" placeholder="Report Name">');
  $('#general form').append('<div id="general-info" class="sub-section">');
  $('#general-info').append('<h2>General Info</h2>');
  $('#general-info').append('<input type="text" name="logNumber" placeholder="Log #">');
  $('#general-info').append('<input data-toggle="datepicker" type="text" name="date" placeholder="Date">');
  //$('#general-info').append('<div id="date" data-toggle="datepicker"></div>');
  $('#general-info').append('<input type="text" name="ownerName" placeholder="Owner Name">');
  $('#general-info').append('<textarea name="businessAddress" placeholder="Business Address"></textarea></div>');

  $('#general form').append('<div id="audit-contact" class="sub-section">');
  $('#audit-contact').append('<h2>Audit Contact</h2>');
  $('#audit-contact').append('<input type="text" name="contactName" placeholder="Contact Name">');
  $('#audit-contact').append('<input type="text" name="contactPhoneNumber" placeholder="Contact Phone #">');
  $('#audit-contact').append('<textarea name="contactAddress" placeholder="Contact Address"></textarea></div');
}

$("#content-container").append(generalTable());
/*  $("#share").append('<form action="sharer.php" method="POST">');
   $("#share form").append('<div class="appm">Save this</div>');
   $("#share form").append('<input type="text" placeholder="Name" name="routename" id="rname"/>');
   $("#share form").append('<input type="text" placeholder="description" id="rdescription" name="routedescription" class="address"/>');
   $("#share form").append('<input type="text" placeholder="tags" id="tags" name="routetags"/>');
   $("#share form").append('<br><input type="submit" id="savebutton" value="*/




/* DATE PICKER */
$('[data-toggle="datepicker"]').datepicker();
