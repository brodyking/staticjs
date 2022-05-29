// Page databases using arrays
const pageList = [];
const pageContent = [];

// Creating a page
function pageAdd(title,url) {
    // Adds it to the database
    pageList[title] = url;
    pageContent[title] = null;
}

// Page Contents
function pageEdit(content) {
	var script = document.currentScript;
	var fullUrl = script.src;
	var title = fullUrl.slice(fullUrl.lastIndexOf('/') + 1,Infinity);
	pageContent[title] = content;
	alert(title)
} 
