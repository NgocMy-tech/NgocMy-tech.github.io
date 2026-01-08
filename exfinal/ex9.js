let showEuro = true;

function togglePrice() {
  // yêu cầu: dùng getElementsByClassName()
  const prices = document.getElementsByClassName("priceTag");

  showEuro = !showEuro;

  for (let i = 0; i < prices.length; i++) {
    const eur = prices[i].getAttribute("data-eur");
    const usd = prices[i].getAttribute("data-usd");

    // đổi text của tất cả price
    prices[i].textContent = showEuro ? `€${eur}` : `$${usd}`;
  }
}
