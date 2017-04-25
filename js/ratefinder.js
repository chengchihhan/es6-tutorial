import * as service from './rate-service-mock.js';

let url = "rates.json";

fetch(url)
  .then(respose => respose.json())
  .then(rates => {
    let html = '';
    rates.forEach(rates => html += `<tr><td>${rates.name}</td><td>${rates.years}</td><td>${rates.rate}</td></tr>`);
    document.getElementById('rates').innerHTML = html;
  })
  .catch(e => console.log(e));

service.findAll()
  .then(rates => {
    let html = '';
    rates.forEach(rates => html += `<tr><td>${rates.name}</td><td>${rates.years}</td><td>${rates.rate}</td></tr>`);
    document.getElementById('rates-1').innerHTML = html;
  })
  .catch(e => console.log(e));