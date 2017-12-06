/**
 * Handles the object definitions for Reports so we can store/save input data
 */

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
         if(this.items.length === 0)
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
         this.status = status;
         this.amtChanged = amtChanged;
         this.cost = cost;
     }

     this.addItem = function(yearAcquired, itemDescription, group, changeStatus,
                 amtChanged, cost)
     {
         if(this.items.length === 0)
         {
             /* if array is empty, create first item */
             this.items[0] = new this.Item(yearAcquired, itemDescription, group, changeStatus,
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
     this.Item = function(yearAcquired, modelYear, make, model, bodySize, titleNum,
        vehicleId, group, cost)
     {
         this.yearAcquired = yearAcquired;
         this.modelYear = modelYear;
         this.make = make;
         this.make = model;
         this.bodySize = bodySize;
         this.titleNum = titleNum;
         this.vehicleId = vehicleId;
         this.group = group;
         this.cost = cost;
     }

     this.addItem = function(yearAcquired, modelYear, make, model, bodySize, titleNum,
        vehicleId, group, cost)
     {
         if(this.items.length === 0)
         {
             this.items[0] = new this.Item(yearAcquired, modelYear, make, model, bodySize, titleNum,
                vehicleId, group, cost);
         }
         else
         {
             let item = new this.Item(yearAcquired, modelYear, make, model, bodySize, titleNum,
                vehicleId, group, cost);
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
         if(this.items.length === 0)
         {
             this.items[0] = new this.Item(yearAcquired, itemDescription, cost);
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
         if(this.items.length === 0)
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


/* Section C Prop in your Possesion on Jan 1.... */
 function SectionC()
 {
     this.items = [];

     this.Item = function(nameOwner, description, leaseNumber, monthlyPay, costNew, startEndDates)
     {
         this.nameOwner = nameOwner;
         this.description = description;
         this.leaseNumber = leaseNumner;
         this.monthlyPay = monthlyPay;
         this.costNew = costNew;
         this.startEndDates = startEndDates;
     }

     this.addItem = function(nameOwner, description, leaseNumber, monthlyPay, costNew, startEndDates)
     {
         if(this.items.length == 0)
         {
             this.items[0] = new this.Item(nameOwner, description, leaseNumber, monthlyPay, costNew, startEndDates);
         }
         else
         {
             let item = new this.Item(nameOwner, description, leaseNumber, monthlyPay, costNew, startEndDates);
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
         // Initialize all sections with respective object constructors
         this.general = new GeneralSection();
         this.personal = new PersonalSection();
         this.vehicle = new VehicleSection();
         this.other = new OtherSection();
         this.affirmation = new AffirmationSection();
         this.sectionc = new SectionC();

         // Initialize all sections to have one Item
         this.general.addItem();
         this.personal.addItem();
         this.vehicle.addItem();
         this.other.addItem();
         this.affirmation.addItem();
         this.sectionc.addItem();

         // Transfer reportName and id down to general section
         this.general.items[0].reportName = this.reportName;
         this.general.items[0].logNumber = this.id;
     }
 }
