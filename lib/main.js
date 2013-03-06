require("widget").Widget({
  id: "nogizaka",
  label: "nogizaka",
  content: "mozilla space Nogizaka",
  onClick: function() {
    require("tabs").activeTab.url = "http://www.mecha-mozilla.org/mozillaspace/";
  },
  width: 150
});
var pageMod = require("page-mod");
pageMod.PageMod({
  include: ["http://www.mecha-mozilla.org/mozillaspace/*"],
  contentStyle: [
    "body{overflow: hidden;background-size:100%;}"
  ],
  contentScriptWhen: 'end',
  contentScript: 'document.body.mozRequestFullScreen();'
});