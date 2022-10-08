let startClickInterval = null;

function startInterval() {
  startClickInterval = setInterval(() => {
    clickButton();
  }, 2000);
}

function clickButton() {
  try {
    const targetButton = document
      .querySelector('.amber-modal__winner-inner')
      .querySelector('.amber-section')
      .querySelector(
        '.amber-button, .amber-button_theme_accent, .amber-button_loading'
      );
    targetButton.click();
  } catch (error) {
    clearInterval(startClickInterval);
    const alarmSoundUrl = chrome.runtime.getURL('sound/alarm.mp3');
    const alarmSound = new Audio(alarmSoundUrl);
    alarmSound.play();
    alarmSound.loop = true;
    // sendErrorMessage(error);
  }
}

function sendErrorMessage(error) {
  console.log(
    '%cПохоже код кнопки изменился. Опишите проблему в telegram @Comediant24',
    error,
    'color: red; background: yellow; font-size: 30px'
  );
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.getMeAlert) startInterval();
});
