const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

function show(el) { el.style.display = "block"; }
function hide(el) { el.style.display = "none"; }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  hide(errorMsg);
  hide(successMsg);

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const msgVal = messageInput.value.trim();

  // yêu cầu: check nếu field rỗng
  if (nameVal === "" || emailVal === "" || msgVal === "") {
    show(errorMsg);
    return;
  }

  // yêu cầu: show success khi đầy đủ
  show(successMsg);

  // (tuỳ chọn) reset form cho sạch
  form.reset();
});
