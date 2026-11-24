<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
</head>
<body>

    <form id="formulario">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>
        <br><br>

        <label for="email">E-mail:</label>
        <input type="email" id="email" required>
        <br><br>

        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone">
        <br><br>

        <button type="button" id="salvar">Salvar</button>
    </form>

    <script>
        document.getElementById("salvar").addEventListener("click", function () {

            // Cria um objeto com os dados do formulário
            const usuario = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                telefone: document.getElementById("telefone").value
            };

            // Salva o objeto no localStorage
            localStorage.setItem("usuario", JSON.stringify(usuario));

            alert("Dados salvos com sucesso!");

            console.log(usuario);
        });

        // Recuperar os dados salvos
        const dadosSalvos = localStorage.getItem("usuario");

        if (dadosSalvos) {
            const usuario = JSON.parse(dadosSalvos);

            document.getElementById("nome").value = usuario.nome;
            document.getElementById("email").value = usuario.email;
            document.getElementById("telefone").value = usuario.telefone;
        }
    </script>

</body>
</html>
