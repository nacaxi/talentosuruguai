// Em telas pequenas, mostra um aviso discreto (e fechável)
// no lugar do alert() que bloqueava a página.

const ehTelaPequena = window.matchMedia("(max-width: 800px)").matches;

if (ehTelaPequena) {
    const aviso = document.createElement("div");
    aviso.className = "aviso";
    aviso.setAttribute("role", "status");

    const texto = document.createElement("p");
    texto.textContent = "Sabia que esse site fica ainda melhor no computador?";

    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Entendi";
    botao.addEventListener("click", () => aviso.remove());

    aviso.append(texto, botao);
    document.body.append(aviso);
}