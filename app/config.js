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

// Page description
configPageDescription = "A tutorial website showing off how to use StaticJS"

// Page keywords (used for seo)
configPageKeywords = "HTML,CSS,JS,StaticJS"

// Page author
configPageAuthor = "Brody King"

// adding our layout
layoutAdd("basic","basic.js")

// Default snippet (look in snippets/nav.js)
snippetAdd("nav","nav.js")

// Default page (look in pages/index.js)
pageAdd("index","index.js")
pageAdd("quickstart","quickstart.js")



includeCSS("basic.css")

// This is required to save the changes. DO NOT DELETE THIS!
configSave();
