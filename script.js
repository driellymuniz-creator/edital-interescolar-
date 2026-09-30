function doPost(e) {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const aba = planilha.getSheets()[0];
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
}
