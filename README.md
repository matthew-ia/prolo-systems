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

### Organization

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

Implementing the Report objects should be done with a constructor. The rest of the objects/values could simply be implemented as a 3D array, _**however**_, I think these should be implemented with constructors as well (and be proper objects). This will enhance code readability and organization.

A call to a specific value in an Item could be as simple as `Report.sections[i].items[j].value`, where `sections` is an array of Section objects, and `items` is an array of Item objects.

An example structure for a report could be written as follows:

```javascript

function Item() {
    this.yearAcq;
    this.name;
    this.cost;
    
}

function Section() {
    this.items;
    this.init = function() {
        items[0] = new Item();
    }
}

function Report(name, id) {
    this.reportName = name;
    this.id = id;
    this.sections;
    this.init = function() {
        for (i = 0; i < 5; i++) {
            sections[i] = new Section();
        }
    }

}

var report = new Report("Ray's Weather", 1);
```




## Attribution
_if we use any resources to help us, list them and their links here (i.e. plugin, API, a guide that helps us do something very specific)_
