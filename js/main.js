import * as mock from './test';

let url = "info.json";

fetch(url)
  .then(response => response.json())
  .then(info => {
    let html = "";
    info.forEach(info => html += `<tr><td>${info.name}</td><td>${info.sex}</td><td>${info.years}</td></tr>`);
    document.getElementById('info').innerHTML = html;
  })
  .catch(e => console.log(e));

mock.findAll()
  .then(test => {
    let html = "";
    test.forEach(test => html += `<tr><td>${test.name}</td><td>${test.sex}</td><td>${test.years}</td></tr>`);
    document.getElementById('test').innerHTML = html;
  })
  .catch(e => console.log(e));

const promises = [
  new Promise(resolve => setTimeout(resolve, 0, 1)),
  new Promise(resolve => setTimeout(resolve, 0, 2))
];

Promise.all(promises)
  .then(promises => {
    console.log('value', promises.join('and'));
  });
