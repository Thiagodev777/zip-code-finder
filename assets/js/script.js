// API -> VIACEP / https://viacep.com.br/ws/01001000/json/

let buscar = document.getElementById('Buscar');
buscar.addEventListener('click', requisicao);

let h2 = document.createElement('h2');
let div = document.createElement('div')
document.body.appendChild(div)
document.body.appendChild(h2);

async function requisicao(){
  h2.innerHTML = '';
  let cep_request = document.getElementById('cep_request').value;
  if(!cep_request) {
    alert('Ops.. Parece que algo deu errado! Confira os dados e tente novamente.');
  }
  let resposta = await fetch(`https://viacep.com.br/ws/${cep_request}/json/`);
  let json = await resposta.json()
  if(json.erro) {
  alert('[404] Ops..Algo deu errado em nossa requisição, confira os dados e tente novamente.');
  document.location.reload()
  }
  imprimir(json)
}

function imprimir(json){
  div.appendChild(h2)
  div.classList.add('cep_result')
  let {bairro, cep, complemento, ddd, localidade, logradouro, uf} = json
  h2.innerHTML += `Cep: ${cep}</br>`
  h2.innerHTML += `Bairro: ${bairro}</br>`
  h2.innerHTML += `Complemento: ${!complemento ? 'Nenhum' : complemento}</br>`
  h2.innerHTML += `ddd: ${ddd}</br>`
  h2.innerHTML += `Localidade: ${localidade}</br>`
  h2.innerHTML += `Logradouro: ${logradouro}</br>`
  h2.innerHTML += `UF: ${uf}</br>`
}

