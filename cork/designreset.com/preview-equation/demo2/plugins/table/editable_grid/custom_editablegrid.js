editableGrid = new EditableGrid("DemoGridAttach"); 
// we build and load the metadata in Javascript
editableGrid.load({ metadata: [
    { name: "name", datatype: "string", editable: true },
    { name: "firstname", datatype: "string", editable: true },
    { name: "age", datatype: "integer", editable: true },
    { name: "height", datatype: "double(m,2)", editable: true },
    { name: "country", datatype: "string", editable: true, values: 
        { 'Europe': { "be" : "Belgium", "fr" : "France", "uk" : "Great-Britain", "nl": "Nederland"},
          'America': { "br" : "Brazil", "ca": "Canada", "us" : "USA" },
          'Africa': { "ng" : "Nigeria", "za": "South-Africa", "zw" : "Zimbabwe" }
        }
    },
    { name: "email", datatype: "sting", editable: true },
    { name: "freelance", datatype: "boolean", editable: true },
    { name: "lastvisit", datatype: "date", editable: true }
]});

// then we attach to the HTML table and render it
editableGrid.attachToHTMLTable('htmlgrid');
editableGrid.renderGrid();