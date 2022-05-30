// snippet Databases using arrays
const snippetList = [];
const snippetURL = [];
const snippetContent = [];
const snippetCount = [];

// Make the snippet known in config.js
function snippetAdd(title,url) {
    snippetList[title] = "../app/snippets/" + url;
    snippetURL["../app/snippets/" + url] = title;
    snippetContent[title] = null;
    include(snippetList[title]);
    snippetCount[snippetCount.length] = title;
}

// Set the contents of the snippet. Put this in the snippet js file
function snippetSet(content) {
    var script = document.currentScript;
	var fullUrl = script.src;
	var title = fullUrl.slice(fullUrl.lastIndexOf('/') + 1,fullUrl.length -3 );

    snippetContent[title] = content;
}

function snippetGrab() {
    for (let i = 0; i < snippetCount.length; i++) {
        if (document.getElementById(snippetCount[i]) != null) {
            document.getElementById(snippetCount[i]).innerHTML += snippetContent[snippetCount[i]];
        }
    }
}
