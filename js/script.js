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
// Variável global para manter a posição atual
var indexPosi = 0;

// Função para avançar o conteúdo
function proximo() {
    var conteudo1 = document.getElementById("situacao");
    var conteudo2 = document.getElementById("objetivos");
    var conteudo3 = document.getElementById("conceitos");
    var conteudo4 = document.getElementById("tipos");

    // Avançar indexPosi, mas não deixar passar do limite
    if (indexPosi < 2) {
        indexPosi++;
    }

    // Atualizar conteúdo com base no indexPosi
    switch (indexPosi) {
        case 1:
            document.getElementById("titulo1").innerHTML = "▶Definindo seus objetivos de investimento";
            conteudo1.style.display = "none";
            conteudo2.style.display = "block";
            conteudo3.style.display = "none";
            conteudo4.style.display = "none";
            break;
        case 2:
            document.getElementById("titulo1").innerHTML = "▶Conheça os Principais Conceitos de Investimento";
            conteudo1.style.display = "none";
            conteudo2.style.display = "none";
            conteudo3.style.display = "block";
            conteudo4.style.display = "none";
            break;
        case 3:
            document.getElementById("titulo1").innerHTML = "▶Estudando Os Tipos De Investimento";
            conteudo1.style.display = "none";
            conteudo2.style.display = "none";
            conteudo3.style.display = "none";
            conteudo4.style.display = "block";
    }
}

// Função para voltar o conteúdo
function anterior() {
    var conteudo1 = document.getElementById("situacao");
    var conteudo2 = document.getElementById("objetivos");
    var conteudo3 = document.getElementById("conceitos");
    var conteudo4 = document.getElementById("tipos");

    // Reduzir indexPosi, mas não deixar passar do limite
    if (indexPosi > 0) {
        indexPosi--;
    }

    // Atualizar conteúdo com base no indexPosi
    switch (indexPosi) {
        case 0:
            document.getElementById("titulo1").innerHTML = "▶Entendendo Sua Situação Atual";
            conteudo1.style.display = "block";
            conteudo2.style.display = "none";
            conteudo3.style.display = "none";
            break;
        case 1:
            document.getElementById("titulo1").innerHTML = "▶Definindo seus objetivos de investimento";
            conteudo1.style.display = "none";
            conteudo2.style.display = "block";
            conteudo3.style.display = "none";
            break;
        case 3:
            document.getElementById("titulo1").innerHTML = "▶Estudando Os Tipos De Investimento";
            conteudo1.style.display = "none";
            conteudo2.style.display = "none";
            conteudo3.style.display = "none";
            conteudo4.style.display = "block";
    }
}

/*
function proximo(indexPosi) {
    var conteudo1 = document.getElementById("situacao");
    var conteudo2 = document.getElementById("objetivos");
    var conteudo3 = document.getElementById("conceitos");

    console.log(conteudo1);
    console.log(conteudo2);
    console.log(conteudo3);
 
    indexPosi++;
    console.log(indexPosi);
    switch(indexPosi) {
        case 1:
            document.getElementById("titulo1").innerHTML="▶Definindo seus objetivos de investimento"
            conteudo1.style.display="none"
            conteudo2.style.display="block"
            conteudo3.style.display="none"
        case 2:
            document.getElementById("titulo1").innerHTML="▶Conheça os Principais Conceitos de Investimento"
            conteudo1.style.display="none"
            conteudo2.style.display="none"
            conteudo3.style.display="block"
            
    }
}

function anterior(indexPosi) {
    var conteudo1 = document.getElementById("situacao");
    var conteudo2 = document.getElementById("objetivos");
    var conteudo3 = document.getElementById("conceitos");

    console.log(conteudo1);
    console.log(conteudo2);
    console.log(conteudo3);

    indexPosi--;
    console.log(indexPosi);
    switch(indexPosi) {
        case -1:
            document.getElementById("titulo1").innerHTML="▶Definindo seus objetivos de investimento"
            conteudo1.style.display="block"
            conteudo2.style.display="none"
            conteudo3.style.display="none"
        case -2:
            document.getElementById("titulo1").innerHTML="▶Conheça os Principais Conceitos de Investimento"
            conteudo1.style.display="none"
            conteudo2.style.display="none"
            conteudo3.style.display="block"
            
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