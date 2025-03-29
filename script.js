const form = document.getElementById('formulario');
const contato = [];
const telefone = [];
const email = [];
const grupo = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarContato();
    atualizarContatos();
});

function adicionarContato () {
    const inputContato = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');
    const inputEmail = document.getElementById('email');
    const inputGrupo = document.getElementById('grupo');

    if (telefone.includes(inputTel.value)) {
        let index = telefone.indexOf(inputTel.value);
        alert(`O numero: ${inputTel.value}, ja foi adicionado ao contato: ${contato[index]}`);
    }else {
        contato.push(inputContato.value);
        telefone.push(inputTel.value);
        email.push(inputEmail.value);
        grupo.push(inputGrupo.value);

        let linha = "<tr>";
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += `<td>${inputEmail.value}</td>`;
        linha += `<td>${inputGrupo.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }

    inputContato.value = '';
    inputTel.value = '';
    inputGrupo.value = '';
    inputEmail.value = '';
}

function atualizarContatos () {
    const listaTelefonica = document.querySelector('tbody');
    listaTelefonica.innerHTML = linhas;
}

