// code that makes app/config.js work

// variables used in config.js
var configPageTitle

// makes config take effect
function configSave() {
    dom("pageTitle","set",configPageTitle); 
}