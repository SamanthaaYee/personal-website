/* 
var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text
var speed = 50; /* The speed/duration of the effect in milliseconds

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} 

var fields = {}

document.addEventListener("DOMContentLoaded", function() {
  fields.fname = document.getElementById('fname');
  fields.email = document.getElementById('email');
  fields.message = document.getElementById('message');
})

class User {
  constructor(fname, email, message) {
    this.fname = fname;
    this.email = email;
    this.message = message;
  }
}

function sendContact() {
  let usr = new User(fname.value, email.value, message.value);
  alert("thank you for your message!");
}

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 } */

 function submitForm() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (fname === "" || email === "" || message === "") {
      alert("please fill in all fields");
      return;
    }
  
    alert("thank you " + fname + " for the message!");
  
    // Optionally, you can reset the form after submission
    document.getElementById("contact-form").reset();
  
    /*var xhr = new XMLHttpRequest();
    xhr.open("POST", "./process_form.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText); // Display the server's response
        document.getElementById("contact-form").reset(); // Optionally reset the form
      }
    };
  
    var data = "fname=" + encodeURIComponent(fname) +
               "&email=" + encodeURIComponent(email) +
               "&message=" + encodeURIComponent(message);
  
    xhr.send(data);*/
  }
  
  