const NOME_ABA = "Inscrições";

function doPost(e) {
  try {
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    let aba = planilha.getSheetByName(NOME_ABA);

    if (!aba) {
      aba = planilha.insertSheet(NOME_ABA);

      aba.appendRow([
        "Data/Hora",
        "Nome completo",
        "Data de nascimento",
        "Idade",
        "Escola",
        "Série/Turma",
        "Modalidade",
        "Responsável pela equipe",
        "Telefone",
        "Declaração",
        "Responsável legal",
        "CPF",
        "Telefone do responsável"
      ]);
    }

    const dados = e.parameter;

    aba.appendRow([
      new Date(),
      dados.nome || "",
      dados.nascimento || "",
      dados.idade || "",
      dados.escola || "",
      dados.turma || "",
      dados.modalidade || "",
      dados.responsavel_equipe || "",
      dados.telefone_equipe || "",
      dados.declaracao || "",
      dados.responsavel_legal || "",
      dados.cpf || "",
      dados.telefone_responsavel || ""
    ]);

    return ContentService
      .createTextOutput("OK")
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (erro) {
    return ContentService
      .createTextOutput("ERRO: " + erro)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
