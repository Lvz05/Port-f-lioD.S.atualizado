const PERFIL = {
  foto: "foto portofolio.jpeg",
  nome: "Lucas Vasconcelos Alves",
  nickname: "Lvz_05",
  tag: "Desenvolvimento de Sistemas • 3º B",
  sinopse: `Estudante de Desenvolvimento de Sistemas organizando os projetos e registros do ano.
Aqui estão separadas as atividades semanais de Back-end, Banco de Dados, Front-end, Versionamento, IA e TCC.`,
  github: "https://github.com/Lvz05",
  linkedin: "https://www.linkedin.com/in/lucas-vasconcelos-alves-8834b8363/"
};

const MATERIAS = [
  {
    id: "back-end",
    nome: "Back-end",
    pasta: "4b/back-end/",
    descricao: "APIs, nuvem, segurança de servidores e testes.",
    semanas: [
      {
        semana: "Semana 22",
        data: "4º Bimestre",
        titulo: "SDKs e serviços em nuvem",
        resumo: "Conceitos de SDKs, proteção de credenciais de API e comparação entre AWS, Azure e Google Cloud.",
        anexos: [
          { nome: "Registro_Backend_Semana_22.pdf", link: "4b/back-end/Registro_Backend_Semana_22.pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 23",
        data: "4º Bimestre",
        titulo: "Express.js e Django",
        resumo: "Rotas, middlewares, tratamento de erros no Express.js, modelos/templates no Django e segurança web.",
        anexos: [
          { nome: "Registro_Backend_Semana_23.pdf", link: "4b/back-end/Registro_Backend_Semana_23.pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 24",
        data: "4º Bimestre",
        titulo: "Segurança de servidores e APIs",
        resumo: "HTTPS com TLS, firewall, hardening, diferença entre autenticação e autorização e monitoramento por logs.",
        anexos: [
          { nome: "Registro_Backend_Semana_24.pdf", link: "4b/back-end/Registro_Backend_Semana_24.pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 25",
        data: "4º Bimestre",
        titulo: "OAuth, auditoria e logs",
        resumo: "Fluxos de autorização OAuth, escopos, expiração de tokens e auditoria centralizada.",
        anexos: [
          { nome: "Registro_Backend_Semana_25.pdf", link: "4b/back-end/Registro_Backend_Semana_25.pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 26",
        data: "4º Bimestre",
        titulo: "Patches, backups e gestão de crises",
        resumo: "Atualizações em homologação, backups completo/incremental/diferencial e resposta a incidentes.",
        anexos: [
          { nome: "Registro_Backend_Semana_26.pdf", link: "4b/back-end/Registro_Backend_Semana_26.pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 27",
        data: "4º Bimestre",
        titulo: "Flask e arquitetura de microsserviços",
        resumo: "Rotas e testes no Flask, monólito vs microsserviços, filas com RabbitMQ/Kafka e Kubernetes.",
        anexos: [
          { nome: "Registro_Backend_Semana_27.pdf", link: "4b/back-end/Registro_Backend_Semana_27.pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 28",
        data: "4º Bimestre",
        titulo: "Testes de integração e desempenho de APIs",
        resumo: "Testes unitários, integração e carga com k6/JMeter e métricas de desempenho.",
        anexos: [
          { nome: "Registro_Backend_Semana_28.pdf", link: "4b/back-end/Registro_Backend_Semana_28.pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Registro Extra",
        data: "4º Bimestre",
        titulo: "Atividade de Registro Extra",
        resumo: "Registro especial reservado para o professor de Back-end. Acesso protegido por senha.",
        extra: true,
        anexos: [
          { nome: "Abrir registro protegido", tipo: "carta", cartaId: "back-end" }
        ]
      }
    ]
  },

  {
    id: "banco-de-dados",
    nome: "Banco de Dados",
    pasta: "4b/banco de dados/",
    descricao: "Modelagem SQL/NoSQL, Redis, MongoDB, sharding, backup e otimização.",
    semanas: [
      {
        semana: "Semana 22",
        data: "4º Bimestre",
        titulo: "TechMarket — SQL ou NoSQL?",
        resumo: "Comparação entre modelagem relacional e coleções no MongoDB.",
        anexos: [
          { nome: "Relatório Semanas 22–24 (Registro 1).pdf", link: "4b/banco de dados/Modelagem e Desenvolvimento de Banco de Dados _ Semanas 22–24 (1) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 23",
        data: "4º Bimestre",
        titulo: "Banco de dados em memória com Redis",
        resumo: "Prática com comandos SET, GET, INCR, INCRBY, DEL e EXPIRE no Redis.",
        anexos: [
          { nome: "Relatório Semanas 22–24 (Registro 2).pdf", link: "4b/banco de dados/Modelagem e Desenvolvimento de Banco de Dados _ Semanas 22–24 (2) (2).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 24",
        data: "4º Bimestre",
        titulo: "Análise de vendas com MongoDB",
        resumo: "Operações CRUD, criação de índices e pipelines com $group, $sum e $lookup.",
        anexos: [
          { nome: "Relatório Semanas 22–24 (Registro 3).pdf", link: "4b/banco de dados/Modelagem e Desenvolvimento de Banco de Dados _ Semanas 22–24 (2) (3).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 25",
        data: "4º Bimestre",
        titulo: "Sharding no MongoDB (ShopWide)",
        resumo: "Configuração de shards no Docker, chave hashed e monitoramento de distribuição.",
        anexos: [
          { nome: "Registro Banco de Dados - Semana 25.pdf", link: "4b/banco de dados/Documento sem título (15) (1) (1) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 26",
        data: "4º Bimestre",
        titulo: "Backup e recuperação no MongoDB",
        resumo: "Testes de backup completo e incremental, simulação de falha e restauração no Codespaces.",
        anexos: [
          { nome: "Registro Banco de Dados - Semana 26.pdf", link: "4b/banco de dados/Documento sem título (15) (2) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 27",
        data: "4º Bimestre",
        titulo: "Otimização de consultas no MongoDB",
        resumo: "Análise com explain('executionStats'), criação de índices e redução de varreduras COLLSCAN.",
        anexos: [
          { nome: "Registro Banco de Dados - Semana 27.pdf", link: "4b/banco de dados/Documento sem título (1) (1) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 28",
        data: "4º Bimestre",
        titulo: "Esquemas e queries básicas no MongoDB",
        resumo: "Modelagem de perfis de usuários e logs de acesso com consultas findOne, find e countDocuments.",
        anexos: [
          { nome: "Registro Banco de Dados - Semana 28.pdf", link: "4b/banco de dados/Documento sem título (2) (1) (2).pdf", tipo: "arquivo" }
        ]
      }
    ]
  },

  {
    id: "front-end",
    nome: "Front-end",
    pasta: "4b/front-end/",
    descricao: "APIs, CI/CD, animações CSS, Lighthouse, ESLint/Prettier e testes E2E.",
    semanas: [
      {
        semana: "Semana 22",
        data: "4º Bimestre",
        titulo: "Integração com serviços externos (REST, GraphQL, OAuth e JWT)",
        resumo: "Comunicação com APIs RESTful e GraphQL, autenticação com Google OAuth/JWT e feedback visual.",
        anexos: [
          { nome: "Programação Front-End - Semana 22.pdf", link: "4b/front-end/Programação Front-End — Semana 22 (2).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 23",
        data: "4º Bimestre",
        titulo: "Esteiras de entrega contínua (CI/CD)",
        resumo: "Mapa mental e estudo sobre pipeline CI/CD, testes com Jest e Cypress, GitHub Actions, Docker e Kubernetes.",
        anexos: [
          { nome: "Registro Front-End - Semana 23.pdf", link: "4b/front-end/Documento sem título (3) - Copia (1) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 24",
        data: "4º Bimestre",
        titulo: "Animações CSS e portfólio interativo",
        resumo: "Uso de transition, @keyframes, responsividade e interatividade com JavaScript no projeto de galeria.",
        anexos: [
          { nome: "Registro Front-End - Semana 24.pdf", link: "4b/front-end/Documento sem título (2) - Copia (2).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 25",
        data: "4º Bimestre",
        titulo: "Otimização e auditoria com Lighthouse",
        resumo: "Análise de desempenho, acessibilidade, boas práticas e SEO no site EcoVida com melhorias no HTML e CSS.",
        anexos: [
          { nome: "Registro Front-End - Semana 25.pdf", link: "4b/front-end/Documento sem título (11) (1) (2).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 26",
        data: "4º Bimestre",
        titulo: "Configurando ESLint e Prettier",
        resumo: "Instalação e integração de ESLint e Prettier para padronização e verificação de código JavaScript.",
        anexos: [
          { nome: "Registro Front-End - Semana 26.pdf", link: "4b/front-end/Documento sem título (12) (1) (2).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 28",
        data: "4º Bimestre",
        titulo: "Testes End-to-End (E2E) com Cypress e CI/CD",
        resumo: "Testes automatizados de cadastro no Cypress e integração contínua com GitHub Actions.",
        anexos: [
          { nome: "Registro Front-End - Semana 28.pdf", link: "4b/front-end/front semana 28 (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Registro Extra",
        data: "4º Bimestre",
        titulo: "Atividade de Registro Extra",
        resumo: "Registro especial reservado para o professor de Front-end. Acesso protegido por senha.",
        extra: true,
        anexos: [
          { nome: "Abrir registro protegido", tipo: "carta", cartaId: "front-end" }
        ]
      }
    ]
  },

  {
    id: "versionamento",
    nome: "Versionamento",
    pasta: "4b/versionamento/",
    descricao: "Git, GitHub, branches, commits e trabalho em equipe.",
    semanas: []
  },

  {
    id: "ia",
    nome: "IA",
    pasta: "4b/i.a/",
    descricao: "Sistemas multiagente, RAG, memória e refinamento de prompts.",
    semanas: [
      {
        semana: "Semana 21",
        data: "4º Bimestre",
        titulo: "Projetando o DevPipeline (multiagente)",
        resumo: "Limitações do agente monolítico e fluxo colaborativo entre agentes especializados.",
        anexos: [
          { nome: "Registro IA - Semana 21.pdf", link: "4b/i.a/Documento sem título (11) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 22",
        data: "4º Bimestre",
        titulo: "Arquitetura do assistente EstudaMais",
        resumo: "Componentes da arquitetura com orquestrador, agentes especialistas, memória e RAG.",
        anexos: [
          { nome: "Registro IA - Semana 22.pdf", link: "4b/i.a/Documento sem título (12) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 23",
        data: "4º Bimestre",
        titulo: "RAG e memória de curto prazo",
        resumo: "Implementação em Python de recuperação de contexto e salvamento de histórico em JSON.",
        anexos: [
          { nome: "Registro IA - Semana 23.pdf", link: "4b/i.a/Documento sem título (13) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 24",
        data: "4º Bimestre",
        titulo: "Git na comunicação entre agentes",
        resumo: "Uso de branch, commits e merge para corrigir comunicação entre agentes sem quebrar a main.",
        anexos: [
          { nome: "Registro IA - Semana 24.pdf", link: "4b/i.a/Documento sem título (14) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 25",
        data: "4º Bimestre",
        titulo: "Laboratório de melhoria de agentes de IA",
        resumo: "Testes de temperatura, top-p e refinamento progressivo de prompts.",
        anexos: [
          { nome: "Registro IA - Semana 25.pdf", link: "4b/i.a/Documento sem título (4) (5).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 26",
        data: "4º Bimestre",
        titulo: "Próximos passos na carreira em IA",
        resumo: "Competências desenvolvidas, áreas de interesse e plano de evolução prática.",
        anexos: [
          { nome: "PROJETO DE IA - SEMANA 26.pdf", link: "4b/i.a/PROJETO DE IA- SEMANA 26.pdf", tipo: "arquivo" }
        ]
      }
    ]
  },

  {
    id: "tcc",
    nome: "TCC",
    pasta: "4b/projeto_tcc/",
    descricao: "Projeto HelpLife — documentação, indicadores e entregas.",
    semanas: [
      {
        semana: "Semana 23",
        data: "4º Bimestre",
        titulo: "Monitoramento de indicadores e retrospectiva",
        resumo: "Definição de metas SMART, mapa mental de resultados e retrospectiva do projeto HelpLife.",
        anexos: [
          { nome: "Projeto Multidisciplinar - Semana 23.pdf", link: "4b/projeto_tcc/Documento sem título (4) (6).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 24",
        data: "4º Bimestre",
        titulo: "Plano estratégico de comunicação (5W2H)",
        resumo: "Planejamento de divulgação e conscientização do HelpLife nas redes sociais.",
        anexos: [
          { nome: "PROJETO MULTIDISCIPLINAR 24.pdf", link: "4b/projeto_tcc/PROJETO MULTIDISCIPLINAR 24 (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 25",
        data: "4º Bimestre",
        titulo: "Divulgação com metodologia SAVE",
        resumo: "Aplicação de Solução, Acesso, Valor e Educação na apresentação do HelpLife.",
        anexos: [
          { nome: "Projeto Multidisciplinar - Semana 25.pdf", link: "4b/projeto_tcc/Documento sem título (9) (1) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Semana 26",
        data: "4º Bimestre",
        titulo: "Plano de ação BSC e futuro do projeto",
        resumo: "Ações de melhoria por perspectiva e planos de continuidade após o curso técnico.",
        anexos: [
          { nome: "Projeto Multidisciplinar - Semana 26.pdf", link: "4b/projeto_tcc/Documento sem título (10) (1).pdf", tipo: "arquivo" }
        ]
      },
      {
        semana: "Entrega Final",
        data: "TCC 2026",
        titulo: "Documentação e Projeto HelpLife",
        resumo: "Documentação completa do TCC e acesso ao site desenvolvido pela equipe.",
        anexos: [
          { nome: "Documentação TCC - Projeto HelpLife.pdf", link: "4b/projeto_tcc/Documentação TCC - Projeto HelpLife.pdf", tipo: "arquivo" },
          { nome: "Abrir HelpLife 2.0 (local)", link: "4b/projeto_tcc/helplife2.0/index.html", tipo: "arquivo" },
          { nome: "Repositório do TCC no GitHub", link: "https://github.com/Lvz05/TCC", tipo: "link" },
          { nome: "Site publicado (GitHub Pages)", link: "https://lvz05.github.io/TCC/", tipo: "link" }
        ]
      }
    ]
  }
];

const CARTAS = {
  "back-end": {
    senha: "residentevil6ébom",
    materia: "Back-end",
    professor: "joão yokada",
    titulo: "Carta de Agradecimento — Back-end",
    texto: 'olá João, blz ? venho por esse ester-egg bem visivel pq não consegui esconder ele de alguma forma que funcionasse essa carta de agradecimento venho por todas as coisas que o senhor me ajudou, quando eu tava com meus problemas de saude, quando eu tava meio pra baixo ou quando tava caindo de sono por exaustão do tcc. e que apesar de tudo isso o senhor nunca deixou de confiar em mim a respeito disso, sempre confiou e me apoiou no tcc, e so foi possivel concluir ele graças a vc, ele infelzimente não ta funcionando hospedado mas as funcionalidades ja tão funcionando. por mais que não irei seguir na area em decorrencia de gostar de area militares ou areas civis agradeço fielmente por ativar minha curiosidade por programar, muito obrigado por tudo.',


    assinatura: "Lucas Vasconcelos Alves — 3º B"
  },

  "front-end": {
    senha: "vamospraprocessossemana8",
    materia: "Front-end",
    professor: "pedro yokada",
    titulo: "Carta de Agradecimento — Front-end",
    texto: `olá pedro, tudo bem ? espero ter achado esse easter egg, não que ficou muito escondido
    como eu queria porem deu certo, queria agradecer tudo que o senhor fez por mim, me ajudou enquanto eu tava com meus problemas
    e sempre confiou em mim principalmente no meu tcc. e mesmo não querendo seguir na area em decorrência do meu projeto de vida ser totalmente
    diferente a respeito disso ja que é um sonho de infancia, vc e o joão tem um lugar guardado comigo por ativar esse fogo em gosta de programar, banco de dados
    e afins, muito obrigado de coração de todas as coisas q o senhor me ajudou, todas as brincadeiras, agradeço. não consegui dexa isso tao escondido mas valeu a pena`,
    assinatura: "Lucas Vasconcelos Alves — 3º B",
  }
};
