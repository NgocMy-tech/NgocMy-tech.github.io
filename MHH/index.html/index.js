async function loadCSV(path) {
  const response = await fetch(path);
  const text = await response.text();

  const lines = text.split("\n").filter(l => l.trim() !== "");
  const headers = lines[0].split(",");

  return lines.slice(1).map(line => {
    const values = line.split(",");
    let obj = {};
    headers.forEach((h, i) => {
      obj[h.trim()] = values[i]?.trim();
    });
    return obj;
  });
}
