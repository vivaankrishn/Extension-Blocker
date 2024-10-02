document.addEventListener('DOMContentLoaded', function() {
  const messageElement = document.getElementById('message');

  // Display message after 2 seconds
  setTimeout(function() {
    messageElement.textContent = "Please disable 3rd party cookies";
  }, 2000);

  // open cookie page
  chrome.tabs.create({
    url: 'chrome://settings/content/cookies'
  });
  window.close();
});
