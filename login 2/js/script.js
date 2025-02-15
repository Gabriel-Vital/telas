const emailInput =document.getElementById("email");
const senhaInput =document.getElementById("senha");
function login () {
    if (emailInput.value === "" && senhaInput.value === "") {
        alert("Preencha os campos email e senha")
    }

    else if (emailInput.value === "") {
        alert("Preencha o seu email")
    }
    else if (senhaInput.value === "") {
        alert("Preencha a sua senha")
    }
}

console.log(emailInput)
