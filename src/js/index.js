<<<<<<< HEAD
/* General Function - Declare/Define Section object and its Item array */
function GeneralSection()  
{
    this.items = [];

    // Each section defines its own Item type.
    this.Item = function(reportName, logNumber, date, ownerName, businessAddress,
                contactName, contactPhoneNumber, contactAddress, businessCategory,
                businessType)
    {
            this.reportName = reportName;
            this.logNumber = logNumber;
            this.date = date;
            this.ownerName = ownerName;
            this.businessAddress = businessAddress;
            this.contactName = contactName;
            this.contactPhoneNumber = contactPhoneNumber;
            this.contactAddress = contactAddress;
            this.businessCategory = businessCategory;
            this.businessType = businessType;
    }

    this.addItem  = function(reportName, logNumber, date, ownerName, businessAddress,
                contactName, contactPhoneNumber, contactAddress, businessCategory,
                businessType)
    {
        if(this.items.length = 0)
        {
            /* if array is empty, create first item */
            this.items[0] = new this.Item(reportName, logNumber, date, ownerName, businessAddress,
                contactName, contactPhoneNumber, contactAddress, businessCategory,
                businessType);
        }
        else
        {
            /* push new items into the array */
            let item = new this.Item(reportName, logNumber, date, ownerName, businessAddress,
                contactName, contactPhoneNumber, contactAddress, businessCategory,
                businessType);
            this.items.push(item);
        }
    }
}
/* Personal Property Function */
function PersonalSection()
{
    this.items = [];

    // Each section defines its own Item type.
    this.Item = function(yearAcquired, itemDescription, group, statusP,
                amtChanged, cost)
    {
        this.yearAcquired = yearAcquired;
        this.itemDescription = itemDescription;
        this.group = group;
        this.statusP = statusP;
        this.amtChanged = amtChanged;
        this.cost = cost;
    }

    this.addItem = function(yearAcquired, itemDescription, group, changeStatus,
                amtChanged, cost)
    {
        if(this.items.length == 0)
        {
            /* if array is empty, create first item */
            items[0] = new this.Item(yearAcquired, itemDescription, group, changeStatus,
                amtChanged, cost);
        }
        else
        {
            /* push new items into the array */
            let item = new this.Item(yearAcquired, itemDescription, group, changeStatus,
                amtChanged, cost);
            this.items.push(item);
        }
    }
}
/* Vehicle Function */
function VehicleSection()
{
    this.items = [];

    // Each section defines its own Item type.
    this.Item = function(yearAcquired, modelYear, make, bodySize, titleNum,
                vehicle, group)
    {
        this.yearAcquired = yearAcquired;
        this.modelYear = modelYear;
        this.make = make;
        this.bodySize = bodySize;
        this.titleNum = titleNum;
        this.vehicle = vehicle;
        this.group = group;
    }

    this.addItems = function(yearAcquired, modelYear, make, bodySize, titleNum,
                vehicle, group)
    {
        if(this.items.length == 0)
        {
            items[0] = new this.Item(yearAcquired, modelYear, make, bodySize, titleNum,
                vehicle, group);
        }
        else
        {
            let item = new this.Item(yearAcquired, modelYear, make, bodySize, titleNum,
                vehicle, group);
            this.items.push(item);
        }
    }
}
/* Others & Supply Function */
function OtherSection()
{
    this.items = [];

    // Each section defines its own Item type.
    this.Item = function(yearAcquired, itemDescription, cost)
    {
        this.yearAcquired = yearAcquired;
        this.itemDescription = itemDescription;
        this.cost = cost;
    }

    this.addItem = function(yearAcquired, itemDescription, cost)
    {
        if(this.items.length == 0)
        {
            items[0] = new this.Item(yearAcquired, itemDescription, cost);
        }
        else
        {
            let item = new this.Item(yearAcquired, itemDescription, cost);
            this.items.push(item);
        }
    }
}
/* Affirmation Function */
function AffirmationSection()
{
    this.items = [];

    this.Item = function(signature)
    {
        this.signature = signature;
    }

    this.addItem = function(signature)
    {
        if(this.items.length == 0)
        {
            this.items[0] = new this.Item(signature);
        }
        else
        {
            let item = new this.Item(signature);
            this.items.push(item);
        }
    }
}

// Declare/Define Report object and its variales, methods.
function Report(name, id)
{
    this.reportName = name;
    this.id = id;

    // Initialize Report object with an array of section objects
    this.initReport = function() 
    {
        this.general = new GeneralSection(0);
        this.personal = new PersonalSection(1);
        this.vehicle = new VehicleSection(2);
        this.other = new OtherSection(3);
        this.affirmation = new AffirmationSection(4);
    }
=======
/* Function to create tables for each section */
function generalTable() {
  $('#general').append('<form></form>');
  $('#general form').append('<input type="text" name="reportName" placeholder="Report Name">');
  $('#general form').append('<div id="general-info" class="sub-section">');
  $('#general-info').append('<h2>General Info</h2>');
  $('#general-info').append('<input type="text" name="logNumber" placeholder="Log #">');
  $('#general-info').append('<input type="text" name="date" placeholder="Date">');
  $('#general-info').append('<input type="text" name="ownerName" placeholder="Owner Name">');
  $('#general-info').append('<textarea name="businessAddress" placeholder="Business Address"></textarea></div>');

  $('#general form').append('<div id="audit-contact" class="sub-section">');
  $('#audit-contact').append('<h2>Audit Contact</h2>');
  $('#audit-contact').append('<input type="text" name="contactName" placeholder="Contact Name">');
  $('#audit-contact').append('<input type="text" name="contactPhoneNumber" placeholder="Contact Phone #">');
  $('#audit-contact').append('<textarea name="contactAddress" placeholder="Contact Address"></textarea></div');


>>>>>>> b0b308359c06476a8ca983d4d9a67ef50afc3e60
}

$("#content-container").append(generalTable());
/*  $("#share").append('<form action="sharer.php" method="POST">');
   $("#share form").append('<div class="appm">Save this</div>');
   $("#share form").append('<input type="text" placeholder="Name" name="routename" id="rname"/>');
   $("#share form").append('<input type="text" placeholder="description" id="rdescription" name="routedescription" class="address"/>');
   $("#share form").append('<input type="text" placeholder="tags" id="tags" name="routetags"/>');
   $("#share form").append('<br><input type="submit" id="savebutton" value="*/
