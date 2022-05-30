// layout Databases using arrays
const layoutList = [];
const layoutURL = [];

// Makes the layout known in the config file
function layoutAdd(title,url) {
    layoutList[title] = "../app/layouts/" + url; // Adds to the first array
    layoutURL["../app/layouts/" + url] = title; // Adds to the second array
}

// Set the contents of the snippet. Put this in the snippet js file
function layoutSet(content) {
    var script = document.currentScript; // This code is used to find the name of the file
	var fullUrl = script.src; // it is being used in
	var title = fullUrl.slice(fullUrl.lastIndexOf('/') + 1,fullUrl.length -3 );

    dom("body","set",content); // Sets content of layout to the page.
}
