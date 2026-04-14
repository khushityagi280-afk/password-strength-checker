function checkStrength(){
    let password =
    document.getElementById("password").value;
    let result = document.getElementById("result");
    let bar = document.getElementById("strength-bar");
    let suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
    if (password.length === 0) {
        result.innerHTML = "Strength:";
        bar.style.width = "0";
        bar.style.backgroundColor = "transparent";
        return;
    }
    let hasUpper = /[A-Z]/.test(password);
    let haslower = /[a-z]/.test(password);
    let hasdigit = /[0-9]/.test(password);
    let hasSpecial = /[!@~*&%_$]/.test(password);
    let strength = 0;

    if(password.length>=8) strength++;
    else suggestions.innerHTML += "<li>. Minimum 8 Characters</li>";
     
    if(hasUpper)strength++;
    else suggestions.innerHTML += "<li>. Add uppercase letter</li>";

    if(haslower)strength++;
    else suggestions.innerHTML += "<li>. Add lowercase letter</li>";

    if(hasdigit)strength++;
    else suggestions.innerHTML += "<li>. Add a number</li>";

    if(hasSpecial)strength++;
    else suggestions.innerHTML += "<li>. Add a special character</li>";

    if(strength<=2){
        result.innerHTML = "Strength: Weak";
        bar.style.width = "33%";
        bar.style.backgroundColor = "red";
    }
    else if(strength==3 || strength==4){
        result.innerHTML = "Strength: Medium";
        bar.style.width = "66%";
        bar.style.backgroundColor = "orange";
    }
    else{
        result.innerHTML = "Strength: Strong";
        bar.style.width = "100%";
        bar.style.backgroundColor = "green";
    }
}
function togglePassword() {
    let input =
    document.getElementById("password");
    if (input.type=="password") {
        input.type = "text";
    }
    else{
        input.type = "password";
    }
}