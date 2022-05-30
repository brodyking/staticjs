// Plugin Databases using arrays
const pluginList = [];
const pluginURL = [];

// Makes the plugin known in the config file
function pluginAdd(title,url) {
    pluginList[title] = "../app/plugins/" + url; // Adds to the first array
    pluginURL["../app/plugins/" + url] = title; // Adds to the second array
}

// Set the contents of the snippet. Put this in the snippet js file
function pluginRun(title) {
    include(pluginList[title]);
}
