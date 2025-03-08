const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

let errorPassword = document.getElementById("error-password");
let errorEmail = document.getElementById("error-email");

let loginBtn = document.getElementById("login-btn")
function login() {
  const email = emailInput.value;
  const senha = senhaInput.value;
  if (email === "" || senha === "") {
    if (email === "") {
      errorEmail.classList.remove("hidden");
    }
    if (senha === "") {
      errorPassword.classList.remove("hidden");
    }
  } else {
    // estando tudo certo, tira os alertas de erro
    errorEmail.classList.add("hidden");
    errorPassword.classList.add("hidden");

    // troca do valor do botão para o carregamento
    loginBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i>';
    loginBtn.disabled = true

    // colocando o tempo
    setTimeout(() => {
      Toastify({
        text: "Login realizado com sucesso!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #000000, #000000)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      loginBtn.innerHTML = 'Entrar';
      loginBtn.disabled = false
    }, 1000)
  }
}

console.log(emailInput);
