/*

█████████████████████████████████████████████████
█─▄▄▄▄█─▄─▄─██▀▄─██─▄─▄─█▄─▄█─▄▄▄─█████▄─▄█─▄▄▄▄█
█▄▄▄▄─███─████─▀─████─████─██─███▀███─▄█─██▄▄▄▄─█
▀▄▄▄▄▄▀▀▄▄▄▀▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▀▄▄▄▄▄▀▀▀▄▄▄▀▀▀▄▄▄▄▄▀

!======== STATIC JS CONFIGURATION FILE =========!

This file is used to link together all your
pages, snippets, templates, and more.

Try to keep this file organized. The cleaner
you keep it now the easier it will be to
maintain over time.

Below this text will be a default config file.
Mess around with it if you want!

Also, be sure to read the documentation on
the github repo.

!===============================================!

*/


// Page title (displayed at the top of the tab)
configPageTitle = "My StaticJS Website"

// Default snippet (look in snippets/nav.js)
snippetAdd("nav","nav.js")

// Default page (look in pages/index.js)
pageAdd("index","index.js")
// The reason it is being loaded is because it is the first page we want the user to see
pageLoad("index")



// This is required to save the changes. DO NOT DELETE THIS!
configSave();
