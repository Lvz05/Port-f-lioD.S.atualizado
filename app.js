let materiaAtual = "todas";
let buscaAtual = "";
let cartaPendenteId = null;
let ultimoFocoModal = null;

const ICONES = {
  todas: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  "back-end": `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><line x1="7" y1="7" x2="7.01" y2="7"/><line x1="7" y1="17" x2="7.01" y2="17"/></svg>`,
  "banco-de-dados": `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>`,
  "front-end": `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  versionamento: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
  ia: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="12" cy="12" r="4"/></svg>`,
  tcc: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>`
};

const ICONE_PASTA = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`;
const ICONE_ARQUIVO = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
const ICONE_LINK = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const ICONE_CADEADO = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

function esc(texto) {
  const div = document.createElement("div");
  div.textContent = texto || "";
  return div.innerHTML;
}

function normalizar(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function normalizarSenha(texto) {
  return normalizar(texto).replace(/\s+/g, "");
}

function montarPerfil() {
  document.title = `Portfólio • ${PERFIL.nome}`;
  document.getElementById("topbar-nick").textContent = PERFIL.nickname;
  document.getElementById("perfil-nickname").textContent = PERFIL.nickname;
  document.getElementById("perfil-nome").textContent = PERFIL.nome;
  document.getElementById("perfil-tag").textContent = PERFIL.tag || "";
  document.getElementById("perfil-sinopse").textContent = PERFIL.sinopse || "";

  const fotoEl = document.getElementById("perfil-foto");
  if (PERFIL.foto) {
    fotoEl.src = encodeURI(PERFIL.foto);
  }
  fotoEl.alt = `Foto de ${PERFIL.nome}`;

  const githubEl = document.getElementById("link-github");
  githubEl.href = PERFIL.github || "#";
  githubEl.style.display = PERFIL.github ? "inline-flex" : "none";

  const linkedinEl = document.getElementById("link-linkedin");
  linkedinEl.href = PERFIL.linkedin || "#";
  linkedinEl.style.display = PERFIL.linkedin ? "inline-flex" : "none";

  let totalSemanas = 0;
  let totalAnexos = 0;

  MATERIAS.forEach((m) => {
    totalSemanas += m.semanas.length;
    m.semanas.forEach((s) => {
      totalAnexos += (s.anexos || []).length;
    });
  });

  document.getElementById("stat-materias").textContent = MATERIAS.length;
  document.getElementById("stat-semanas").textContent = totalSemanas;
  document.getElementById("stat-anexos").textContent = totalAnexos;
}

function atualizarFadeDestaques() {
  const secao = document.getElementById("highlights-section");
  const lista = document.getElementById("highlights-list");
  if (!secao || !lista) return;

  const temEsquerda = lista.scrollLeft > 8;
  const temDireita = lista.scrollLeft + lista.clientWidth < lista.scrollWidth - 8;

  secao.classList.toggle("tem-scroll-esquerda", temEsquerda);
  secao.classList.toggle("tem-scroll-direita", temDireita);
}

function atualizarEstadoDestaques() {
  const lista = document.getElementById("highlights-list");
  if (!lista) return;

  lista.querySelectorAll(".highlight-btn").forEach((btn) => {
    const ativo = btn.dataset.materia === materiaAtual;
    btn.classList.toggle("ativo", ativo);
    btn.setAttribute("aria-pressed", ativo ? "true" : "false");
  });
}

function renderizarDestaques() {
  const lista = document.getElementById("highlights-list");
  const itens = [
    { id: "todas", nome: "Todas" },
    ...MATERIAS.map((m) => ({ id: m.id, nome: m.nome }))
  ];

  lista.innerHTML = itens
    .map((item) => {
      const ativo = item.id === materiaAtual;
      const icone = ICONES[item.id] || ICONES.todas;
      return `
        <button
          type="button"
          class="highlight-btn ${ativo ? "ativo" : ""}"
          data-materia="${esc(item.id)}"
          aria-pressed="${ativo ? "true" : "false"}"
        >
          <span class="highlight-circle">
            <span class="highlight-inner">${icone}</span>
          </span>
          <span class="highlight-label">${esc(item.nome)}</span>
        </button>
      `;
    })
    .join("");

  lista.querySelectorAll(".highlight-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      materiaAtual = btn.dataset.materia;
      atualizarEstadoDestaques();
      renderizarFeed();
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  });

  lista.addEventListener("scroll", atualizarFadeDestaques, { passive: true });
  window.addEventListener("resize", atualizarFadeDestaques, { passive: true });
  requestAnimationFrame(atualizarFadeDestaques);
}

function abrirModalSenha(cartaId, origemEl) {
  const carta = typeof CARTAS !== "undefined" ? CARTAS[cartaId] : null;
  if (!carta) return;

  cartaPendenteId = cartaId;
  ultimoFocoModal = origemEl || document.activeElement;

  const modal = document.getElementById("modal-senha");
  const input = document.getElementById("modal-input");
  const erro = document.getElementById("modal-erro");

  document.getElementById("modal-materia").textContent = carta.materia;
  document.getElementById("modal-desc").textContent = `Digite a senha de ${carta.materia} para abrir a carta de agradecimento.`;
  input.value = "";
  erro.hidden = true;
  modal.hidden = false;
  document.body.classList.add("modal-aberto");

  setTimeout(() => {
    try {
      input.focus({ preventScroll: true });
    } catch {
      input.focus();
    }
  }, 30);
}

function fecharModalSenha() {
  const modal = document.getElementById("modal-senha");
  modal.hidden = true;
  document.body.classList.remove("modal-aberto");
  cartaPendenteId = null;

  if (ultimoFocoModal && typeof ultimoFocoModal.focus === "function") {
    try {
      ultimoFocoModal.focus({ preventScroll: true });
    } catch {
      ultimoFocoModal.focus();
    }
  }
  ultimoFocoModal = null;
}

function configurarModalSenha() {
  const modal = document.getElementById("modal-senha");
  const form = document.getElementById("modal-form");
  const input = document.getElementById("modal-input");
  const erro = document.getElementById("modal-erro");

  document.getElementById("modal-fechar").addEventListener("click", fecharModalSenha);
  document.getElementById("modal-cancelar").addEventListener("click", fecharModalSenha);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModalSenha();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) fecharModalSenha();
  });

  input.addEventListener("input", () => {
    erro.hidden = true;
    input.classList.remove("modal-input-erro");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cartaPendenteId || !CARTAS[cartaPendenteId]) return;

    const carta = CARTAS[cartaPendenteId];
    const digitada = normalizarSenha(input.value);
    const correta = normalizarSenha(carta.senha);

    if (digitada && digitada === correta) {
      const url = `carta.html?m=${encodeURIComponent(cartaPendenteId)}&s=${encodeURIComponent(correta)}`;
      window.location.href = url;
      return;
    }

    erro.hidden = false;
    input.classList.remove("modal-input-erro");
    void input.offsetWidth;
    input.classList.add("modal-input-erro");
    input.select();
  });
}

