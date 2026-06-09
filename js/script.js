function mudarTema(tema) {
    // Limpa os temas adicionais
    document.body.classList.remove('tema-marte', 'tema-claro');
    
    // Se não for o padrão, adiciona a classe correspondente
    if (tema !== 'padrao') {
        document.body.classList.add(`tema-${tema}`);
    }
}

// --- LÓGICA DO SLIDESHOW ---
let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementsByClassName("slide").length > 0) {
        mostrarSlides(slideIndex);
    }
});

function mudarSlide(n) {
    mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex - 1].style.display = "block";  
}

// --- LÓGICA DO QUIZ DINÂMICO ---

const dadosQuiz = [
    {
        pergunta: "1. Qual é o principal problema na comunicação com Rovers Espaciais atualmente?",
        opcoes: {
            a: "Falta de energia solar",
            b: "Atrasos que superam 20 minutos",
            c: "Interferência de asteroides",
            d: "Incompatibilidade de sinal"
        },
        resposta: "b"
    },
    {
        pergunta: "2. Quantos motores e garras de ancoragem possui o Hermes Rover?",
        opcoes: {
            a: "4 motores e 2 garras",
            b: "1 motor e 4 garras",
            c: "2 motores contínuos e 4 garras",
            d: "2 motores e 2 garras"
        },
        resposta: "c"
    },
    {
        pergunta: "3. O Hermes Rover foi projetado para operar em quais planetas?",
        opcoes: {
            a: "Apenas em Marte",
            b: "Terra e Marte",
            c: "Apenas na Lua",
            d: "Vênus e Marte"
        },
        resposta: "b"
    },
    {
        pergunta: "4. Qual é o principal benefício da IA integrada no Rover?",
        opcoes: {
            a: "Capacidade de comandos imediatos sem intervenção humana",
            b: "Tradução de idiomas",
            c: "Aumento da velocidade máxima",
            d: "Melhoria na captação de fotos"
        },
        resposta: "a"
    },
    {
        pergunta: "5. Para qual Global Solution o projeto foi criado?",
        opcoes: {
            a: "Global Solution 2024",
            b: "Global Solution 2025",
            c: "Global Solution 2026",
            d: "Global Solution 2030"
        },
        resposta: "c"
    },
    {
        pergunta: "6. Qual empresa/grupo assina o projeto Hermes Rover?",
        opcoes: {
            a: "SpaceX",
            b: "NASA",
            c: "Grupo Omnisoft",
            d: "FIAP Space"
        },
        resposta: "c"
    },
    {
        pergunta: "7. Que tipo de tempestade o Rover é focado em estudar?",
        opcoes: {
            a: "Tempestades solares",
            b: "Tempestades elétricas",
            c: "Tempestades de neve",
            d: "Tempestades de areia"
        },
        resposta: "d"
    },
    {
        pergunta: "8. Além de empresas do ramo espacial, quem mais se beneficia com o Rover?",
        opcoes: {
            a: "Estudos climáticos e cidades inteiras (previsão de desastres)",
            b: "Empresas de mineração",
            c: "Turismo espacial comercial",
            d: "Agricultores marcianos"
        },
        resposta: "a"
    },
    {
        pergunta: "9. Quais ODS (Objetivos de Desenvolvimento Susténtavel) esse projeto engloba?",
        opcoes: {
            a: "ODS 1 (Erradicação da pobreza) e ODS 2 (Fome zero e agricultura sustentável)",
            b: "ODS 9 (Inovação e infraestrutura) e 13 (Ação contra a mudança global do clima)",
            c: "ODS 5 (Igualdade de gênero) e ODS 10 (Redução das desigualdades)",
            d: "ODS 12 (Consumo e produção responsáveis) e ODS 14 (Vida na água)"
        },
        resposta: "b"
    },
    {
        pergunta: "10. Segundo a seção 'Dia-a-dia', a análise de ambiente do Rover é capaz de:",
        opcoes: {
            a: "Aumentar a gravidade do local",
            b: "Construir bases espaciais",
            c: "Prever desastres rapidamente",
            d: "Substituir satélites de comunicação"
        },
        resposta: "c"
    }
];

function carregarQuiz() {
    const container = document.getElementById('perguntas-container');
    if (!container) return;

    let htmlPerguntas = '';

    dadosQuiz.forEach((item, index) => {
        htmlPerguntas += `
            <div class="pergunta-bloco">
                <h3>${item.pergunta}</h3>
                ${Object.keys(item.opcoes).map(letra => `
                    <label class="opcao-label">
                        <input type="radio" name="pergunta${index}" value="${letra}">
                        ${letra.toUpperCase()}) ${item.opcoes[letra]}
                    </label>
                `).join('')}
            </div>
        `;
    });

    container.innerHTML = htmlPerguntas;
}

function calcularResultado() {
    let acertos = 0;
    let respondidas = 0;

    dadosQuiz.forEach((item, index) => {
        const selecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
        
        if (selecionada) {
            respondidas++;
            if (selecionada.value === item.resposta) {
                acertos++;
            }
        }
    });

    if (respondidas < dadosQuiz.length) {
        alert("Ei! Você precisa responder todas as 10 perguntas antes de ver o resultado.");
        return;
    }

    document.getElementById('quiz-form').classList.add('escondido');
    const divResultado = document.getElementById('resultado-quiz');
    const textoResultado = document.getElementById('texto-resultado');
    
    divResultado.classList.remove('escondido');
    textoResultado.innerText = `Você acertou ${acertos} de 10 perguntas!`;
}

function refazerQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('resultado-quiz').classList.add('escondido');
    document.getElementById('quiz-form').classList.remove('escondido');
   document.getElementById('secao-quiz').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", carregarQuiz);

// --- LÓGICA DE VALIDAÇÃO DO FORMULÁRIO ---
document.addEventListener("DOMContentLoaded", function() {
    const formRover = document.getElementById('form-rover');
    
    if (formRover) {
        formRover.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            const msgErro = document.getElementById('msg-erro');
            const msgSucesso = document.getElementById('msg-sucesso');
            
            msgErro.classList.add('escondido');
            msgSucesso.classList.add('escondido');
            
            if (nome === '' || email === '' || mensagem === '') {
                msgErro.classList.remove('escondido');
            } else {
                msgSucesso.classList.remove('escondido');
                formRover.reset();
            }
        });
    }
});

// --- LÓGICA DO MENU HAMBÚRGUER ---
document.addEventListener("DOMContentLoaded", function() {
    const btnMobile = document.getElementById('btn-mobile');
    const navMenu = document.getElementById('nav-menu');
    const linksMenu = document.querySelectorAll('#nav-menu ul li a');

    if (btnMobile && navMenu) {
        btnMobile.addEventListener('click', function() {
            navMenu.classList.toggle('ativo');
        });
        linksMenu.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('ativo');
            });
        });
    }
});