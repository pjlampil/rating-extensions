var score = document.createElement("div");
score.className = "site-product-card__content__price";
var products = document.getElementsByClassName("site-product-card__content");
for (let item of products) {
  var title = item
    .getElementsByClassName("site-product-card__content__title")[0]
    .innerHTML.split(" ")
    .join("+");
  chrome.runtime.sendMessage(
    {
      action: "fetchBeer",
      url: encodeURI(
        `https://europe-west3-beer-score.cloudfunctions.net/beer-score-scrape?beer=${title}`
      ),
    },
    (response) => {
      scoreValue = parseInt(response.value) > 0 ? response.value : "N/A";
      let s = score.cloneNode(true);
      s.innerHTML = scoreValue;
      item.insertAdjacentElement("afterbegin", s);
    }
  );
}
