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
function pageEdit(layout,content) {
	var script = document.currentScript;
	var fullUrl = script.src;
	var title = fullUrl.slice(fullUrl.lastIndexOf('/') + 1,Infinity);
	
	include("../app/layouts/" + layout + ".js");

	function delay(time) {
		return new Promise(resolve => setTimeout(resolve, time));
	  }
	  
	  delay(300).then(() => dom("content","set",content));
	  delay(300).then(() => snippetGrab());
	  dom("pageTitle","set",configPageTitle + " - " + title.slice(0,title.length -3)); 
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

// Load pages based on the hash in the top
if(window.location.hash) {
	var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
	include("../app/pages/" + hash + ".js");
	// hash found
} else {
	include("../app/pages/index.js");
}
