const form = document.getElementById("inscricao");

const statusBox =
  document.getElementById("status");


form.addEventListener("submit", function(event) {

  event.preventDefault();


  if (!form.checkValidity()) {

    form.reportValidity();

    return;

  }


  const dados =
    new FormData(form);


  const nome =
    dados.get("nome");


  const modalidade =
    dados.get("modalidade");


  statusBox.textContent =
    "Ficha preenchida com sucesso, " +
    nome +
    "! Modalidade escolhida: " +
    modalidade +
    ".";


  statusBox.style.color =
    "#55c7ff";


  statusBox.scrollIntoView({

    behavior: "smooth",

    block: "center"

  });

});


form.addEventListener("reset", function() {

  statusBox.textContent = "";

});
