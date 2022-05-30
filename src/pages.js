// Page databases using arrays
const pageList = [];
const pageURL = [];

// Creating a page
function pageAdd(title,url) {
    // Adds it to the database
    pageList[title] = "../app/pages/" + url;
    pageURL["../app/pages/" + url] = title;
}

// Page Contents
function pageEdit(content) {
	var script = document.currentScript;
	var fullUrl = script.src;
	var title = fullUrl.slice(fullUrl.lastIndexOf('/') + 1,Infinity);

	dom("body","add",content)
	snippetGrab();
} 

// Page Loader
function pageLoad(title) {
	// Old Method of using fetch
	/*fetch(pageList[title])
	  .then(response => response.text())
	  .then((data) => {
		eval(data);
	}) */
	include(pageList[title]);
}