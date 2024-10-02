document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');

  yesButton.addEventListener('click', function() {
    
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ['ruleset_1', 'ruleset_4']
    });
    window.close();
  });

  noButton.addEventListener('click', function() {
    
    chrome.tabs.create({
      url: 'chrome://settings/content/cookies'
    });
    window.close();
  });
});
