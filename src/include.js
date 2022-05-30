// Used to include all other js files like pages.js

// Function that is going to be used in this doc
function include(url) {
    var includeJSVar = document.createElement('script');
    includeJSVar.setAttribute('src','src/' + url);
    document.head.appendChild(includeJSVar);
}

// Function used for importing CSS
function includeCSS(url) {
    var includeCSSVar = document.createElement('link');
    includeCSSVar.setAttribute('rel','stylesheet');
    includeCSSVar.setAttribute('href','app/assets/css/' + url);
    document.head.appendChild(includeCSSVar);
}

// Including all js files

include("dom.js")
include("snippets.js")
include("layouts.js")
include("pages.js")
include("plugins.js")
include("settings.js")
include("../app/config.js");