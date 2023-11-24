document.addEventListener("DOMContentLoaded", function () {
    // Seletor para o elemento de resultado
    var resultadoElemento = document.getElementById("resultado");

    // Variáveis para armazenar os operandos e o operador
    var operando1 = "";
    var operando2 = "";
    var operador = "";

    // Função para atualizar o resultado na tela
    function atualizarResultado() {
        resultadoElemento.textContent = operando1 + operador + operando2;
    }

    // Função para realizar o cálculo
    function calcular() {
        var resultado;

        // Converter os operandos para números
        var num1 = parseFloat(operando1);
        var num2 = parseFloat(operando2);

        // Realizar a operação com base no operador
        switch (operador) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            // Adicione mais casos para outras operações, se necessário
        }

        // Atualizar o resultado na tela
        resultadoElemento.textContent = resultado;

        // Armazenar o resultado como operando1 para permitir operações subsequentes
        operando1 = resultado.toString();

        // Limpar os operando2 e o operador
        operando2 = "";
        operador = "";
    }

    // Adicionar eventos de clique aos botões numéricos
    var botoesNumericos = document.querySelectorAll(".calculadora button:not(#igual)");
    botoesNumericos.forEach(function (botao) {
        botao.addEventListener("click", function () {
            // Verificar se um operador foi definido
            if (operador === "") {
                operando1 += botao.textContent;
            } else {
                operando2 += botao.textContent;
            }

            // Atualizar o resultado na tela
            atualizarResultado();
        });
    });

    // Adicionar evento de clique ao botão de operador
    var botoesOperadores = document.querySelectorAll(".calculadora button[data-operador]");
    botoesOperadores.forEach(function (botao) {
        botao.addEventListener("click", function () {
            // Se um operador já estiver definido, calcular o resultado antes de definir o novo operador
            if (operador !== "" && operando2 !== "") {
                calcular();
            }

            // Definir o novo operador
            operador = botao.textContent;

            // Atualizar o resultado na tela
            atualizarResultado();
        });
    });

    // Adicionar evento de clique ao botão de igual
    var botaoIgual = document.getElementById("igual");
    botaoIgual.addEventListener("click", function () {
        // Verificar se ambos os operandos e o operador estão definidos
        if (operando1 !== "" && operando2 !== "" && operador !== "") {
            // Realizar o cálculo
            calcular();
        }
    });

    // Adicionar evento de clique ao botão de limpar
    var botaoLimpar = document.getElementById("limpar");
    botaoLimpar.addEventListener("click", function () {
        // Limpar todos os valores
        operando1 = "";
        operando2 = "";
        operador = "";

        // Atualizar o resultado na tela
        atualizarResultado();
    });
});
