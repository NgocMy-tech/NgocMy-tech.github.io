const form8 = document.getElementById("newsForm");
const fullName = document.getElementById("fullName");
const email8 = document.getElementById("newsEmail");

const newsError = document.getElementById("newsError");
const newsSuccess = document.getElementById("newsSuccess");

function show(el) { el.style.display = "block"; }
function hide(el) { el.style.display = "none"; }

// rule: email must contain @ and domain
function isValidEmailSimple(email) {
  const at = email.indexOf("@");
  const dot = email.lastIndexOf(".");
  return at > 0 && dot > at + 1 && dot < email.length - 1;
}

// rule: at least one interest selected
function hasAtLeastOneInterest() {
  const checks = document.querySelectorAll(".interest");
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) return true;
  }
  return false;
}

form8.addEventListener("submit", (e) => {
  e.preventDefault();
  hide(newsError);
  hide(newsSuccess);

  const nameVal = fullName.value.trim();
  const emailVal = email8.value.trim();

  // thêm rule name ≥ 3 characters
  const okName = nameVal.length >= 3;
  const okEmail = isValidEmailSimple(emailVal);
  const okInterest = hasAtLeastOneInterest();

  // validation tổng
  if (!okName || !okEmail || !okInterest) {
    show(newsError);
    return;
  }

  // show success
  show(newsSuccess);
  form8.reset();
});



