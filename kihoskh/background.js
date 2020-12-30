chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "fetchBeer") {
    fetch(request.url)
      .then((response) => (response ? response.json() : {}))
      .then((data) => sendResponse(data))
      .catch();
    return true;
  }
});
