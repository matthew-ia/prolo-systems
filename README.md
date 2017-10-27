# ProLo Systems – Property Management Tool
A prototype of a business management tool to help keep track of property declarations for taxes.  

*Created for CS 3440 – Client Side Web Programming, [Marathon Assignment](https://asulearn.appstate.edu/pluginfile.php/2771503/mod_resource/content/1/MarathonProjectDescription.pdf)*

**Authors:** Matthew Alicea, Braxton Coats, Maximilian Finnican,
& Guillaume Gutkin Nicolas

**Team**: The Boys that are Back in Town (BoBaT)

---

## Assignment Specs

**Background**
Every business owner must every year file a document declaring all equipment, furniture. The form
requires a brief description for some item (or group of items) along with the data purchased and cost.
When an item is no longer in use, it must be declared as “deleted” from use. When items are purchased
in the last year, they are listed as “additions”.

**Website**
Your task is to produce a website that after entry for one year allows a business owner to reuse the data
in the next year (and subsequent years). The site in real life would print the form; however, that is
beyond the scope of this project.
Also, a real project would store the data in a small server-side database; however, we will simply store
the data in localStorage. (You will learn about that later in the semester.)
We are not graphic designers; however, you should produce a site that is “clean”, readable,
understandable, and usable for an average business owner or clerical person.

**Phases**  
The Project will be divided into several phases (laps) with deadlines as stated in the following table.
(Dates Due are all midnight on the date given.)

- **Design:** An on-paper design laying out a wireframe
and organization for your site.
_10/27/2017_ (10 pts)
- **Html:** Html coded site _11/7/2017_ (25 pts)
- **Styling:** Complete css _11/16/2017_ (25 pts)
- **Functionality** Adding javascript and jQuery behaviors _11/28/2017_ (25 pts)
- **Finishing Touches** Completed website _12/6/2017_ (15 pts)

## Overview

We want to make this

### Main Features
- List of previous reports
  - ability to create new _from_ previous
  - ability to create new from scratch
  - ability to edit previous (or continue editing)  


- Fill out a form
  - auto-fill previous years' entries if creating from previous
  - different sections for each schedule
  - sticky nav to jump to the different sections


- Review form
  - should also be able to create new _from_ when you're reviewing a previous report


### Supplementary Features
- Dashboard (with overview statistics based on previous reports)
- Account/Login
- Generate a printable, filled-out form (maybe _pandoc_?)


## Specifications

### Overview

**Client** runs the javascript function to get locally stored object data if it exists. Has an array of Report objects.

A **Report** contains multiple sections, and the following variables:
- name : name of report  
- id : id # for report
- sections : array of Section objects

A **Section** contains multiple items.

Each report will have these 5 sections:
- General (enter name, address, etc.)
- Personal Property
- Vehicles
- Other and Supplies
- Affirmation (sign and submit)

An **Item** corresponds to a single entry or row in a section. Each section type will have a different item type. For example, the _Personal Property_ section will have an item that holds the user input for: year acquired, item(s) name, group, status, value, and cost. An _Other and Supplies_ section would have an item with just the year acquired, name, and cost.

### Design

Check out mockups in `/resources`. For the sake of showing how input works on the "create" mockup, each section starts with one row (item) already there, but we should make it start empty with the form header/labels and add button. Empty sections should essentially be ignored when checking if any fields are empty. Only sections you can't omit are the general and affirmation sections.

### Code

**Writing the Code**   
Reports, sections, and items should be implemented with constructors. This will enhance code readability and organization.

A call to a specific value in an Item could be as simple as `Report.sections[i].items[j].value`, where `sections` is an array of Section objects, and `items` is an array of Item objects.

An example structure for a report could be written as follows:

```javascript

// Declare/Define Section object and its Item array, methods
function GeneralSection() {
    this.items;

    // Each section defines its own Item type
    function Item(reportName, id, ownerName, address) {
        this.reportName = reportName;
        this.id = id;
        this.ownerName = ownerName;
        this.address = address;
    }

    function addItem(reportName, id, ownerName, address) {
        if (items.length = 0) { // if array is empty, create first item
            item[0] = new Item(reportName, id, ownerName, address);
        } else { // push new item onto array
            let item = new Item(reportName, id, ownerName, address);
            items.push(item);
        }

    }
}

// ...
// rest of Section objects
// All of them need an items array, decl./def. of an Item object, and addItem(...)

// Declare/Define Report object and its variables, methods
function Report(name, id) {
    this.reportName = name;
    this.id = id;
    // initialize Report object with an array of Section objects
    this.initReport = function() {
        // Create 5 sections, corresponding on General, Personal Prop., etc.
        this.general = new GeneralSection(0);
        this.personal = new PersonalSection(1);
        //...
        // ...
        // Other setup stuff
        // Note general needs only one item object (0),
        // because it only has one set of inputs
        // (affirmation should probably be the same)
        general.items[0].reportName = reportName;
        general.items[0].id = id;
    }
}

var report = new Report("Ray's Weather", 1);
report.init();

// when user inputs data, save it to the item variables
report.general.item[0].reportName = ...;
report.personal.item[0].yearAcq = ...;

```

**Project Directory Organization**  

We should try to modularize our code as best we can, at least separate the declarations and definitions of Report/Section/Item in one file, from the client file that runs it all, gets user input, etc.

Example file structure:
```
project
|-- src
|   |-- css
|   |   `-- style.css
|   |-- js
|   |   |-- client.js
|   |   `-- report.js
|   |-- index.html
|   |-- other.html
|-- README.md
|-- resources
|   |-- somefile.txt
|   |-- mockup.png
|   `-- mockup2.png
```

Exporting `src` only will contain everything needed just to run site, while the others files/folders have extra stuff for developing and managing the project.


## Attribution
_if we use any resources to help us, list them and their links here (i.e. plugin, API, a guide that helps us do something very specific)_
