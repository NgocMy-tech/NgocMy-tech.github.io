function calculateAverage() {
  // yêu cầu: dùng querySelectorAll()
  const inputs = document.querySelectorAll(".gradeInput");

  let sum = 0;
  let count = 0;

  inputs.forEach((input) => {
    const val = parseFloat(input.value);

    // kiểm tra số hợp lệ
    if (!isNaN(val)) {
      sum += val;
      count++;
    }
  });

  const avg = count > 0 ? (sum / count) : 0;

  // hiển thị ra màn hình
  const resultText = document.getElementById("resultText");
  resultText.textContent = "Average: " + avg.toFixed(2);
}
resultText.style.color = "red";