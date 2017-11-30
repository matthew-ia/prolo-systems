First, some updates:

- `REPORT` is a global variable that holds a reference to the *current* report (the one being viewed). This is in main.js
- `REPORTLIST` is a global array that holds a list of all the reports in runtime. This is main.js.
  - this needs to also load in reports from localStorage (or maybe we just store the entire array, and then restore it, *then* restore each report object)


### addReport()

~~This just needs create a new report object, and add it to REPORTLIST~~
*Pretty sure this is done.*


### addRow()

This needs to work similarly to the way addItem works, but for the front end. It needs to create a new table row, and populate it with the correct data cells.  `addRow()` will need to be called when:

- the user clicks the 'Add Row' button
- load is populating a section with more than 1 item; it needs to create a new row for each item as it populates each cell
  - that means load needs to work dynamically for all rows of each section (excluding General and Affirmation; these sections are single row)


### click listener for load(...)


The report list items (see below) need to have a click listener to fire `load(...)`

```html
...
<ul>
  <li><a href="index.html">Report 1</a></li>
  <li><a href="index.html">Report 2</a></li>
  <li><a href="index.html">Report 3</a></li>
</ul>
...
```

```javascript
$(selector).click(function() {
  	// Get the report name out of the li element (similar to putting it in there)
	// Do some stuff once index.html is loaded
  	// load(reportName)
});
```

So the tricky thing here is the fact that we need all the code in `index.js` to run *before* we can load the data. `index.js` creates the html structure with jQuery, so all the selectors that `load.js` uses wouldn't select…well…anything! Because until the HTML structure is populated, there's nothing *to* select.



### load(…) form utility function(s)

We need the `status` (in Personal Property) to change to "prior" if we're loading from a previously created report, to make a new one. This could be handled with a `changeStatus` function, and a second parameter for load, such as: `load(reportName, isNew)` where `isNew` is a boolean set to true if we're creating a new report *from* an old one, and false if we're just loading to view an old one.



### Create new from old on Reports page

We need the ability to also create a new report from an old one. This functionality would most easily be implemented by having a button next to the report name (on the Reports page), which you can click to fire `load(...,true)`. We should be aware that the name and id needs to be changed in order to be easily identifiable as a different report. One easy way to do this is to change the `id` datamember to be hardcoded in rather than



### removeReport()

Not priority, but should have implement it if we have time. Can just have a delete button on the Reports page.



### Fix: Datepicker with save.js

So when you select a date via the datepicker, it will only be saved on the second blur event, not the first (which is important). We can leave this bug, and just have a "save" button the user can manually click which will just immediately save all inputs. We were planning on having a save button anyway. Put this in **save.js** and in a function called `manualSave()`



### addReport()

~~This just needs create a new report object, and add it to REPORTLIST~~
*Pretty sure this is done.*



### save()

~~Needs to save each user input (and select, textarea) to the current report object.~~

*Done.*
