/* =====================================================================
   CONFIGURAÇÃO DA OFERTA — edite só este arquivo.
   ===================================================================== */
window.OFERTA = {
  // 1) LINKS DE CHECKOUT DA CAKTO (um por opção). Troque pelos links reais.
  //    Enquanto estiverem com "COLE_AQUI", o formulário avisa e não redireciona.
  checkout: {
    "1": "https://pay.cakto.com.br/9via5ky",
    "2": "https://pay.cakto.com.br/7iwvxkw",
    "3": "https://pay.cakto.com.br/36j5nnd"
  },

  // Preenche nome, e-mail e telefone no checkout da Cakto pela URL.
  // Confirme na Cakto os nomes dos parâmetros aceitos antes de ativar.
  prefillCheckout: true,
  prefillParams: { nome: "name", email: "email", telefone: "phone" },

  // 2) ONDE OS ENDEREÇOS SÃO SALVOS (URL do Web App do Google Apps Script).
  //    Veja README.md → "Salvar endereços na planilha". Sem isso, os
  //    endereços NÃO são guardados.
  enderecoEndpoint: "https://script.google.com/macros/s/AKfycbyKyfroaJunVRSXMYZIVX6T8hqHzsLS0sPpmHjsWXrBnv-FmHEPoYg-4stNfbY0f8oVrQ/exec",

  // 3) META PIXEL (opcional). Deixe "" para desativar.
  pixelId: "1657125882823147",

  // 4) PREÇOS. "de" = valor riscado. Use SOMENTE um preço que já foi
  //    praticado de verdade (Código de Defesa do Consumidor e regras da Meta).
  opcoes: {
    "1": { nome: "Calendário 2027", por: "20,00", de: "39,90",
           itens: ["Calendário Nossa Senhora de Fátima 2027 — Edição Especial"] },
    "2": { nome: "Calendário + Bônus Digital", por: "40,00", de: "69,90",
           itens: ["Calendário Nossa Senhora de Fátima 2027 — Edição Especial",
                   "Bônus digital surpresa enviado por e-mail"] },
    "3": { nome: "Kit Fé", por: "60,00", de: "99,90",
           itens: ["Calendário Nossa Senhora de Fátima 2027 — Edição Especial",
                   "Terço de Nossa Senhora de Fátima",
                   "Bônus digital surpresa enviado por e-mail"] }
  },

  // 5) URGÊNCIA HONESTA. Só preencha com informação verdadeira.
  //    Ex.: "15/12/2026". Deixe "" para não mostrar data.
  precoValidoAte: "",
  //    Ex.: "Tiragem limitada a 2.000 unidades". Deixe "" para esconder.
  tiragem: "Edição especial de tiragem limitada",

  // 6) DEPOIMENTOS. Enquanto true, aparece o aviso "exemplos ilustrativos".
  //    Troque pelos depoimentos reais em index.html e mude para false.
  depoimentosIlustrativos: true,

  // 7) DADOS DA EMPRESA (obrigatórios no rodapé — Decreto 7.962/2013 e Meta).
  empresa: {
    nome: "Congregação de Fátima",
    cnpj: "51.546.218/0001-87",
    email: "southerngrowthdigital@gmail.com",
    prazoEnvio: "Enviamos para todo o Brasil com código de rastreio."
  }
};
