function clicou(){
//    alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.gtbatelecom.com.br/");
    //window.location.href = "https://www.gtbatelecom.com.br/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui...."

}

function load(){
    alert("pagina carregada...")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

//alert(soma(5,10));

// var validar;

// function validaIdade(idade){
//    // var validar;
//     if(idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual a sua idade ");
// console.log(validaIdade(idade));












//alert(setReplace("Vai Japão", "Japão", "Brasil"));


// var d = new Date();
// alert(d);

// var d = new Date();
// alert(d.getDay());
// alert(d.getMonth()+1);



// var count = 0;
// while(count < 5){
//     console.log(count);
//     alert(count);
//     count++;
// }

// var count;
// for(count=0; count <=5; count++){
//     alert(count);
// }


// var idade = prompt("Qual sua idade");
// //var idade = 18;
// if (idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }





//  var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}];
//  console.log(frutas);
// alert(frutas[1].nome);




// var fruta = {nome: "maça", cor: "vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor);




// var nome = "Celia Lopes";
// var n1 = 5;
// var n2 = 3;
// var frase = "Brasil é o melhor time";
// //alert(nome + " tem " + idade + " anos" );
// //alert(idade + idade2)
// console.log(nome);
// console.log(n1 + n2);
// console.log(frase);
// console.log(frase.replace("Brasil", "Japão"));
// alert(frase.replace("Brasil", "Japão"));
// //console.log(frase.toUpperCase());
// console.log(frase.toLocaleLowerCase());

//var lista =  ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse())
//console.log(lista[0]);
//console.log(lista.toLocaleString()[0])
//console.log(lista.join(" - "));
