chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
       
        conditions: [
              // That fires when a page's URL equals a 'https://www.twitch.tv/directory/all' ...
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlEquals: 'https://www.twitch.tv/directory/all' },
          }),
              // That fires when a page's URL contains a 'https://www.twitch.tv/directory/game/' ...
		      new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://www.twitch.tv/directory/game/' },
          }),
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
