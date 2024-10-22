function descer(cordY) {
    window.scrollTo({
        top: cordY,
        behavior: "smooth"
    });
}

// ABA DE LOGIN


// BARRA DE PROGRSSO
function atualizarProgrsso() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('.task');
    const progressBar = document.getElementById('progresso');
    let totalCheckboxes = checkboxes.length;
    let checkedCount = 0;

    // Count how many checkboxes are checked
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    // Calculate the progress percentage
    let progressPercentage = (checkedCount / totalCheckboxes) * 100;

    // Update the width of the progress bar
    progressBar.style.width = progressPercentage - 10 + '%';
    progressBar.textContent = Math.round(progressPercentage) + '%';
}

// TROCA DE CONTEUDO
function proximo(indexPosi) {
    var conteudo1 = document.getElementById("situacao");
    var conteudo2 = document.getElementById("objetivos");
    var conteudo3 = document.getElementById("conceitos");

    console.log(conteudo1);
    console.log(conteudo2);
    console.log(conteudo3);

    indexPosi ++;
    switch(indexPosi) {

        case 1:
            document.getElementById("titulo1").innerHTML="▶Definindo seus objetivos de investimento"
            conteudo1.style.display="none"
            conteudo2.style.display="block"
            conteudo3.style.display="none"
    }
}

function anterior(indexPosi) {
    var conteudo1 = document.getElementById("situacao");
    var conteudo2 = document.getElementById("objetivos");
    var conteudo3 = document.getElementById("conceitos");

    console.log(conteudo1);
    console.log(conteudo2);
    console.log(conteudo3);

    indexPosi --;
    switch(indexPosi) {
        case -1:
            conteudo1.style.display="block"
            conteudo2.style.display="none"
            conteudo3.style.display="none"
    }
}





































































/*
const conteudo1 = document.getElementById("situacao");
const conteudo2 = document.getElementById("objetivos");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

const conteudos = ["conteudo1", "conteudo2"]
let indexAtual = 0;


function updateContent(index) {
    conteudo1.textContent = conteudos[index];
}

anterior.indexAtual("click", function() {
    if (indexAtual > 0) {
        indexAtual--;
    } else {
        indexAtual = conteudos.length - 1; // Volta para o último conteúdo se chegar ao início
    }
    updateContent(indexAtual);
});

proximo.addEventListener("click", function() {
    if (indexAtual < conteudos.length - 1) {
        indexAtual++;
    } else {
        indexAtual = 0; // Reinicia para o primeiro conteúdo se chegar ao fim
    }
    updateContent(indexAtual);
});
*/