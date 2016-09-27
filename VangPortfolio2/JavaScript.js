var form = document.getElementById('name-form');
form.onsubmit = function(e) {
e.preventDefault();
var result = document.getElementById('result');
result.innerHTML = 'Hi'+ ' ' + form.fullName.value + '!!' + ' ' + "Here are best ways to contact me!";
form.reset();
};