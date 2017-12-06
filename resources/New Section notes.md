### Add the Schedule C section

Here's the [link to the example form](https://asulearn.appstate.edu/pluginfile.php/2771868/mod_resource/content/0/SamplePropertyDeclaration.pdf) (It's called"Property in Your Possession on Jan 1 but Owned by Others")

To make it work we need to make changes to:

- **report.js** – object that holds data
- **index.js** – view creation
- **save.js** – auto-save and manulSave() needs to select and save these data members
- **load.js** – load these data members
- **storage.js** – stores/restores data into object



1. Start with **report.js** to create the section for each Report object. Match the other sections in terms of functionality. The Items it needs to have should have 5 data members:

- Name of Owner : `nameOwner` 
- Address of Owner : `addressOwner `
- Lease #/Account # : `leaseNumber ` 
- Monthly Payment : `monthlyPay`
- Cost New : `costNew` 
- Start & End Lease dates : `startEndDates`



Note:

- Treat them all like strings
- Don't worry about the "E" section at the bottom of Schedule C



2. Once you've got them in **report.js**, make their section container, form, and table in **index.js**. Just follow the same structure as the other "generateXTable()" functions. Make sure you call that "generate" function where the others are being called in **index.js**
3. Implement a listener and their anonymous functions for **save.js** where the others are. Don't forget to also add to `manualSave()`.
4. Implement loading for this new section in **load.js**
5. In **storage.js**, make sure `store()` and `restore()` also perform their function on the new section. 