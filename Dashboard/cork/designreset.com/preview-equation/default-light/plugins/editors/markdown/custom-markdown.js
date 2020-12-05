
// Basic
new SimpleMDE({
	element: document.getElementById("demo1"),
	spellChecker: false,
});


// Autosaving
new SimpleMDE({
	element: document.getElementById("demo2"),
	spellChecker: false,
	autosave: {
		enabled: true,
		unique_id: "demo2",
	},
});



// Hidden toolbar and status bar
new SimpleMDE({
	element: document.getElementById("demo3"),
	status: false,
	toolbar: false,
});





























