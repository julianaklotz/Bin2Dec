const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let binaryNumber = event.target.querySelector('#bin');
    /*const resultado = document.querySelector('#resultado');*/

    const bin = binaryNumber.value;
    if (bin === '') {
        setResultado('Digite algum valor binário', false);
        return;
      } 
    if (bin.length > 8) {
        setResultado('Digite apenas até 8 dígitos', false);
        return;
      } 
    if (/[^01]/.test(bin)) {
        setResultado('Digite apenas valores binários (0s e 1s)!', false);
        return;
      }

    const msg = `<p>O valor decimal de '${bin}' é igual a: ${parseInt(bin, 2)}.</p>`;
    setResultado(msg, true);
})

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};


    


