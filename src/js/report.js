/**
 * Handles the object definitions for Reports so we can store/save input data 
 */

/* General Function - Declare/Define Section object and its Item array */
function GeneralSection()
{
    this.items;

    // Each section defines its own Item type.
    function Item(reportName, LogNumber, date, ownerName, businessAddress,
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

    function addItem(reportName, LogNumber, date, ownerName, businessAddress,
                contactName, contactPhoneNumber, contactAddress, businessCategory,
                businessType)
    {
        if(items.length = 0)
        {
            /* if array is empty, create first item */
            items[0] = new Item(reportName, LogNumber, date, ownerName, businessAddress,
                contactName, contactPhoneNumber, contactAddress, businessCategory,
                businessType);
        }
        else
        {
            /* push new items into the array */
            let item = new Item(reportName, LogNumber, date, ownerName, businessAddress,
                contactName, contactPhoneNumber, contactAddress, businessCategory,
                businessType);
            items.push(item);
        }
    }
}
/* Personal Property Function */
function personalSection()
{
    this.items;

    // Each section defines its own Item type.
    function Item(yearAcquired, itemDescription, group, statusP,
                amtChanged, cost)
    {
        this.yearAcquired = yearAcquired;
        this.itemDescription = itemDescription;
        this.group = group;
        this.statusP = statusP;
        this.amtChanged = amtChanged;
        this.cost = cost;
    }

    function addItem(yearAcquired, itemDescription, group, changeStatus,
                amtChanged, cost)
    {
        if(items.length == 0)
        {
            /* if array is empty, create first item */
            items[0] = new Item(yearAcquired, itemDescription, group, changeStatus,
                amtChanged, cost);
        }
        else
        {
            /* push new items into the array */
            let item = new Item(yearAcquired, itemDescription, group, changeStatus,
                amtChanged, cost);
            items.push(item);
        }
    }
}
/* Vehicle Function */
function vehicleSection()
{
    this.items;

    // Each section defines its own Item type.
    function Item(yearAcquired, modelYear, make, bodySize, titleNum,
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

    function addItems(yearAcquired, modelYear, make, bodySize, titleNum,
                vehicle, group)
    {
        if(items.length == 0)
        {
            items[0] = new Item(yearAcquired, modelYear, make, bodySize, titleNum,
                vehicle, group);
        }
        else
        {
            let item = new Item(yearAcquired, modelYear, make, bodySize, titleNum,
                vehicle, group);
            items.push(item);
        }
    }
}
/* Others & Supply Function */
function otherSection()
{
    this.items;

    // Each section defines its own Item type.
    function Item(yearAcquired, itemDescription, cost)
    {
        this.yearAcquired = yearAcquired;
        this.itemDescription = itemDescription;
        this.cost = cost;
    }

    function addItem(yearAcquired, itemDescription, cost)
    {
        if(items.length == 0)
        {
            items[0] = new Item(yearAcquired, itemDescription, cost);
        }
        else
        {
            let item = new Item(yearAcquired, itemDescription, cost);
            items.push(item);
        }
    }
}
/* Affirmation Function */
function affirmationSection()
{
    this.items;

    function Item(signature)
    {
        this.signature = signature;
    }

    function addItem(signature)
    {
        if(items.length == 0)
        {
            items[0] = new Item(signature);
        }
        else
        {
            let item = new Item(signature);
            items.push(item);
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
        this.general = new generalSection(0);
        this.personal = new personalSection(1);
        this.vehicle = new vehicleSection(2);
        this.other = new otherSection(3);
        this.affirmation = new affirmationSection(4);
    }
}
