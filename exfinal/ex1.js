// ===== 1) Lấy các element từ HTML bằng id =====
const form = document.getElementById("regForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const avatar = document.getElementById("avatar");

const usernameErr = document.getElementById("usernameErr");
const passwordErr = document.getElementById("passwordErr");
const avatarErr = document.getElementById("avatarErr");
const successMsg = document.getElementById("successMsg");

const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");

const preview = document.getElementById("preview");
const fileInfo = document.getElementById("fileInfo");

// tiện hàm bật/tắt hiển thị
function show(el) { el.style.display = "block"; }
function hide(el) { el.style.display = "none"; }

// ===== 2) Validate Username: 5-15 ký tự =====
function validateUsername() {
  const len = username.value.trim().length;
  const ok = len >= 5 && len <= 15;

  ok ? hide(usernameErr) : show(usernameErr);
  return ok;
}

// ===== 3) Validate Password: phải có chữ + số =====
function validatePassword() {
  const val = password.value;
  const hasLetter = /[A-Za-z]/.test(val); // có chữ?
  const hasNumber = /\d/.test(val);       // có số?

  const ok = hasLetter && hasNumber;
  ok ? hide(passwordErr) : show(passwordErr);
  return ok;
}

// ===== 4) Validate ảnh: JPG/PNG =====
function validateAvatar() {
  // Nếu bài yêu cầu bắt buộc upload ảnh, đổi return true -> return false ở đây
  if (!avatar.files || avatar.files.length === 0) {
    hide(avatarErr);
    return true;
  }

  const file = avatar.files[0];
  const ok = ["image/jpeg", "image/png"].includes(file.type);

  ok ? hide(avatarErr) : show(avatarErr);
  return ok;
}

// ===== 5) Password strength realtime =====
function updateStrength() {
  const val = password.value;
  let score = 0;

  // điểm 1: đủ dài >= 6
  if (val.length >= 6) score++;

  // điểm 2: có cả chữ và số
  if (/[A-Za-z]/.test(val) && /\d/.test(val)) score++;

  // điểm 3: mạnh hơn nếu dài >= 10 và có ký tự đặc biệt
  if (val.length >= 10 && /[^A-Za-z0-9]/.test(val)) score++;

  // Nếu chưa gõ gì
  if (val.length === 0) {
    strengthText.textContent = "Strength: -";
    strengthBar.style.width = "0%";
    strengthBar.style.background = "#999";
    return;
  }

  // map score -> weak/medium/strong
  if (score <= 1) {
    strengthText.textContent = "Strength: Weak";
    strengthBar.style.width = "33%";
    strengthBar.style.background = "#e53935";
  } else if (score === 2) {
    strengthText.textContent = "Strength: Medium";
    strengthBar.style.width = "66%";
    strengthBar.style.background = "#fb8c00";
  } else {
    strengthText.textContent = "Strength: Strong";
    strengthBar.style.width = "100%";
    strengthBar.style.background = "#43a047";
  }
}

// ===== 6) Preview ảnh khi chọn file =====
avatar.addEventListener("change", () => {
  validateAvatar();

  if (!avatar.files || avatar.files.length === 0) {
    preview.removeAttribute("src");
    fileInfo.textContent = "No file selected.";
    return;
  }

  const file = avatar.files[0];
  fileInfo.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;

  // chỉ preview nếu đúng loại
  if (["image/jpeg", "image/png"].includes(file.type)) {
    const url = URL.createObjectURL(file);
    preview.src = url;
  } else {
    preview.removeAttribute("src");
  }
});

// ===== 7) Live validate khi gõ =====
username.addEventListener("input", validateUsername);

password.addEventListener("input", () => {
  validatePassword();
  updateStrength(); // realtime
});

// ===== 8) Khi reset form =====
form.addEventListener("reset", () => {
  hide(usernameErr);
  hide(passwordErr);
  hide(avatarErr);
  hide(successMsg);

  strengthText.textContent = "Strength: -";
  strengthBar.style.width = "0%";
  strengthBar.style.background = "#999";

  preview.removeAttribute("src");
  fileInfo.textContent = "No file selected.";
});

// ===== 9) Khi submit =====
form.addEventListener("submit", (e) => {
  e.preventDefault(); // chặn reload trang
  hide(successMsg);

  const okU = validateUsername();
  const okP = validatePassword();
  const okA = validateAvatar();

  if (okU && okP && okA) {
    show(successMsg);
  }
});
