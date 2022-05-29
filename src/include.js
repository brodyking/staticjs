// Used to include all other js files like pages.js

// Function that is going to be used in this doc
function include(url) {
    var includeJSVar = document.createElement('script');
    includeJSVar.setAttribute('src',url);
    document.head.appendChild(includeJSVar);
}

// Including all js files

include("../src/pages.js")