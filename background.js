chrome.contextMenus.onClicked.addListener(function (clickData) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.sendMessage(tabs[0].id, {type: "openModal"});
  });
});
