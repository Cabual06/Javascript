const checkbox = document.getElementById('checkbox');
const male = document.getElementById('Male');
const female = document.getElementById('Female');
const submit = document.getElementById('submit');

submit.onclick = function () {
if(checkbox.checked){
    document.getElementById("text1").textContent = "You are subscribed, Thank you!";
}else{
    document.getElementById("text1").textContent = "You are not subscribe yet, Please subscribe";
}

if(male.checked){
    document.getElementById("text2").textContent = "You are a Male";
}else if(female.checked){
    document.getElementById("text2").textContent = "You are a Female";
}else{
    document.getElementById("text2").textContent = "You need to choose a Gender";
}
