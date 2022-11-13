//Main Logic
function sidd() {
  rng = document.getElementById("range").value;
  res = rng.split("-");
  if (res.length != 2) {
    alert("invalid range ");
    return;
  }
  first = parseInt(res[0]);
  second = parseInt(res[1]);
  if (first > second) {
    alert("invalid range ");
    return;
  }
  str =
    "<table style='border:1px solid black;border-collapse: collapse;'><tr><th style='border:1px solid black;border-collapse: collapse;padding: 10px;'>Number</th><th style='border:1px solid black;border-collapse: collapse;padding: 10px;'>Square</th><th style='border:1px solid black;border-collapse: collapse;padding: 10px;'>Cube</th></tr>";

  for (i = first; i <= second; i++) {
    str =
      str +
      "<tr><td style='border:1px solid black;border-collapse: collapse;padding: 10px;'>" +
      i +
      "<td style='border:1px solid black;border-collapse: collapse;padding: 10px;'>" +
      i * i +
      "<td style='border:1px solid black;border-collapse: collapse;padding: 10px;'>" +
      i * i * i;
  }

  document.getElementById("sc").innerHTML = str;
}
