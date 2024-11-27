$(document).ready(function () {
  //.Ready quando o documento estiver pronto

  $("form").on("submit", function (e) {
    e.preventDefault();
    // Função para nao atualizar a pagina após apertar no botão
    const addTarefa = $("#input-tarefa").val();
    // Const pegando o valor atribuido ao input
    const novaTarefa = $(` 
      <li 
      style="padding: 8px;" 
      >
      </li>`).text(addTarefa);
    // Const criando o estilo da tarefa adicionada

    $(novaTarefa).appendTo("ul"); // Adicionando o valor na const nova tarefa a um "Ul"
    $("#input-tarefa").val(""); // Limpando o formulario após o uso || PRECISA ser o ID funcionar (Por que liga diretamente o input)
  });

  $("ul").on("click", "li", function () {
    /* Ao clicar(Click) no UL ele traibui a função abaixo (toggleClass) ao LI dando para ele a classe "Completa"
    Basicamente adiciona uma classe nova ao Li, fazendo com que "encaixe" com a estilização do CSS */
    $(this).toggleClass("tarefa-finalizada");
  });
});

/*
this = Se refere ao proprietario do que foi inserido, por exemplo:

  $(document).ready(function (){
    $(this) // this document.ready function  
  });
  
*/
