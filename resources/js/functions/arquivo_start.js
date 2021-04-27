function setData(form) { 
    if(document.getElementById('form_nome').value == "" || 
    document.getElementById('form_email').value == "" || 
    document.getElementById('form_telefone').value == ""|| 
    document.getElementById('form_assunto').value == ""|| 
    document.getElementById('form_mensagem').value == "") {
        alert('Preencha todos os campos!');
    }
    else {
    sessionStorage.setItem("form_nome", document.getElementById('form_nome').value); 
    sessionStorage.setItem("form_email", document.getElementById('form_email').value); 
    sessionStorage.setItem("form_telefone", document.getElementById('form_telefone').value); 
    sessionStorage.setItem("form_assunto", document.getElementById('form_assunto').value); 
    sessionStorage.setItem("form_mensagem", document.getElementById('form_mensagem').value);
    document.getElementById('form_nome').value = "";
    document.getElementById('form_email').value = "";
    document.getElementById('form_telefone').value = "";
    document.getElementById('form_assunto').value = "";
    document.getElementById('form_mensagem').value = "";
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
    document.getElementById('valor3').value = "";
    document.getElementById('valor4').value = "";
    document.getElementById('valor5').value = "";
}
}

function getData() {
    document.getElementById("form_nome").value = sessionStorage.getItem("form_nome");
    document.getElementById("form_email").value = sessionStorage.getItem("form_email");
    document.getElementById("form_telefone").value = sessionStorage.getItem("form_telefone");
    document.getElementById("form_assunto").value = sessionStorage.getItem("form_assunto");
    document.getElementById("form_mensagem").value = sessionStorage.getItem("form_mensagem");
}

function busca(idValor, idCampo) {
  document.getElementById(idValor).value = document.getElementById(idCampo).value;
}
