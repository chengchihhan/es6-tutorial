function sayHi() {
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;

  var html = 'Hello <em>' + firstName + '</em> ' + lastName;

  document.getElementById('result').innerHTML = html;
}

document.getElementById('say').addEventListener('click', sayHi, false);