// variables NOT used in config.js
var configSJSVersion = "v0.1"

// variables used in config.js
var configPageTitle
var configPageDescription
var configPageKeywords
var configPageAuthor
var configFavicon

// makes config take effect
function configSave() {
    dom("pageTitle","set",configPageTitle); 
    dom("pageHead","add",'<meta name="description" content="' + configPageDescription + '">');
    dom("pageHead","add",'<meta name="keywords" content="' + configPageKeywords + '">');
    dom("pageHead","add",'<meta name="author" content="' + configPageAuthor + '">');
    console.log("This websites backend is using StaticJS (" + configSJSVersion + ") Look at https://github.com/brodyking/staticjs for more details.")
}