function renderizarFeed() {
  const grid = document.getElementById("semanas-grid");
  const tituloEl = document.getElementById("feed-titulo");
  const subtituloEl = document.getElementById("feed-subtitulo");

  const materiasFiltradas =
    materiaAtual === "todas"
      ? MATERIAS
      : MATERIAS.filter((m) => m.id === materiaAtual);

  const termo = normalizar(buscaAtual);
  const cartoes = [];

  materiasFiltradas.forEach((materia) => {
    materia.semanas.forEach((item) => {
      const textoBusca = normalizar(
        [
          materia.nome,
          item.semana,
          item.data,
          item.titulo,
          item.resumo,
          ...(item.anexos || []).map((a) => a.nome)
        ].join(" ")
      );

      if (!termo || textoBusca.includes(termo)) {
        cartoes.push({ materia, item });
      }
    });
  });

  if (materiaAtual === "todas") {
    tituloEl.textContent = "Todas as Matérias";
    subtituloEl.textContent = termo
      ? `${cartoes.length} ${cartoes.length === 1 ? "atividade encontrada" : "atividades encontradas"}`
      : "Registros semanais do 4º bimestre";
  } else {
    const atual = materiasFiltradas[0];
    tituloEl.textContent = atual.nome;
    subtituloEl.textContent = termo
      ? `${cartoes.length} ${cartoes.length === 1 ? "atividade encontrada" : "atividades encontradas"} em ${atual.nome}`
      : atual.descricao;
  }

  if (cartoes.length === 0) {
    const msg = termo
      ? "Nenhuma atividade encontrada para essa busca."
      : "Nenhuma atividade adicionada nessa matéria ainda.";
    grid.innerHTML = `<div class="empty-state"><p>${msg}</p></div>`;
    return;
  }

  grid.innerHTML = cartoes
    .map(({ materia, item }) => {
      const anexos = item.anexos || [];
      const listaAnexos =
        anexos.length > 0
          ? `<div class="attachment-list">
              ${anexos
                .map((anexo) => {
                  if (anexo.tipo === "carta") {
                    return `
                      <button type="button" class="attachment-link attachment-btn" data-carta="${esc(anexo.cartaId)}">
                        <span class="attachment-left">
                          ${ICONE_CADEADO}
                          <span class="attachment-name">${esc(anexo.nome)}</span>
                        </span>
                        <span class="attachment-arrow" aria-hidden="true">→</span>
                      </button>
                    `;
                  }

                  const externo = anexo.tipo === "link" || /^https?:\/\//i.test(anexo.link || "");
                  const href = externo ? anexo.link : encodeURI(anexo.link || "");
                  const icone = externo ? ICONE_LINK : ICONE_ARQUIVO;
                  return `
                    <a class="attachment-link" href="${esc(href)}" target="_blank" rel="noopener noreferrer">
                      <span class="attachment-left">
                        ${icone}
                        <span class="attachment-name">${esc(anexo.nome)}</span>
                      </span>
                      <span class="attachment-arrow" aria-hidden="true">↗</span>
                    </a>
                  `;
                })
                .join("")}
            </div>`
          : `<div class="empty-attachments">Sem arquivos anexados.</div>`;

      const classeExtra = item.extra ? " week-card-extra" : "";

      return `
        <article class="week-card${classeExtra}">
          <div class="week-card-header">
            <div class="week-badges">
              <span class="badge-materia">${esc(materia.nome)}</span>
              <span class="badge-semana">${esc(item.semana)}</span>
            </div>
            ${item.data ? `<span class="week-date">${esc(item.data)}</span>` : ""}
          </div>

          <h3 class="week-title">${esc(item.titulo)}</h3>
          <p class="week-summary">${esc(item.resumo)}</p>

          <div class="attachments-box">
            <span class="attachments-label">
              ${ICONE_PASTA}
              Arquivos (${anexos.length})
            </span>
            ${listaAnexos}
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll("[data-carta]").forEach((btn) => {
    btn.addEventListener("click", () => abrirModalSenha(btn.dataset.carta, btn));
  });
}

function configurarBotaoTopo() {
  const btnTopo = document.getElementById("btn-topo");
  if (!btnTopo) return;

  const atualizarVisibilidade = () => {
    btnTopo.hidden = window.scrollY < 360;
  };

  window.addEventListener("scroll", atualizarVisibilidade, { passive: true });
  atualizarVisibilidade();

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  montarPerfil();
  renderizarDestaques();
  renderizarFeed();
  configurarModalSenha();
  configurarBotaoTopo();

  const inputBusca = document.getElementById("busca-input");
  const btnLimpar = document.getElementById("busca-limpar");

  const atualizarBusca = () => {
    buscaAtual = inputBusca.value;
    if (btnLimpar) {
      btnLimpar.hidden = buscaAtual.length === 0;
    }
    renderizarFeed();
  };

  inputBusca.addEventListener("input", atualizarBusca);

  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      inputBusca.value = "";
      atualizarBusca();
      inputBusca.focus();
    });
  }
});
