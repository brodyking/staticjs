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
configPageTitle = "Brodys Blog"

// Page description
configPageDescription = "A personal blog of mine!!"

// Page keywords (used for seo)
configPageKeywords = "HTML,CSS,JS,StaticJS"

// Page author
configPageAuthor = "Brody King"

layoutAdd("default","default.js")

pageAdd("About","index.js")

pageAdd("Pictures","pictures.js")

pageAdd("Contact","contact.js")


includeCSS("default.css")

pluginAdd("font","font.js")

// This is required to save the changes. DO NOT DELETE THIS!
configSave();

pluginRun("font")
