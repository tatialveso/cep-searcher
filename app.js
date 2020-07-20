// estudar API e ajax, promise e callback em um formulário

// API para mostrar o CEP usando ajax
// fetch('http://viacep.com.br/ws/03311000/json').then(function (response) {
//     response.json().then(function (data) {
//         console.log(data);
//         document.querySelector('').innerHTML = `
//             <p>CEP: ${data.cep} </p>
//             <p>Rua: ${data.logradouro} </p>
//             <p>Bairro: ${data.bairro} </p>
//         `
//     })
// })

document.querySelector('#search-cep').onclick = function () {
    let cep = document.getElementById('cep').value
    carregarCep(cep);
}

function carregarCep(cep) {
    fetch('http://viacep.com.br/ws/' + cep + '/json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            
            document.querySelector('#content').innerHTML =  `
                <p>CEP: ${data.cep}</p>
                <p>Rua: ${data.logradouro}</p>
                <p>Bairro: ${data.bairro}</p>
                <p>Cidade: ${data.localidade}</p>
                <p>Estado: ${data.uf}</p>
            `
        })
    })
}