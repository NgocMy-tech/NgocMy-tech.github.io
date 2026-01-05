export async function loadCSV(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Cannot load ${path} (${res.status})`);
  const text = await res.text();

  const lines = text.split(/\r?\n/).filter(l => l.trim() !== "");
  const headers = lines[0].split(",").map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    const obj = {};
    headers.forEach((h, i) => obj[h] = values[i] ?? "");
    return obj;
  });
}
