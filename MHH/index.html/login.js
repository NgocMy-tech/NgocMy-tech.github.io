document.getElementById("btnLogin").addEventListener("click", () => {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value.trim();

  if (!username) {
    alert("Nhập Username đi bảnh");
    return;
  }

  localStorage.setItem("role", role);
  localStorage.setItem("username", username);

  // demo: đi thẳng dashboard
  window.location.href = "dashboard.html";
});
