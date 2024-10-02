let askCount = 0;

document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');

  yesButton.addEventListener('click', function() {
    askCount++;
    if (askCount <= 2) {
      chrome.tabs.create({ url: 'chrome://settings/cookies' });
    }
    if (askCount >= 2) {
      document.body.classList.add('hidden');
    } else {
      window.close();
    }
  });

  noButton.addEventListener('click', function() {
    askCount++;
    if (askCount <= 2) {
      setTimeout(function() {
        window.location.reload();
      }, 1000); // ask again after 1 second
    }
    if (askCount >= 2) {
      document.body.classList.add('hidden');
    } else {
      window.close();
    }
  });
});