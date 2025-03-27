const form = document.getElementById('formulario');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarContato();
    atualizarContatos();
});

function adicionarContato () {
    const inputContato = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');

    if (telefone.includes(inputTel.value)) {
        let index = telefone.indexOf(inputTel.value);
        alert(`O numero: ${inputTel.value}, ja foi adicionado ao contato: ${contato[index]}`);
    }else {
        contato.push(inputContato.value);
        telefone.push(inputTel.value);

        let linha = "<tr>";
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }

    inputContato.value = ' ';
    inputTel.value = ' ';
}

function atualizarContatos () {
    const listaTelefonica = document.querySelector('tbody');
    listaTelefonica.innerHTML = linhas;
}

