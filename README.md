# 🪐 Hermes Rover — Global Solution 2026

## 📋 Sobre o Projeto
O **Hermes Rover** é um projeto conceitual e prático que une Inteligência Artificial e robótica para revolucionar a meteorologia e a exploração aeroespacial. Desenvolvido para atuar tanto na Terra quanto em Marte, o rover foi projetado especificamente para resolver um dos maiores problemas da exploração espacial atual: os atrasos de comunicação que superam 20 minutos entre os comandos da Terra e a resposta do veículo. 

Através de uma IA integrada autossuficiente, o Hermes Rover é capaz de tomar decisões imediatas, prever desastres climáticos rápidos (como tempestades de areia) e ativar sistemas de ancoragem automáticos para proteger a si mesmo e enviar relatórios em tempo real para as bases operacionais.

Este repositório contém a aplicação web (Landing Page) adaptada com recursos interativos em **JavaScript Puro (Vanilla JS)** para a disciplina de **Web Development**, sob a orientação do Prof. Wellington Cidade Silva.

---

## 🚀 Funcionalidades Implementadas (JavaScript Puro)

Em conformidade com os requisitos solicitados na entrega de Web Development, foram desenvolvidas e integradas as seguintes funcionalidades sem a utilização de nenhum framework:

1. **🎨 Sistema de Troca de Temas (Background Dinâmico)**
   * Permite alternar a paleta de cores inteira do site em tempo real através de 3 opções de botões minimalistas no cabeçalho:
     * **Padrão:** O visual escuro e azul espacial original do projeto.
     * **Marte:** Tons de vermelho, poeira e laranja cor de ferrugem.
     * **Claro / High-Tech:** Uma interface limpa de alto contraste inspirada em laboratórios de monitoramento.

2. **📸 Slideshow Interativo (Galeria do Rover)**
   * Carrossel de imagens dinâmico implementado na seção "Problema".
   * Contém 3 imagens totalmente relacionadas ao tema de exploração e meteorologia espacial.
   * Apresenta controles de navegação suaves (Anterior/Próximo) e efeitos de transição (*fade*).

3. **🧠 Quiz Dinâmico de 10 Perguntas**
   * Um quiz completo contendo 10 questões de múltipla escolha baseadas inteiramente no conteúdo informativo da Landing Page.
   * Renderização 100% dinâmica via JavaScript usando estruturas de dados de objetos.
   * Sistema de validação integrado que obriga o usuário a responder a todas as perguntas antes de enviar.
   * Exibição do resultado final na tela com opção de reiniciar o teste.

4. **📝 Validação de Formulário de Contato**
   * Área de envio de mensagens para a equipe.
   * Validação em tempo real que impede o envio de dados caso algum campo (`Nome`, `E-mail` ou `Mensagem`) esteja vazio.
   * Exibição de mensagens customizadas de erro (vermelho) ou de sucesso (verde) conforme o preenchimento.

---

## 🛠️ Tecnologias Utilizadas

O projeto preza por uma estrutura limpa, moderna, responsiva e performática, utilizando exclusivamente tecnologias nativas da web:
* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização baseada em variáveis globais (`:root`), transições suaves e responsividade via *media queries*.
* **JavaScript:** Lógica pura (Vanilla) para manipulação de DOM, tratamento de eventos e gerenciamento de estado dos temas/quiz.

---

## 📂 Estrutura do Repositório

```text
├── assets/                  # Imagens, logotipos e diagramas técnicos (.png, .svg)
├── css/
│   └── estilo.css           # Arquivo principal de estilos e variáveis de tema
├── js/
│   └── script.js            # Lógica pura do slideshow, temas, quiz e formulário
├── index.html               # Página principal da Landing Page
├── equipe.txt               # Arquivo com dados dos integrantes e link do repositório
├── AI.md                    # Relatório de interações e uso de IA no projeto
└── README.md                # Explicação do projeto
```