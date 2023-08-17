document.getElementById("inputForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome1 = document.getElementById("nome1").value;
    const idade1 = parseInt(document.getElementById("idade1").value);
    const nome2 = document.getElementById("nome2").value;
    const idade2 = parseInt(document.getElementById("idade2").value);
    const nome3 = document.getElementById("nome3").value;
    const idade3 = parseInt(document.getElementById("idade3").value);
    const nome4 = document.getElementById("nome4").value;
    const idade4 = parseInt(document.getElementById("idade4").value);
    const nome5 = document.getElementById("nome5").value;
    const idade5 = parseInt(document.getElementById("idade5").value);

    const media = (idade1 + idade2 + idade3 + idade4 + idade5) / 5;

    let maiorIdade = "";
    let nomeMaior = "";

    if (idade1 > idade2) {
        maiorIdade = idade1;
        nomeMaior = nome1;
    }else if (idade2 > idade3){
        maiorIdade = idade2;
        nomeMaior = nome2;
    }else if (idade3 > idade4){
        maiorIdade = idade3;
        nomeMaior = nome3;
    }else if (idade4 > idade5){
        maiorIdade = idade4;
        nomeMaior = nome4;
    }else{
        maiorIdade = idade5;
        nomeMaior = nome5;
    }



    document.getElementById("media").textContent = media.toFixed(2);
    document.getElementById("maiorIdade").textContent = maiorIdade;
    document.getElementById("nomeMaior").textContent = nomeMaior;

    document.getElementById("resultado").classList.remove("hidden");
    
});
