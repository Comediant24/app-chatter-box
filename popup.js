const browser = chrome;
const goButton = document.querySelector('.popup-app-chapter-box__button');

goButton.addEventListener('click', sendTabMessage);

function sendTabMessage() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { getMeAlert: true });
  });
}
