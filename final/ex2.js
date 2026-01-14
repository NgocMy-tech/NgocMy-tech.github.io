let vegetarianOnly = false;

function filterMenu() {
  // toggle trạng thái
  vegetarianOnly = !vegetarianOnly;

  // yêu cầu: dùng getElementsByClassName()
  const allItems = document.getElementsByClassName("item");
  const vegItems = document.getElementsByClassName("vegetarian");

  // Nếu bật vegetarianOnly: ẩn hết rồi hiện lại món chay
  if (vegetarianOnly) {
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].style.display = "none";
    }
    for (let i = 0; i < vegItems.length; i++) {
      vegItems[i].style.display = "flex";
    }
  } else {
    // Nếu tắt: hiện tất cả
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].style.display = "flex";
    }
  }

  // đổi text nút
  const btn = document.getElementById("filterBtn");
  btn.textContent = vegetarianOnly
    ? "Filter Menu (Vegetarian: ON)"
    : "Filter Menu (Vegetarian: OFF)";
}
