let url = "info.json";

fetch(url)
  .then(response => response.json())
  .then(info => {
    let html = "";
    info.forEach(info => html += `<tr><td>${info.name}</td><td>${info.sex}</td><td>${info.years}</td></tr>`);
    document.getElementById('info').innerHTML = html;
  })
  .catch(e => console.log(e));