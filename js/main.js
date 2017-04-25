function sayHi() {
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;

  let html = 'Hello <em>' + firstName + '</em> ' + lastName;

  document.getElementById('result').innerHTML = html;
}

document.getElementById('say').addEventListener('click', sayHi, false);