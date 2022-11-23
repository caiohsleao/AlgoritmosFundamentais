function contagem(){
    let n = prompt("informe o valor de N");
    contador = 0;
    i = 0;

    while (i < n) {
        contador = contador + 1
        i++
    }

    document.getElementById("resposta").innerHTML = (`A quantidade de valores inteiros existentes entre 1 e ${n} é ${contador}`)

}


function fibonacci(){
    let quantidade_termos = prompt('Informe o número de termos da seqência: ')
    let a = 0;
    let b = 1;
    let c = 0;
    let resultado = "";
    for(let i = 0; i < quantidade_termos; i++){
      if(i!=quantidade_termos-1){
        resultado += a + " ";
      }
      else{
        resultado += a + " ";
      }
      c = a + b
      a = b
      b = c
    }
    document.getElementById("resposta").innerHTML = (resultado);
}

function mdc(){
    let x = prompt('Digite o primeiro valor: ');
    let y = prompt('Digite o segundo valor: ');

    for(let i = x; i>0; i--){
        if(x%i == 0 && y%i == 0){
            document.getElementById("resposta").innerHTML = ('O MDC entre o número ' + x + ' e o número ' + y + ' é ' + i);
            break;
        }
    }
}

function primo(){

    let n = parseInt(prompt("Informe um número: "));

    let divisores = 0;
    for(i = 1; i <= n; i++) {
         if(n%i == 0) {
             divisores++;
         }
    }

    if (divisores == 2) {
      document.getElementById("resposta").innerHTML = ("O número informado é primo!")
    } else {
        document.getElementById("resposta").innerHTML =("O número informado não é primo!")
    }
}

function quickSort(){
    function metodo_quickSort(lista, esquerda, direita){
        let i = esquerda;
        let j = direita;
        let centro = Math.floor((i + j)/2);
      
        while(i <= j){
          while(lista[i] < lista[centro]){
            i++;
          }
      
          while(lista[j] > lista[centro]){
            j--;
          }
      
          if(i <= j){
            let auxiliar = lista[i];
            lista[i] = lista[j];
            lista[j] = auxiliar;
            i++;
            j--;
          }
        }
        
        let indice = i;
        
        if(indice-1 > esquerda){
          metodo_quickSort(lista, esquerda, indice-1);    
        }
      
        if(indice < direita){
          metodo_quickSort(lista, indice, direita);
        }
        return lista;
      }
      let lista = [];
      let numeroDeTermos = prompt("Número de termos na lista: ");
      let termo;
      for(let i=1; i<=numeroDeTermos; i++){
          termo = prompt("Digite o " + i + "º número: ");
          lista.push(termo);
      }
      
      let lista_ordenada = metodo_quickSort(lista, 0, lista.length - 1);
      
      document.getElementById("resposta").innerHTML = (lista_ordenada);
}

function somatorio(){
    let n = prompt("Informe a quantidade de números:");
    let numero;
    let soma = 0;
    let i = 0;
    
    while (i < n) {
      numero = parseInt(prompt("Informe um número"));
      soma = soma + numero;
      i = i + 1;
    }
    
    document.getElementById("resposta").innerHTML = ("A soma dos " + n + " números é " + soma);
}