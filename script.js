

var modal = document.getElementById("myModal");
var btn0 = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var span = document.getElementsByClassName("close")[0];

btn0.onclick = function() {
    modal.style.display = "block";
}

btn1.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

btn4.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function regiszt(){
    window.open("registration.html");
}

function belepes(){
    alert("működik");
let email = document.getElementById("exampleInputEmail1").value;
let password = document.getElementById("exampleInputPassword1").value;

let dataToSave = {
    email_cim: email,
    jelszo: password
};

fb.ref("bejelentkezes").once('value').then(data => {
    
let savedPosts = data.val();
let path="bejelentkezes/"+savedPosts.length;
fb.ref(path).set(dataToSave);
savedPosts.length++; 
});

}