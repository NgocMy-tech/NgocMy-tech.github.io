function switchTab(panelId, clickedBtn) {
  // 1) Ẩn tất cả panel
  const panels = document.querySelectorAll(".panel");
  panels.forEach((p) => {
    p.classList.remove("show"); // yêu cầu: classList.remove()
  });

  // 2) Bỏ active tất cả tab
  const tabs = document.querySelectorAll(".tabBtn");
  tabs.forEach((t) => {
    t.classList.remove("active"); // yêu cầu: classList.remove()
  });

  // 3) Hiện panel được chọn
  const target = document.getElementById(panelId);
  target.classList.add("show"); // yêu cầu: classList.add()

  // 4) Gán active cho tab đang click
  clickedBtn.classList.add("active"); // yêu cầu: classList.add()
}
