import { LessonItem, FacultyMember } from '../types';

export const FACULTY_DIRECTORY: FacultyMember[] = [
  // HUMANAS
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'geografia',
    subjectName: 'Geografia',
    professorName: 'Prof. Matheus',
    professorRaw: 'matheus',
    gender: 'M',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'Identidade decolonial, relações África-Brasil além da escravidão, comunicação e violência, e ódio na política.',
  },
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'historia',
    subjectName: 'História',
    professorName: 'Profa. Tatiana',
    professorRaw: 'tatiana',
    gender: 'F',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'Primeira Guerra Mundial (1914–1918), massacre e exploração no Congo Belga e o imperialismo europeu.',
  },
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'sociologia',
    subjectName: 'Sociologia',
    professorName: 'Profa. Katia',
    professorRaw: 'katia',
    gender: 'F',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'Identidade decolonial, direitos humanos, comunicação e crise, e temas contemporâneos (profissões e sustentabilidade).',
  },
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'filosofia',
    subjectName: 'Filosofia',
    professorName: 'Profa. Olivia',
    professorRaw: 'olivia',
    gender: 'F',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'Ética e moral, epistemologia, filosofia política e formação do pensamento crítico moderno.',
  },

  // LINGUAGENS
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'portugues',
    subjectName: 'Português',
    professorName: 'Profa. Regina',
    professorRaw: 'regina',
    gender: 'F',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'Gramática aplicada, coesão referencial, produção textual e redação no padrão nota 1000.',
  },
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'ingles',
    subjectName: 'Inglês',
    professorName: 'Prof. Folks',
    professorRaw: 'folks',
    gender: 'M',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'Módulo 7: Cheerleading, hooliganism no esporte, flash mobs coreográficos e videogames na aprendizagem indígena.',
  },
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'artes',
    subjectName: 'Artes',
    professorName: 'Prof. Marcão',
    professorRaw: 'marcão',
    gender: 'M',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'O corpo e suas expressões, dança e estilos musicais como cultura, cosplay e fantasia artística.',
  },
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'ed_fisica',
    subjectName: 'Ed. Física',
    professorName: 'Profa. Iracema',
    professorRaw: 'iracema',
    gender: 'F',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'Fisiologia do exercício, cultura corporal de movimento, saúde preventiva e ergonomia postural.',
  },

  // NATUREZA
  {
    area: 'natureza',
    areaName: 'Ciências da Natureza',
    subjectKey: 'biologia',
    subjectName: 'Biologia',
    professorName: 'Profa. Camila',
    professorRaw: 'camila',
    gender: 'F',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    description: 'Sistema digestório comparado, absorção de nutrientes e sistema circulatório humano fechado, duplo e completo.',
  },
  {
    area: 'natureza',
    areaName: 'Ciências da Natureza',
    subjectKey: 'fisica',
    subjectName: 'Física',
    professorName: 'Prof. Rafael',
    professorRaw: 'rafael',
    gender: 'M',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    description: 'Primeira e Segunda Lei da Termodinâmica, dinâmica e o estudo das transformações dos gases ideais.',
  },
  {
    area: 'natureza',
    areaName: 'Ciências da Natureza',
    subjectKey: 'quimica',
    subjectName: 'Química',
    professorName: 'Profa. Gabriela',
    professorRaw: 'gabriela',
    gender: 'F',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    description: 'Soluções químicas (concentração e diluição) e Cinética Química (velocidade das reações e catalisadores).',
  },

  // MATEMÁTICA
  {
    area: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    subjectKey: 'matematica',
    subjectName: 'Matemática',
    professorName: 'Prof. Vilson',
    professorRaw: 'vilson',
    gender: 'M',
    themeBg: 'bg-[#EF4444]',
    accentColor: '#EF4444',
    description: 'Relações métricas e trigonométricas no triângulo retângulo, Teorema de Pitágoras, Lei dos Senos e Lei dos Cossenos.',
  },
];

// All 12 individual subject lessons
export const ALL_SUBJECT_LESSONS: LessonItem[] = [
  // 1. MATEMÁTICA - Prof. Vilson
  {
    id: 'aula-matematica',
    key: 'matematica',
    area: 'matematica',
    areaTitle: 'Matemática',
    subject: 'Matemática',
    title: 'MATEMATICA',
    professorRole: 'Professor',
    professorName: 'Prof. Vilson',
    professorRaw: 'vilson',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Relações Métricas e Trigonométricas, Lei dos Senos e Cossenos',
    themeBg: 'bg-[#EF4444]',
    accentColor: '#EF4444',
    hexColor: '#EF4444',
    playIconColor: 'text-[#b91c1c]',
    badgeBg: 'bg-red-600/30',
    description:
      'Nesta aula com o Prof. Vilson, abordamos o estudo aprofundado dos triângulos: relações métricas no triângulo retângulo (Teorema de Pitágoras e projeções), relações trigonométricas fundamentais (seno, cosseno e tangente), além da Lei dos Senos e Lei dos Cossenos para triângulos quaisquer.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Relações Métricas & Teorema de Pitágoras',
        summary: 'Fórmulas fundamentais: a² = b² + c², c² = n·a, b² = m·a, a·h = b·c, h² = m·n e a = m + n.',
      },
      {
        timeInSeconds: 680,
        label: 'Relações Trigonométricas no Triângulo Retângulo',
        summary: 'Definição geométrica de seno, cosseno e tangente em relação aos catetos e hipotenusa.',
      },
      {
        timeInSeconds: 1540,
        label: 'Lei dos Senos em Triângulos Quaisquer',
        summary: 'Constância da razão a/sen A = b/sen B = c/sen C em qualquer triângulo.',
      },
      {
        timeInSeconds: 2280,
        label: 'Lei dos Cossenos & Resolução de Problemas',
        summary: 'Aplicação de a² = b² + c² − 2bc · cos A para lados e ângulos desconhecidos.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'Relações métricas no triângulo retângulo',
        content:
          'As relações métricas são fórmulas utilizadas para encontrar medidas desconhecidas em um triângulo retângulo. Elas relacionam a hipotenusa, os catetos, a altura relativa à hipotenusa e suas projeções. A principal relação é o Teorema de Pitágoras, a² = b² + c², que relaciona a hipotenusa com os dois catetos.',
        formula: 'a² = b² + c²  |  c² = n · a  |  b² = m · a  |  a · h = b · c  |  h² = m · n  |  a = m + n',
        subpoints: [
          'Teorema de Pitágoras: a² = b² + c² (o quadrado da hipotenusa é igual à soma dos quadrados dos catetos).',
          'c² = n · a (o quadrado de um cateto é igual ao produto da hipotenusa pela sua respectiva projeção).',
          'b² = m · a (o quadrado do outro cateto é igual ao produto da hipotenusa pela sua projeção).',
          'a · h = b · c (o produto da hipotenusa pela altura relativa é igual ao produto dos dois catetos).',
          'h² = m · n (o quadrado da altura relativa à hipotenusa é igual ao produto das projeções dos catetos).',
          'a = m + n (a hipotenusa é dada pela soma das projeções dos dois catetos).',
        ],
      },
      {
        number: '2',
        title: 'Relações trigonométricas no triângulo retângulo',
        content:
          'As relações trigonométricas relacionam os lados de um triângulo retângulo com seus ângulos. As principais são seno, cosseno e tangente. Para um determinado ângulo, o seno é a razão entre o cateto oposto e a hipotenusa, o cosseno entre o cateto adjacente e a hipotenusa, e a tangente entre o cateto oposto e o adjacente. Elas são usadas para descobrir lados ou ângulos desconhecidos.',
        formula: 'sen(θ) = cateto oposto / hipotenusa  |  cos(θ) = cateto adjacente / hipotenusa  |  tg(θ) = cateto oposto / cateto adjacente',
        subpoints: [
          'Seno (sen): razão entre o cateto oposto ao ângulo considerado e a hipotenusa.',
          'Cosseno (cos): razão entre o cateto adjacente ao ângulo e a hipotenusa.',
          'Tangente (tg): razão entre o cateto oposto e o cateto adjacente.',
          'Utilidade: fundamentais para calcular alturas inacessíveis, distâncias e inclinações de rampas e estruturas.',
        ],
      },
      {
        number: '3',
        title: 'Lei dos senos',
        content:
          'A Lei dos Senos é utilizada em triângulos que não necessariamente possuem um ângulo de 90°. Ela estabelece que a razão entre cada lado e o seno do ângulo oposto a ele é constante:\n\na / sen A = b / sen B = c / sen C\n\nEssa relação permite calcular lados ou ângulos desconhecidos quando são conhecidas informações suficientes sobre o triângulo.',
        formula: 'a / sen A = b / sen B = c / sen C = 2R',
        subpoints: [
          'Aplica-se a qualquer triângulo (acutângulo, retângulo ou obtusângulo).',
          'Ideal para situações onde se conhecem dois ângulos e um lado, ou dois lados e o ângulo oposto a um deles.',
        ],
      },
      {
        number: '4',
        title: 'Lei dos cossenos',
        content:
          'A Lei dos Cossenos relaciona os três lados de um triângulo com um de seus ângulos. Para um lado a, temos:\n\na² = b² + c² − 2bc · cos A\n\nEla é especialmente útil quando conhecemos dois lados e o ângulo entre eles, ou quando conhecemos os três lados e queremos descobrir um ângulo.',
        formula: 'a² = b² + c² − 2bc · cos A  |  b² = a² + c² − 2ac · cos B  |  c² = a² + b² − 2ab · cos C',
        subpoints: [
          'Generalização do Teorema de Pitágoras para qualquer ângulo.',
          'Se o ângulo A for reto (90°), cos 90° = 0 e a equação recai perfeitamente em a² = b² + c².',
          'Uso principal: determinar um terceiro lado conhecendo dois lados e o ângulo compreendido.',
        ],
      },
    ],
    summaryPoints: [
      'Relações métricas no triângulo retângulo: a² = b² + c², c² = n·a, b² = m·a, a·h = b·c, h² = m·n e a = m + n.',
      'Trigonometria no triângulo retângulo: seno (oposto/hipotenusa), cosseno (adjacente/hipotenusa) e tangente (oposto/adjacente).',
      'Lei dos Senos: a/sen A = b/sen B = c/sen C (relação constante válida para qualquer triângulo).',
      'Lei dos Cossenos: a² = b² + c² − 2bc · cos A (ideal para dois lados e o ângulo formado entre eles).',
    ],
    exercises: [
      {
        id: 'ex-mat-1',
        question:
          'Em um triângulo retângulo, a hipotenusa mede a = 25 cm e a projeção de um dos catetos sobre ela mede m = 9 cm. Qual é a medida desse cateto b?',
        options: ['12 cm', '15 cm', '16 cm', '20 cm'],
        correctIndex: 1,
        explanation:
          'Pela relação métrica b² = m · a, temos b² = 9 · 25 = 225. Logo, b = √225 = 15 cm.',
      },
      {
        id: 'ex-mat-2',
        question:
          'Em um triângulo qualquer, dois lados medem b = 5 cm e c = 8 cm, e o ângulo compreendido entre eles é de 60°. Sabendo que cos 60° = 0,5, quanto mede o terceiro lado a?',
        options: ['7 cm', '6 cm', '√89 cm', '9 cm'],
        correctIndex: 0,
        explanation:
          'Pela Lei dos Cossenos: a² = b² + c² − 2bc·cos A = 5² + 8² − 2·5·8·0,5 = 25 + 64 − 40 = 49. Logo, a = √49 = 7 cm.',
      },
    ],
    materials: [
      {
        id: 'mat-mat-1',
        title: 'Formulário Completo: Relações Métricas, Senos e Cossenos - Prof. Vilson.pdf',
        type: 'pdf',
        size: '1.9 MB',
        pages: 8,
      },
      {
        id: 'mat-mat-2',
        title: 'Lista de Exercícios Resolvidos de Triângulos SESI.pdf',
        type: 'pdf',
        size: '3.8 MB',
        pages: 16,
      },
    ],
  },

  // 2. GEOGRAFIA - Prof. Matheus
  {
    id: 'aula-geografia',
    key: 'geografia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Geografia',
    title: 'GEOGRAFIA',
    professorRole: 'Professor',
    professorName: 'Prof. Matheus',
    professorRaw: 'matheus',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Identidade Decolonial, África e Brasil, Comunicação e Ódio na Política',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'Com o Prof. Matheus, investigamos a construção da identidade decolonial, a valorização das culturas indígenas e africanas, a distinção entre Estado e nação, as fronteiras artificiais na África, o papel das mídias e redes sociais em momentos de crise, e as manifestações de ódio e polarização na política.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Construção da Identidade Decolonial & Estado vs. Nação',
        summary: 'Diferenciação conceitual de Estado e Nação e o protagonismo indígena e afro-brasileiro.',
      },
      {
        timeInSeconds: 690,
        label: 'África e Brasil: Relações Além da Escravidão',
        summary: 'Herança cultural viva, culinária, música, dança e a criação de fronteiras artificiais na África.',
      },
      {
        timeInSeconds: 1510,
        label: 'Comunicação, Crise, Violência & Multipolaridade',
        summary: 'Influência das redes sociais, velocidade das ideias, desinformação e os centros de poder global.',
      },
      {
        timeInSeconds: 2260,
        label: 'Ódio na Política & O Muro de Berlim (1961–1989)',
        summary: 'Tratamento de adversários como inimigos, Guerra Fria e a simbologia da queda do muro em 1989.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'A construção de uma identidade decolonial',
        content:
          'A identidade decolonial busca valorizar culturas e conhecimentos que foram historicamente colocados em segundo plano pelo domínio europeu. No Brasil, isso envolve principalmente a valorização das culturas indígenas e africanas, fundamentais para a formação da sociedade brasileira.\n\nÉ importante diferenciar Estado e nação: o Estado possui território, governo e soberania, enquanto a nação está ligada a uma identidade coletiva, formada por elementos como história e cultura. O Brasil é um Estado marcado pela multiplicidade de identidades culturais.',
        highlight: 'Estado: território, governo e soberania política | Nação: identidade coletiva, história, memória e cultura.',
        subpoints: [
          'Superação do eurocentrismo epistemológico e cultural.',
          'Reconhecimento das matrizes indígenas e africanas na formação do povo e território brasileiro.',
          'O Brasil como Estado pluriétnico e multicultural com soberania garantida pela Constituição.',
        ],
      },
      {
        number: '2',
        title: 'África e Brasil: aproximações além da escravidão',
        content:
          'A relação entre África e Brasil vai além da escravidão. A influência africana está presente na culinária, música, religião, dança, linguagem e cultura brasileira. Mesmo diante da escravidão, as populações africanas preservaram e transformaram suas culturas, contribuindo para a formação do Brasil.\n\nNa África, muitas fronteiras artificiais foram criadas pelos colonizadores europeus sem considerar os diferentes povos existentes. Isso separou grupos e reuniu outros dentro dos mesmos Estados, contribuindo para conflitos posteriores.',
        highlight: 'Fronteiras artificiais desenhadas no imperialismo geraram conflitos e rivalidades étnicas que perduram até hoje.',
        subpoints: [
          'Influência direta no vocabulário português, culinária regional (dendê, acarajé), ritmos e religiosidades.',
          'Resistência cultural ativa e recriação de laços de solidariedade comunitária.',
          'A partilha colonial europeia ignorou territórios históricos das etnias africanas.',
        ],
      },
      {
        number: '3',
        title: 'Comunicação, crise e violência',
        content:
          'A comunicação possui grande influência na sociedade e na política. No Brasil, jornais, rádio, televisão e redes sociais são importantes meios de circulação de ideias.\n\nEm momentos de crise, a comunicação pode ajudar a população, mas também facilitar a desinformação, propaganda e manipulação. As redes sociais aumentaram a velocidade dessa circulação.\n\nA multipolaridade política caracteriza um mundo com diferentes centros de poder e influência, como Estados Unidos, China, União Europeia e outros países, em vez de uma única potência dominante.',
        highlight: 'Multipolaridade: múltiplos polos de poder (EUA, China, UE e potências emergentes) substituem a hegemonia unilateral.',
        subpoints: [
          'Papel das redes sociais na aceleração e democratização da informação versus polarização algorítmica.',
          'Vulnerabilidade social à desinformação e discursos manipulatórios em momentos de crise econômica e sanitária.',
        ],
      },
      {
        number: '4',
        title: 'Ódio na política: a busca pela aniquilação do diferente',
        content:
          'O ódio político ocorre quando grupos com opiniões diferentes deixam de ser vistos como adversários e passam a ser tratados como inimigos. Isso pode gerar polarização, intolerância, perseguição e violência.\n\nUm exemplo histórico é a Guerra Fria, marcada pela oposição entre Estados Unidos e União Soviética. O Muro de Berlim, construído em 1961, simbolizou essa divisão, enquanto sua queda, em 1989, representou o enfraquecimento dessa separação política e ideológica.',
        highlight: 'Adversários debatem no campo democrático; a lógica do inimigo busca a eliminação física e moral do outro.',
        subpoints: [
          'Processos de desumanização e propaganda extremista.',
          'Muro de Berlim (1961 - 1989): representação material e física da divisão bipolar do mundo durante a Guerra Fria.',
        ],
      },
    ],
    summaryPoints: [
      'Identidade decolonial: valorização dos saberes indígenas e africanos; Estado (território/soberania) difere de Nação (identidade coletiva).',
      'África e Brasil: presença cultural decisiva além da escravidão; fronteiras artificiais europeias foram fontes de tensões e conflitos no continente africano.',
      'Comunicação e redes: aceleração informativa, riscos de desinformação em crises e o contexto global de multipolaridade política.',
      'Ódio na política: quando adversários são convertidos em inimigos; Muro de Berlim (1961–1989) como símbolo histórico da divisão ideológica.',
    ],
    exercises: [
      {
        id: 'ex-geo-1',
        question:
          'Qual a diferença fundamental entre os conceitos de Estado e Nação segundo a ciência geográfica e política?',
        options: [
          'O Estado é transitório, enquanto a Nação possui obrigatoriamente um exército próprio.',
          'O Estado possui território delimitado, governo e soberania, enquanto a Nação se fundamenta em identidade cultural coletiva e história compartilhada.',
          'Nação e Estado são conceitos sinônimos e não possuem distinção na teoria política.',
          'O Estado depende unicamente de laços de consanguinidade entre os cidadãos.',
        ],
        correctIndex: 1,
        explanation:
          'O Estado é a entidade jurídica e política soberana com território e governo. A Nação é o grupo humano unido por laços identitários, históricos e culturais.',
      },
      {
        id: 'ex-geo-2',
        question:
          'A criação de fronteiras artificiais na África pelas potências imperialistas europeias teve como principal consequência geopolítica:',
        options: [
          'A pacificação imediata e integração econômica total de todas as etnias do continente.',
          'A união de povos rivais e a separação de grupos étnicos históricos dentro dos mesmos Estados, gerando conflitos posteriores.',
          'A preservação intacta de todas as estruturas pré-coloniais africanas.',
          'O fim definitivo das disputas territoriais no século XX.',
        ],
        correctIndex: 1,
        explanation:
          'As fronteiras arbitrárias desconsideraram os limites étnicos prévios, agrupando comunidades historicamente rivais e fragmentando nações.',
      },
    ],
    materials: [
      {
        id: 'mat-geo-1',
        title: 'Geografia Contemporânea: Decolonialidade e Geopolítica - Prof. Matheus.pdf',
        type: 'pdf',
        size: '4.8 MB',
        pages: 20,
      },
    ],
  },

  // 3. HISTÓRIA - Profa. Tatiana
  {
    id: 'aula-historia',
    key: 'historia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'História',
    title: 'HISTÓRIA',
    professorRole: 'Professora',
    professorName: 'Profa. Tatiana',
    professorRaw: 'tatiana',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Primeira Guerra Mundial, Congo Belga e Imperialismo Europeu',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'A Profa. Tatiana analisa os fundamentos das disputas imperialistas do século XIX sobre África e Ásia, a exploração brutal de recursos e trabalho forçado no Congo Belga até sua independência em 1960, e as causas, alianças, estopim e consequências da Primeira Guerra Mundial (1914–1918).',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Imperialismo Europeu no Século XIX',
        summary: 'Busca por matérias-primas, mercados consumidores, territórios e a partilha da África e Ásia.',
      },
      {
        timeInSeconds: 710,
        label: 'O Congo Belga: Exploração e Resistência',
        summary: 'A violência extrema sob controle belga na extração de borracha e a independência em 1960.',
      },
      {
        timeInSeconds: 1520,
        label: 'Primeira Guerra Mundial (1914–1918): Causas e Estopim',
        summary: 'Nacionalismos exacerbados, corrida armamentista e o assassinato de Francisco Ferdinando.',
      },
      {
        timeInSeconds: 2270,
        label: 'Desfecho da Guerra & Transformações Europeias',
        summary: 'Vitória da Tríplice Entente, o Tratado de Versalhes e a derrocada dos impérios europeus.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'Primeira Guerra Mundial',
        content:
          'A Primeira Guerra Mundial (1914–1918) foi um grande conflito causado principalmente pelas disputas imperialistas, pelo nacionalismo e pela formação de alianças entre as potências europeias. O assassinato do arquiduque Francisco Ferdinando foi o estopim da guerra. O conflito terminou com a vitória da Tríplice Entente e provocou milhões de mortes e grandes mudanças políticas na Europa.',
        highlight: 'Estopim: Assassinato do arquiduque Francisco Ferdinando em Sarajevo (1914) | Desfecho: Vitória da Tríplice Entente em 1918.',
        subpoints: [
          'Causas de fundo: rivalidades interimperialistas, corrida armamentista (Paz Armada) e blocos de alianças (Tríplice Entente vs. Tríplice Aliança).',
          'Características: guerra de trincheiras, uso de armamentos químicos, tanques e aviação militar.',
          'Consequências: dissolução de impérios (Alemão, Austro-Húngaro, Otomano e Russo) e Tratado de Versalhes.',
        ],
      },
      {
        number: '2',
        title: 'Congo Belga',
        content:
          'O Congo Belga foi uma colônia africana controlada pela Bélgica, marcada pela exploração intensa de seus recursos naturais e de sua população. Durante o período de domínio colonial, os habitantes sofreram trabalho forçado, violência e exploração, especialmente na extração de borracha. O Congo tornou-se independente da Bélgica em 1960.',
        highlight: 'Propriedade pessoal de Leopoldo II convertida em colônia do Estado belga; regime de atrocidades e mutilações.',
        subpoints: [
          'Extração predatória de látex (borracha) e marfim para abastecer a indústria ocidental.',
          'Imposição de cotas arbitrárias punidas com assassinatos e mutilações em massa.',
          'Luta anticolonial que resultou na independência nacional em 1960.',
        ],
      },
      {
        number: '3',
        title: 'Imperialismo europeu',
        content:
          'O imperialismo europeu foi a expansão das potências europeias sobre territórios da África e da Ásia, principalmente durante o século XIX. Os países buscavam matérias-primas, mercados consumidores, territórios e maior poder político. Essa expansão provocou a exploração das populações locais e aumentou as rivalidades entre as potências europeias.',
        highlight: 'Segunda Revolução Industrial impulsionou a corrida neocolonialista; ideologia da "missão civilizadora" justificava o domínio.',
        subpoints: [
          'Conferência de Berlim (1884-1885): partilha e retalhamento da África entre potências europeias.',
          'Subjugação política, econômica e cultural de povos milenares asiáticos e africanos.',
          'O acirramento das disputas imperialistas foi o catalisador central para a eclosão da Primeira Guerra Mundial.',
        ],
      },
    ],
    summaryPoints: [
      'Primeira Guerra Mundial (1914–1918): gerada por disputas imperialistas e nacionalismo; estopim: assassinato de Francisco Ferdinando; vitória da Entente.',
      'Congo Belga: colônia explorada com extrema violência e trabalho forçado na borracha; conquistou a independência em 1960.',
      'Imperialismo europeu no século XIX: busca frenética por matérias-primas e mercados na África e Ásia, gerando rivalidades que desembocaram na guerra.',
    ],
    exercises: [
      {
        id: 'ex-his-1',
        question:
          'Qual acontecimento é historicamente reconhecido como o estopim para a deflagração da Primeira Guerra Mundial em 1914?',
        options: [
          'A invasão da Polônia pelas tropas alemãs',
          'O assassinato do arquiduque Francisco Ferdinando, herdeiro do Império Austro-Húngaro, em Sarajevo',
          'A queda do Muro de Berlim',
          'A assinatura do Tratado de Versalhes',
        ],
        correctIndex: 1,
        explanation:
          'O assassinato de Francisco Ferdinando em Sarajevo em junho de 1914 acionou a cadeia de alianças militares europeias.',
      },
      {
        id: 'ex-his-2',
        question:
          'A exploração colonial no Congo Belga caracterizou-se historicamente por:',
        options: [
          'Desenvolvimento industrial sustentável e distribuição de terras aos nativos',
          'Trabalho forçado sistemático, violência extrema e espoliação de borracha e recursos naturais',
          'Parceria comercial equilibrada entre os líderes locais e os comerciantes europeus',
          'Proteção integral aos direitos humanos das populações congolesas',
        ],
        correctIndex: 1,
        explanation:
          'O domínio belga no Congo é um dos episódios mais brutais do imperialismo, marcado por trabalho forçado e punições físicas atrozes.',
      },
    ],
    materials: [
      {
        id: 'mat-his-1',
        title: 'Imperialismo e a Primeira Guerra Mundial - Profa. Tatiana.pdf',
        type: 'pdf',
        size: '3.9 MB',
        pages: 18,
      },
    ],
  },

  // 4. SOCIOLOGIA - Profa. Katia
  {
    id: 'aula-sociologia',
    key: 'sociologia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Sociologia',
    title: 'SOCIOLOGIA',
    professorRole: 'Professora',
    professorName: 'Profa. Katia',
    professorRaw: 'katia',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Identidade Decolonial, Direitos Humanos, África-Brasil e Temas Contemporâneos',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'A Profa. Katia aborda o roteiro completo de avaliação: a perspectiva decolonial e a valorização de saberes marginalizados, a presença afro-brasileira, a crítica aos discursos de ódio e desumanização na política, a afirmação histórica dos direitos humanos, a herança do imperialismo e colonialismo, além dos temas contemporâneos de profissões emergentes, gestão financeira e alimentação sustentável.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Perspectiva Decolonial & Epistemologias do Sul',
        summary: 'Questionamento dos saberes eurocêntricos dominantes e valorização de histórias marginalizadas.',
      },
      {
        timeInSeconds: 670,
        label: 'África e Brasil: Cultura, Identidade e Legado',
        summary: 'Contribuição profunda da população afro-brasileira na formação da sociedade.',
      },
      {
        timeInSeconds: 1420,
        label: 'Comunicação, Crise, Ódio Político & Direitos Humanos',
        summary: 'Postura crítica contra a desinformação, combate à desumanização e a dignidade humana pós-século XX.',
      },
      {
        timeInSeconds: 2190,
        label: 'Temas Contemporâneos: Profissões & Alimentação Sustentável',
        summary: 'Novas competências e estabilidade financeira; hábitos alimentares, cultura e consumo consciente.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'Construção de uma identidade decolonial',
        content:
          'A perspectiva decolonial procura questionar ideias e conhecimentos que foram construídos a partir da visão dominante dos países colonizadores.\n\nEla busca valorizar diferentes culturas, conhecimentos e experiências que foram historicamente marginalizados. Assim, pensar de maneira decolonial significa também questionar quem produz o conhecimento, quem é representado e quais histórias são consideradas importantes.',
        subpoints: [
          'Desconstrução da hierarquia de saberes que colocava a Europa como centro exclusivo da razão.',
          'Valorização do protagonismo de populações indígenas, quilombolas e afro-diaspóricas.',
          'Busca por uma representação justa nas artes, ciências e currículos educacionais.',
        ],
      },
      {
        number: '2',
        title: 'África e Brasil',
        content:
          'A relação entre África e Brasil vai muito além da escravidão. A presença africana contribuiu profundamente para a formação da sociedade brasileira, influenciando a cultura, música, religião, culinária, linguagem e identidade.\n\nPor isso, estudar África e Brasil também significa reconhecer a importância das populações africanas e afro-brasileiras na construção do país.',
        subpoints: [
          'Reconhecimento das matrizes iorubá, banto e jeje na vida cotidiana brasileira.',
          'Importância da Lei 10.639/03 para o ensino da história e cultura afro-brasileira.',
        ],
      },
      {
        number: '3',
        title: 'Comunicação, crise e violência',
        content:
          'A comunicação possui grande influência na sociedade. As tecnologias de informação permitem que acontecimentos sejam divulgados rapidamente, mas também podem contribuir para a propagação de desinformação, discursos de ódio e violência.\n\nPor isso, é importante desenvolver uma postura crítica diante das informações recebidas.',
        subpoints: [
          'Letramento midiático e checagem de fatos como ferramentas de cidadania.',
          'Combate à desinformação algorítmica e proteção contra discursos que incitam violência.',
        ],
      },
      {
        number: '4',
        title: 'Ódio na política',
        content:
          'O roteiro aborda a busca pela aniquilação do diferente. Em contextos políticos polarizados, pessoas ou grupos podem deixar de enxergar seus adversários como cidadãos com opiniões diferentes e passar a tratá-los como inimigos.\n\nA propaganda e a desumanização podem contribuir para esse processo, principalmente quando determinados grupos são apresentados como inferiores ou perigosos.',
        subpoints: [
          'A desumanização como etapa prévia à violência e à perda de direitos civis.',
          'Necessidade do debate democrático baseado no respeito recíproco e na pluralidade.',
        ],
      },
      {
        number: '5',
        title: 'Direitos humanos',
        content:
          'Os direitos humanos ganharam grande importância especialmente após acontecimentos extremamente violentos do século XX. Eles defendem princípios como dignidade, liberdade, igualdade e proteção da vida humana.\n\nO conteúdo também relaciona os direitos humanos aos conflitos e transformações políticas ocorridos no século XX.',
        subpoints: [
          'Declaração Universal dos Direitos Humanos de 1948 após o Holocausto e a Segunda Guerra Mundial.',
          'Universalidade, indivisibilidade e inalienabilidade dos direitos fundamentais.',
        ],
      },
      {
        number: '6',
        title: 'Imperialismo, colonialismo e decolonialismo',
        content:
          'O imperialismo está relacionado à expansão do poder de países sobre outros territórios, enquanto o colonialismo envolve o domínio político, econômico e cultural de um território por uma potência estrangeira.\n\nO pensamento decolonial procura compreender e questionar as consequências desses processos, inclusive na maneira como as sociedades enxergam sua própria história e identidade.',
        subpoints: [
          'Distinção teórica entre imperialismo (expansão de poder) e colonialismo (domínio formal de território).',
          'Heranças coloniais nas desigualdades socioeconômicas contemporâneas.',
        ],
      },
      {
        number: '7',
        title: 'Temas contemporâneos: Profissões emergentes e estabilidade financeira',
        content:
          'As transformações tecnológicas e sociais estão criando novas profissões e modificando profissões tradicionais. O avanço da tecnologia exige que os trabalhadores desenvolvam novas competências e estejam preparados para mudanças no mercado.\n\nA estabilidade financeira está relacionada à capacidade de organizar recursos, controlar gastos e tomar decisões responsáveis em relação ao dinheiro.',
        subpoints: [
          'Habilidades para o futuro do trabalho: pensamento crítico, flexibilidade e letramento digital.',
          'Educação financeira voltada ao planejamento, controle de endividamento e sustentabilidade pessoal.',
        ],
      },
      {
        number: '8',
        title: 'Temas contemporâneos: Alimentação, cultura e sustentabilidade',
        content:
          'A alimentação não serve apenas para fornecer energia e nutrientes. Ela também faz parte da cultura e da identidade dos povos. Os alimentos, receitas e hábitos alimentares podem representar tradições familiares, costumes regionais e aspectos históricos de uma sociedade.\n\nA alimentação consciente envolve pensar não apenas no que comemos, mas também nos impactos das nossas escolhas. A alimentação sustentável busca reduzir impactos ambientais, considerando fatores como desperdício de alimentos, produção, consumo de recursos naturais e geração de resíduos.',
        subpoints: [
          'Comensalidade e patrimônio alimentar: tradições regionais e memória afetiva.',
          'Consumo consciente: combate ao desperdício, valorização de produtores locais e redução da pegada ecológica.',
        ],
      },
    ],
    summaryPoints: [
      'Perspectiva decolonial: questionamento de padrões eurocêntricos e valorização de saberes e culturas marginalizadas.',
      'África e Brasil: reconhecimento indispensável da população afro-brasileira na cultura, linguagem e formação nacional.',
      'Comunicação e ódio político: desenvolvimento de postura crítica contra desinformação e desumanização de adversários.',
      'Direitos humanos e colonialismo: defesa da dignidade humana pós-século XX e desconstrução das heranças coloniais.',
      'Temas contemporâneos: profissões do futuro, educação financeira responsável e alimentação consciente/sustentável.',
    ],
    exercises: [
      {
        id: 'ex-soc-1',
        question:
          'O que caracteriza essencialmente a perspectiva teórica decolonial no campo das ciências humanas e sociais?',
        options: [
          'A defesa de que apenas teorias formuladas na Europa moderna possuem validade científica universal.',
          'A crítica aos saberes hegemônicos colonizadores e a valorização das epistemologias, histórias e culturas de grupos historicamente marginalizados.',
          'O retorno compulsório às estruturas feudais medievais.',
          'A rejeição completa de qualquer forma de pesquisa acadêmica.',
        ],
        correctIndex: 1,
        explanation:
          'A teoria decolonial interroga as relações coloniais de poder e conhecimento, valorizando matrizes de pensamento do Sul global.',
      },
    ],
    materials: [
      {
        id: 'mat-soc-1',
        title: 'Sociologia e Contemporaneidade - Profa. Katia.pdf',
        type: 'pdf',
        size: '3.5 MB',
        pages: 20,
      },
    ],
  },

  // 5. FILOSOFIA - Profa. Olivia
  {
    id: 'aula-filosofia',
    key: 'filosofia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Filosofia',
    title: 'FILOSOFIA',
    professorRole: 'Professora',
    professorName: 'Profa. Olivia',
    professorRaw: 'olivia',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Ética, Moral e o Pensamento Político Moderno',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'A Profa. Olivia conduz uma reflexão sobre a distinção entre ética e moral, os contratualistas (Hobbes, Locke e Rousseau) e a ética do dever em Immanuel Kant.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Ética vs. Moral',
        summary: 'Fundamentações e dilemas morais no cotidiano.',
      },
      {
        timeInSeconds: 880,
        label: 'Os Contratualistas',
        summary: 'Estado de natureza e o pacto social.',
      },
    ],
    summaryPoints: [
      'O imperativo categórico kantiano como guia universal da ação moral.',
      'O contrato social como origem legítima da autoridade civil.',
      'Diferença entre o estado de natureza hobbesiano e rousseauniano.',
    ],
    exercises: [
      {
        id: 'ex-fil-1',
        question: 'O imperativo categórico formulado por Immanuel Kant preconiza que:',
        options: [
          'Deve-se agir somente segundo a máxima que possa ser convertida em lei universal',
          'Os fins justificam quaisquer meios utilizados',
          'A felicidade individual é o único critério moral válido',
          'A moralidade deve sempre obedecer às ordens do líder de Estado',
        ],
        correctIndex: 0,
        explanation: 'Kant definiu o imperativo categórico: "Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal".',
      },
    ],
    materials: [
      {
        id: 'mat-fil-1',
        title: 'Caderno de Filosofia Política - Profa. Olivia.pdf',
        type: 'pdf',
        size: '3.1 MB',
        pages: 18,
      },
    ],
  },

  // 6. PORTUGUÊS - Profa. Regina
  {
    id: 'aula-portugues',
    key: 'portugues',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Português',
    title: 'PORTUGUÊS',
    professorRole: 'Professora',
    professorName: 'Profa. Regina',
    professorRaw: 'regina',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Coesão Referencial e Estrutura da Redação Nota 1000',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'Nesta aula focada em Língua Portuguesa e Produção Textual, a Profa. Regina disseca os conectivos operadores de argumentação, regras de paralelismo sintático e estratégias para a proposta de intervenção social.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Apresentação do Tema e Tese',
        summary: 'Como formular uma tese firme no primeiro parágrafo.',
      },
      {
        timeInSeconds: 580,
        label: 'Operadores Argumentativos & Coesão',
        summary: 'Uso estratégico de conectivos interparágrafos e intraparágrafos.',
      },
      {
        timeInSeconds: 1490,
        label: 'Análise de Redações Exemplo SESI',
        summary: 'Estudo de repertórios socioculturais legitimados com a Profa. Regina.',
      },
      {
        timeInSeconds: 2190,
        label: 'Os 5 Elementos da Proposta de Intervenção',
        summary: 'Agente, Ação, Meio/Modo, Efeito e Detalhamento.',
      },
    ],
    summaryPoints: [
      'Evitar repetição lexical com anáforas, catáforas e hiperônimos.',
      'Garantir conectivos diversificados entre todos os parágrafos.',
      'Repertório sociocultural precisa ser produtivo e legitimado.',
      'A proposta de intervenção deve respeitar os direitos humanos.',
    ],
    exercises: [
      {
        id: 'ex-port-1',
        question:
          'Qual dos seguintes conectivos estabelece semanticamente uma relação de oposição/ressalva entre orações?',
        options: ['Porquanto', 'Contudo', 'Portanto', 'Visto que'],
        correctIndex: 1,
        explanation:
          '"Contudo" é uma conjunção adversativa, indicando contraste ou quebra de expectativa.',
      },
    ],
    materials: [
      {
        id: 'mat-port-1',
        title: 'Guia de Conectivos & Operadores - Profa. Regina.pdf',
        type: 'pdf',
        size: '2.5 MB',
        pages: 10,
      },
    ],
  },

  // 7. ARTES - Prof. Marcão
  {
    id: 'aula-artes',
    key: 'artes',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Artes',
    title: 'ARTES',
    professorRole: 'Professor',
    professorName: 'Prof. Marcão',
    professorRaw: 'marcão',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: O Corpo e Suas Expressões, Dança e Música, Cosplay e Fantasia',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'O Prof. Marcão aborda o corpo e suas diferentes formas de expressão artística, os estilos musicais e a dança como manifestação cultural de identidade e ancestralidade, além do fenômeno do cosplay, da fantasia e da criação estética contemporânea.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'O Corpo e Suas Diferentes Formas de Expressão',
        summary: 'O corpo como suporte, instrumento, performance e linguagem visual artística.',
      },
      {
        timeInSeconds: 810,
        label: 'Estilos Musicais e Dança como Manifestação Cultural',
        summary: 'Ancestralidade, celebração coletiva, ritmos e linguagens coreográficas.',
      },
      {
        timeInSeconds: 1640,
        label: 'Cosplay, Fantasia e Criação Estética',
        summary: 'Figurino, maquiagem, encenação teatral e apropriação criativa da cultura pop.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'O corpo e suas diferentes formas de expressão',
        content:
          'Em Artes, o corpo é compreendido não apenas como uma estrutura biológica, mas como suporte, instrumento e veículo fundamental de linguagem e criação artística. Por meio de gestos, posturas, expressões faciais, pinturas corporais e intervenções performáticas, o ser humano exterioriza sentimentos, posicionamentos políticos e narrativas poéticas.',
        highlight: 'Corpo como suporte artístico | Performance e intervenção corporal | Expressão e identidade.',
        subpoints: [
          'O corpo como suporte de intervenção poética, visual e política.',
          'Body art, performances cênicas e dança contemporânea.',
          'A expressão facial e gestual como signos de comunicação sensível.',
        ],
      },
      {
        number: '2',
        title: 'Estilos musicais e a dança como manifestação cultural',
        content:
          'A dança e os estilos musicais constituem manifestações culturais profundas de diferentes povos ao longo da história. Eles refletem a ancestralidade, a resistência de comunidades e a celebração coletiva. Ritmos tradicionais e modernos conectam som e movimento, traduzindo valores comunitários, memórias e sentimentos em linguagens coreográficas.',
        highlight: 'Manifestação cultural e ancestralidade | Ritmos e corporeidade | Linguagem coreográfica e patrimônio.',
        subpoints: [
          'Expressão da identidade coletiva através do ritmo, da sonoridade e da corporeidade.',
          'Preservação da memória histórica e resistência cultural por meio de danças populares e tradicionais.',
          'Conexão entre o ritmo musical e a dinâmica do movimento no espaço cênico.',
        ],
      },
      {
        number: '3',
        title: 'Cosplay, fantasia e a expressão artística',
        content:
          'O cosplay e a fantasia representam formas contemporâneas de expressão artística onde o indivíduo utiliza figurino, maquiagem, encenação e interpretação para dar vida a personagens ficcionais (de animes, jogos, filmes e literatura). Essa prática envolve técnicas de escultura, costura, modelagem e teatralidade, permitindo a apropriação criativa da cultura pop e a construção de identidades lúdicas.',
        highlight: 'Costume Play: criação estética, figurino e teatralidade | Apropriação criativa da cultura pop | Narrativas visuais.',
        subpoints: [
          'Interdisciplinaridade estética: artes plásticas, modelagem, design de figurino e maquiagem artística.',
          'Teatralidade e interpretação de personas fictícias em eventos culturais e convenções.',
          'Ressignificação e vivência criativa de narrativas da cultura pop visual.',
        ],
      },
    ],
    summaryPoints: [
      'O corpo como suporte, matéria e instrumento de criação e expressão estética.',
      'Dança e estilos musicais como veículos de identidade, ancestralidade e resistência sociocultural.',
      'Cosplay e fantasia: teatralidade, construção minuciosa de figurino e apropriação artística contemporânea.',
    ],
    exercises: [
      {
        id: 'ex-art-1',
        question:
          'Na arte contemporânea e na história da performance, de que maneira o corpo humano é predominantemente concebido?',
        options: [
          'Apenas como um modelo estático para pintura tradicional de estúdio',
          'Como suporte vivo, matéria, instrumento e veículo primordial de linguagem estética e política',
          'Exclusivamente como um objeto biológico sem capacidade expressiva',
          'Apenas para reprodução de padrões anatômicos gregos clássicos',
        ],
        correctIndex: 1,
        explanation:
          'Nas artes contemporâneas (performance, body art e dança), o corpo atua ativamente como próprio suporte e agente da criação artística.',
      },
      {
        id: 'ex-art-2',
        question:
          'A prática do cosplay pode ser caracterizada como expressão artística principalmente por envolver:',
        options: [
          'Apenas o consumo passivo de programas de televisão',
          'Processos de criação estética, costura, modelagem de acessórios, maquiagem e atuação teatral na personificação de narrativas fictícias',
          'A rejeição completa de qualquer forma de interpretação e figurino',
          'Uma atividade puramente esportiva sem componentes visuais',
        ],
        correctIndex: 1,
        explanation:
          'O cosplay integra múltiplos saberes das artes visuais e cênicas: caracterização, manufatura de figurinos e encenação dramática.',
      },
    ],
    materials: [
      {
        id: 'mat-art-1',
        title: 'Expressões do Corpo, Música e Cosplay - Prof. Marcão.pdf',
        type: 'pdf',
        size: '4.6 MB',
        pages: 18,
      },
    ],
  },

  // 8. EDUCAÇÃO FÍSICA - Profa. Iracema
  {
    id: 'aula-ed-fisica',
    key: 'ed_fisica',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Ed. Física',
    title: 'EDUCAÇÃO FÍSICA',
    professorRole: 'Professora',
    professorName: 'Profa. Iracema',
    professorRaw: 'iracema',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Fisiologia do Exercício, Saúde Metabólica e Ergonomia Postural',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'A Profa. Iracema aborda a adaptação cardiovascular ao esforço físico, a importância da mobilidade articular e a ergonomia postural para estudantes e trabalhadores.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Sistemas Energéticos (Aeróbico vs. Anaeróbico)',
        summary: 'Como o corpo produz energia para diferentes intensidades de movimento.',
      },
      {
        timeInSeconds: 760,
        label: 'Postura, Ergonomia e Prevenção de Lesões',
        summary: 'Cuidados posturais essenciais para a rotina diária.',
      },
    ],
    summaryPoints: [
      'A frequência cardíaca alvo e zonas de treinamento físico.',
      'A prática regular de atividade física como reguladora do estresse e foco mental.',
      'Importância dos exercícios resistidos na integridade óssea e muscular.',
    ],
    exercises: [
      {
        id: 'ex-edf-1',
        question: 'Qual via energética é predominantemente utilizada durante uma corrida contínua de 40 minutos em ritmo moderado?',
        options: ['Sistema ATP-CP', 'Glicólise anaeróbica lática', 'Sistema oxidativo aeróbico', 'Fermentação etílica'],
        correctIndex: 2,
        explanation: 'Atividades de longa duração e intensidade moderada utilizam predominantemente a via aeróbica oxidativa.',
      },
    ],
    materials: [
      {
        id: 'mat-edf-1',
        title: 'Manual de Fisiologia e Ergonomia - Profa. Iracema.pdf',
        type: 'pdf',
        size: '2.1 MB',
        pages: 14,
      },
    ],
  },

  // 9. INGLÊS - Prof. Folks
  {
    id: 'aula-ingles',
    key: 'ingles',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Inglês',
    title: 'INGLÊS',
    professorRole: 'Professor',
    professorName: 'Prof. Folks',
    professorRaw: 'folks',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Módulo 7 - Sports, Cheerleading, Hooliganism, Flash Mob & Videogames',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'Com o Prof. Folks, analisamos os conteúdos do Módulo 7: esporte e torcidas (Cheerleading e Hooliganism), intervenções coreográficas coletivas e mudanças climáticas (Flash Mob) e o papel dos videogames na aprendizagem e representação de povos indígenas.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Cheerleading: Tradição Coletiva e Tolerância no Esporte',
        summary: 'História das torcidas organizadas, sincronismo e a promoção do respeito e tolerância.',
      },
      {
        timeInSeconds: 670,
        label: 'Hooliganism: Desordem vs. Integração Esportiva',
        summary: 'Comportamentos violentos no futebol, contrastando com o papel integrador do esporte.',
      },
      {
        timeInSeconds: 1420,
        label: 'Flash Mob: Intervenções Coletivas e Mudanças Climáticas',
        summary: 'Ações coreográficas em espaços públicos e engajamento social sobre o clima.',
      },
      {
        timeInSeconds: 2180,
        label: 'Videogames, Aprendizagem e Povos Indígenas',
        summary: 'Jogos digitais na educação e representação cultural respeitosa dos povos originários.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'Cheerleading',
        content:
          'Cheerleading é uma prática relacionada às torcidas e ao esporte. O conteúdo aborda a história dessa tradição e sua relação com a participação coletiva. Também aparece o papel do esporte na promoção do respeito e da tolerância.',
        highlight: 'History of cheering traditions | Collective participation | Respect and tolerance in sports.',
        subpoints: [
          'História e evolução das torcidas e do cheerleading como modalidade atlética colaborativa.',
          'Participação em grupo desenvolvendo coordenação, disciplina e espírito de equipe.',
          'O esporte como catalisador de tolerância, inclusão e respeito entre adversários.',
        ],
      },
      {
        number: '2',
        title: 'Hooliganism',
        content:
          'Hooliganism está relacionado a comportamentos violentos ou desordeiros associados, principalmente, a torcedores de futebol. O tema permite compreender como o esporte pode ter aspectos positivos de integração, mas também pode envolver conflitos quando há intolerância e violência.',
        highlight: 'Violent behavior vs. sports integration | Football supporter culture | Conflict prevention and tolerance.',
        subpoints: [
          'Análise crítica da violência e rivalidades agressivas em torno de equipes esportivas.',
          'Contraste entre o esporte como ferramenta de união global versus o tribalismo violento.',
          'Estratégias de conscientização e segurança para erradicação do hooliganismo.',
        ],
      },
      {
        number: '3',
        title: 'Flash mob',
        content:
          'O flash mob é uma ação realizada por um grupo de pessoas que se reúne para executar determinada atividade, geralmente uma apresentação, em um espaço público. No conteúdo, ele aparece relacionado às mudanças climáticas na linguagem coreográfica e às intervenções coletivas.',
        highlight: 'Public space intervention | Choreographic language | Collective activism & climate change awareness.',
        subpoints: [
          'Agrupamento relâmpago de pessoas para intervenções artísticas em locais urbanos públicos.',
          'Linguagem coreográfica utilizada para sensibilizar a sociedade sobre as mudanças climáticas.',
          'Poder das intervenções coletivas e do ativismo cultural na era digital.',
        ],
      },
      {
        number: '4',
        title: 'Videogames e aprendizagem',
        content:
          'O conteúdo também aborda os videogames como forma de entretenimento e aprendizagem, incluindo a presença de povos indígenas nos videogames. Isso permite discutir como os jogos podem representar diferentes culturas e também funcionar como ferramentas para aprender e desenvolver conhecimentos.',
        highlight: 'Gaming & education | Cultural representation | Indigenous cultures in modern digital media.',
        subpoints: [
          'Gamificação educativa: desenvolvimento de raciocínio estratégico, reflexos e cooperação.',
          'Representação cultural autêntica dos povos indígenas e suas mitologias nos jogos digitais.',
          'Jogos como plataformas de preservação de línguas originárias e saberes ancestrais.',
        ],
      },
    ],
    summaryPoints: [
      'Cheerleading: tradição histórica de torcidas, atuação coletiva e difusão de respeito e tolerância.',
      'Hooliganism: violência e desordem esportiva examinadas criticamente frente ao potencial integrador do esporte.',
      'Flash mob: intervenções coreográficas temporárias em locais públicos abordando conscientização sobre o clima.',
      'Videogames e aprendizagem: valor educacional dos jogos eletrônicos e representação de comunidades indígenas.',
    ],
    exercises: [
      {
        id: 'ex-ing-1',
        question:
          'According to the Module 7 study guide, what is the main purpose of connecting flash mobs with climate change awareness?',
        options: [
          'To disrupt urban traffic permanently without any environmental message',
          'To use sudden choreographic collective intervention in public spaces to draw attention to urgent environmental issues',
          'To replace professional sporting events with street dance competitions',
          'To prevent people from gathering in public areas',
        ],
        correctIndex: 1,
        explanation:
          'Flash mobs utilize collective choreographic language in public spaces as a creative medium for climate change awareness.',
      },
      {
        id: 'ex-ing-2',
        question:
          'How can videogames function beyond entertainment according to the educational curriculum?',
        options: [
          'Only by increasing screen time without pedagogical value',
          'As effective tools for learning, problem-solving, and meaningful cultural representation of groups such as indigenous peoples',
          'By eliminating all forms of reading and written communication',
          'Exclusively as competitive individual tournaments without cultural themes',
        ],
        correctIndex: 1,
        explanation:
          'Videogames can operate as learning tools that also showcase and respect indigenous cultures and diverse heritages.',
      },
    ],
    materials: [
      {
        id: 'mat-ing-1',
        title: 'Module 7: Sports, Culture & Digital Media - Prof. Folks.pdf',
        type: 'pdf',
        size: '3.6 MB',
        pages: 16,
      },
    ],
  },

  // 10. BIOLOGIA - Profa. Camila
  {
    id: 'aula-biologia',
    key: 'biologia',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Biologia',
    title: 'BIOLOGIA',
    professorRole: 'Professora',
    professorName: 'Profa. Camila',
    professorRaw: 'camila',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Sistema Digestório Comparado e Sistema Circulatório Humano',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'A Profa. Camila aborda a fisiologia comparada da digestão animal, a anatomia e funções do trato digestório humano (absorção no intestino delgado e grosso), e as características da circulação humana fechada, dupla e completa.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Sistema Digestório Comparado',
        summary: 'De cavidades simples a tubos digestivos completos com especialização tecidual.',
      },
      {
        timeInSeconds: 690,
        label: 'Digestão Humana & Absorção Intestinal',
        summary: 'Papel do intestino delgado na nutrição e do intestino grosso na absorção de água e fezes.',
      },
      {
        timeInSeconds: 1510,
        label: 'Sistema Circulatório Humano: Vasos e Coração',
        summary: 'Artérias, veias, capilares e as quatro câmaras cardíacas em ação sincronizada.',
      },
      {
        timeInSeconds: 2260,
        label: 'Circulação Fechada, Dupla e Completa',
        summary: 'Pequena vs. grande circulação e ausência de mistura de sangue arterial e venoso.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'Sistema digestório comparado',
        content:
          'O sistema digestório é responsável pela digestão dos alimentos, transformando moléculas maiores em moléculas menores que podem ser absorvidas pelo organismo. Ao comparar diferentes animais, percebe-se que os sistemas digestórios apresentam diferentes níveis de complexidade. Alguns organismos possuem estruturas mais simples, enquanto outros apresentam órgãos especializados, permitindo uma digestão mais eficiente.\n\nNo ser humano, participam da digestão órgãos como boca, faringe, esôfago, estômago, intestino delgado e intestino grosso, além de órgãos acessórios, como fígado e pâncreas. O intestino delgado possui papel fundamental na absorção dos nutrientes, enquanto o intestino grosso está relacionado principalmente à absorção de água e à formação das fezes.',
        highlight: 'Intestino Delgado: digestão enzimática final e absorção de nutrientes | Intestino Grosso: reabsorção de água e formação de fezes.',
        subpoints: [
          'Digestão comparada: evolução de cavidades gastrovasculares simples (incompletas) até tubos digestivos completos com compartimentos especializados.',
          'Boca: mastigação e início da digestão de amido pela ptialina (amilase salivar).',
          'Estômago: ambiente ácido rico em ácido clorídrico (HCl) e pepsina para quebra proteica.',
          'Intestino delgado (duodeno, jejuno e íleo): onde ocorre a maior parte da absorção dos nutrientes através de vilosidades e microvilosidades.',
          'Intestino grosso: reabsorção crucial de água e sais minerais, condensando os resíduos não digeridos em fezes.',
          'Glândulas anexas: o fígado secreta a bile (que atua como emulsificante de gorduras) e o pâncreas libera enzimas digestivas e bicarbonato.',
        ],
      },
      {
        number: '2',
        title: 'Sistema circulatório humano',
        content:
          'O sistema circulatório humano é responsável pelo transporte de substâncias pelo organismo, incluindo oxigênio, nutrientes, hormônios e resíduos metabólicos. O coração funciona como uma bomba que impulsiona o sangue pelos vasos sanguíneos. Os principais vasos são artérias, veias e capilares.\n\nA circulação humana é fechada, dupla e completa. É fechada porque o sangue circula dentro dos vasos; dupla porque existem dois circuitos principais de circulação; e completa porque o sangue rico em oxigênio não se mistura normalmente com o sangue pobre em oxigênio dentro do coração.',
        highlight: 'Circulação Humana: FECHADA (dentro dos vasos), DUPLA (pequena e grande circulação) e COMPLETA (sem mistura entre sangue oxigenado e desoxigenado).',
        subpoints: [
          'Fechada: o sangue nunca extravasa para lacunas corporais, trafegando exclusivamente em leitos vasculares contínuos.',
          'Dupla: compreende a circulação pulmonar (coração → pulmões → coração) e a circulação sistêmica (coração → corpo → coração).',
          'Completa: coração com quatro câmaras isoladas (dois átrios e dois ventrículos), prevenindo mistura de sangue arterial e venoso.',
          'Vasos: Artérias suportam alta pressão centrífuga; Veias possuem válvulas que auxiliam no retorno venoso; Capilares realizam as trocas com os tecidos.',
        ],
      },
    ],
    summaryPoints: [
      'Digestório comparado: transição de sistemas simples para tubos digestivos com alta especialização funcional.',
      'Intestino delgado e grosso: absorção de nutrientes no delgado e reabsorção hídrica/formação fecal no grosso.',
      'Sistema circulatório humano: bomba cardíaca impulsionando oxigênio, nutrientes, hormônios e resíduos.',
      'Circulação humana: Fechada (dentro de vasos), Dupla (circuitos pulmonar e sistêmico) e Completa (sem mistura sanguínea).',
    ],
    exercises: [
      {
        id: 'ex-bio-1',
        question:
          'Por que a circulação sanguínea humana é classificada pela fisiologia como fechada, dupla e completa?',
        options: [
          'Porque o sangue circula livremente em lacunas do corpo, realiza um único circuito e possui mistura de sangues no ventrículo',
          'Porque o sangue circula confinado em vasos sanguíneos, passa duas vezes pelo coração em cada ciclo e não há mistura entre o sangue rico e o sangue pobre em oxigênio',
          'Porque possui três átrios e um ventrículo aberto sem septo de separação',
          'Porque o oxigênio é transportado diretamente pelo ar nos capilares sem intervenção do coração',
        ],
        correctIndex: 1,
        explanation:
          'Fechada = dentro dos vasos; Dupla = circuitos pulmonar e sistêmico; Completa = separação total entre sangue oxigenado e desoxigenado no coração.',
      },
      {
        id: 'ex-bio-2',
        question:
          'No sistema digestório humano, qual é a função primordial desempenhada pelo intestino grosso?',
        options: [
          'Produzir bile para emulsificar os lipídios dos alimentos',
          'Absorver a quase totalidade das proteínas e carboidratos da dieta',
          'Absorver principalmente água e sais minerais, promovendo a formação das fezes',
          'Secretar o ácido clorídrico necessário para quebrar fibras vegetais',
        ],
        correctIndex: 2,
        explanation:
          'A digestão e absorção de nutrientes ocorrem no estômago e intestino delgado; ao intestino grosso cabe reabsorver água e formar o bolo fecal.',
      },
    ],
    materials: [
      {
        id: 'mat-bio-1',
        title: 'Fisiologia Humana: Digestão e Circulação - Profa. Camila.pdf',
        type: 'pdf',
        size: '4.4 MB',
        pages: 20,
      },
    ],
  },

  // 11. FÍSICA - Prof. Rafael
  {
    id: 'aula-fisica',
    key: 'fisica',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Física',
    title: 'FÍSICA',
    professorRole: 'Professor',
    professorName: 'Prof. Rafael',
    professorRaw: 'rafael',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Leis da Termodinâmica, Dinâmica e Estudo dos Gases',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'Com o Prof. Rafael, estudamos a Primeira e Segunda Lei da Termodinâmica, a Dinâmica e o estudo do comportamento dos gases ideais, analisando as transformações de energia, pressão, volume e temperatura.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Primeira Lei da Termodinâmica: Conservação de Energia',
        summary: 'Relação entre calor trocado (Q), trabalho realizado (W) e energia interna (ΔU = Q - W).',
      },
      {
        timeInSeconds: 730,
        label: 'Segunda Lei da Termodinâmica & Máquinas Térmicas',
        summary: 'Fluxo espontâneo de calor, entropia e a impossibilidade de rendimento de 100%.',
      },
      {
        timeInSeconds: 1520,
        label: 'Dinâmica dos Gases & Equação de Clapeyron',
        summary: 'Colisões moleculares nas paredes, variáveis de estado e a relação P·V = n·R·T.',
      },
      {
        timeInSeconds: 2280,
        label: 'Transformações Notáveis: Isotérmica, Isobárica, Isocórica e Adiabática',
        summary: 'A equação geral (P1·V1)/T1 = (P2·V2)/T2 e resolução de exercícios.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'Primeira e Segunda Lei da Termodinâmica',
        content:
          'A Primeira Lei da Termodinâmica estabelece o princípio da conservação da energia: a variação da energia interna de um sistema (ΔU) é a diferença entre o calor trocado com o ambiente (Q) e o trabalho realizado (W), ou seja, ΔU = Q - W.\n\nA Segunda Lei da Termodinâmica indica o sentido espontâneo dos processos térmicos: o calor flui espontaneamente de corpos de maior temperatura para corpos de menor temperatura. Além disso, é impossível construir uma máquina térmica que converta integralmente todo o calor recebido em trabalho útil, existindo sempre uma perda de calor para a fonte fria.',
        formula: 'Primeira Lei: ΔU = Q - W  |  Segunda Lei: Q_quente = W + Q_fria  |  Rendimento: η = W / Q_quente = 1 - (T_fria / T_quente)',
        subpoints: [
          'Primeira Lei: traduz a conservação de energia (calor recebido se transforma em variação de energia interna e trabalho).',
          'Segunda Lei: o calor nunca passa espontaneamente de um corpo frio para um quente sem intervenção de trabalho externo.',
          'Nenhuma máquina térmica real ou ideal atinge 100% de rendimento devido à necessidade de rejeitar calor à fonte fria.',
        ],
      },
      {
        number: '2',
        title: 'Dinâmica e o estudo dos gases',
        content:
          'O estudo dos gases ideais analisa as transformações sob variação de pressão (P), volume (V) e temperatura absoluta (T). A dinâmica dos gases relaciona as colisões microscópicas das partículas contra as paredes do recipiente à pressão macroscópica medida.\n\nA equação geral dos gases ideais e a Equação de Clapeyron (P·V = n·R·T) descrevem o comportamento de sistemas gasosos em diferentes estados de equilíbrio e transformações (isotérmica, isobárica, isocórica e adiabática).',
        formula: 'Equação de Clapeyron: P · V = n · R · T  |  Transformação Geral: (P1 · V1) / T1 = (P2 · V2) / T2',
        subpoints: [
          'Dinâmica molecular: a pressão do gás é fruto da taxa de colisões elásticas de suas moléculas por unidade de área.',
          'Transformação Isotérmica (Boyle-Mariotte): T constante → P1 · V1 = P2 · V2 (pressão e volume inversamente proporcionais).',
          'Transformação Isobárica (Charles): P constante → V1 / T1 = V2 / T2 (volume proporcional à temperatura absoluta).',
          'Transformação Isocórica/Isovolumétrica (Gay-Lussac): V constante → P1 / T1 = P2 / T2 (trabalho W = 0).',
          'Transformação Adiabática: sem troca térmica com o exterior (Q = 0), logo ΔU = -W.',
        ],
      },
    ],
    summaryPoints: [
      'Primeira Lei da Termodinâmica: conservação de energia em sistemas térmicos expressa por ΔU = Q - W.',
      'Segunda Lei da Termodinâmica: calor flui espontaneamente do quente para o frio; rendimento nunca alcança 100%.',
      'Dinâmica dos gases ideais: pressão decorrente de colisões e equação geral (P1·V1)/T1 = (P2·V2)/T2.',
      'Transformações gasosas notáveis: isotérmica (T cte), isobárica (P cte), isocórica (V cte) e adiabática (Q = 0).',
    ],
    exercises: [
      {
        id: 'ex-fis-1',
        question:
          'Um sistema gasoso ideal recebe Q = 500 J de calor de uma fonte térmica e realiza um trabalho de W = 300 J sobre o meio externo. Qual é a variação de sua energia interna (ΔU)?',
        options: ['200 J', '800 J', '-200 J', '150 J'],
        correctIndex: 0,
        explanation:
          'Pela Primeira Lei da Termodinâmica: ΔU = Q - W = 500 J - 300 J = +200 J.',
      },
      {
        id: 'ex-fis-2',
        question:
          'De acordo com a Segunda Lei da Termodinâmica e o princípio de Kelvin-Planck:',
        options: [
          'É possível criar um motor que opere sem emitir nenhum calor para uma fonte fria',
          'É impossível construir uma máquina térmica que, operando em ciclo, transforme todo o calor absorvido em trabalho',
          'O calor flui espontaneamente de corpos mais frios para corpos mais quentes',
          'O rendimento de qualquer máquina térmica atinge facilmente 100% no vácuo',
        ],
        correctIndex: 1,
        explanation:
          'O enunciado de Kelvin-Planck afirma que nenhuma máquina térmica em ciclo pode converter integralmente todo o calor recebido em trabalho útil.',
      },
    ],
    materials: [
      {
        id: 'mat-fis-1',
        title: 'Termodinâmica e Dinâmica dos Gases - Prof. Rafael.pdf',
        type: 'pdf',
        size: '3.7 MB',
        pages: 18,
      },
    ],
  },

  // 12. QUÍMICA - Profa. Gabriela
  {
    id: 'aula-quimica',
    key: 'quimica',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Química',
    title: 'QUÍMICA',
    professorRole: 'Professora',
    professorName: 'Profa. Gabriela',
    professorRaw: 'gabriela',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Soluções Químicas e Cinética Química',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'Nesta aula com a Profa. Gabriela, exploramos a classificação das soluções químicas, cálculo de concentração e diluição, e os princípios da Cinética Química: velocidade de reação, fatores de influência e o papel dos catalisadores na redução da energia de ativação.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Soluções Químicas: Soluto, Solvente & Concentração',
        summary: 'Misturas homogêneas, cálculo de concentração comum e interpretação quantitativa.',
      },
      {
        timeInSeconds: 700,
        label: 'Processos de Diluição (C1·V1 = C2·V2)',
        summary: 'Adição de solvente, conservação da massa de soluto e variação da concentração.',
      },
      {
        timeInSeconds: 1530,
        label: 'Cinética Química & Fatores de Velocidade',
        summary: 'Temperatura, concentração, superfície de contato e teoria das colisões.',
      },
      {
        timeInSeconds: 2270,
        label: 'Catalisadores & Energia de Ativação',
        summary: 'Como catalisadores diminuem a barreira energética sem serem consumidos.',
      },
    ],
    topicSections: [
      {
        number: '1',
        title: 'Soluções químicas',
        content:
          'Uma solução é uma mistura homogênea, formada principalmente por um soluto, que é a substância dissolvida, e um solvente, que é a substância que dissolve o soluto. A quantidade de soluto presente em determinada quantidade de solução está relacionada à concentração.\n\nÉ importante saber interpretar situações envolvendo concentração e compreender que, quando aumentamos a quantidade de soluto mantendo o volume da solução, a concentração aumenta. Já quando adicionamos solvente, ocorre uma diluição, diminuindo a concentração.',
        formula: 'Concentração Comum: C = m_soluto / V_solução  |  Diluição: C1 · V1 = C2 · V2',
        subpoints: [
          'Soluto: substância que é dissolvida no solvente (ex: sal, açúcar).',
          'Solvente: componente que dissolve o soluto (água como solvente universal).',
          'Aumento de soluto (volume constante) → aumento direto da concentração.',
          'Adição de solvente (diluição) → a concentração diminui proporcionalmente ao aumento do volume total.',
        ],
      },
      {
        number: '2',
        title: 'Cinética química',
        content:
          'A Cinética Química estuda a velocidade das reações químicas, ou seja, o quão rapidamente os reagentes são transformados em produtos. A velocidade de uma reação pode ser influenciada por fatores como temperatura, concentração dos reagentes, superfície de contato e presença de catalisadores.\n\nUm aumento da temperatura, por exemplo, geralmente aumenta a velocidade da reação porque as partículas passam a colidir com maior frequência e energia. O catalisador também é importante porque aumenta a velocidade da reação ao fornecer um caminho que exige menor energia de ativação, sem ser consumido permanentemente no processo.',
        highlight: 'Fatores aceleradores: maior temperatura, maior concentração, maior superfície de contato e uso de catalisador (que reduz a energia de ativação necessária).',
        subpoints: [
          'Temperatura: fornece energia cinética às moléculas, multiplicando os choques efetivos por segundo.',
          'Concentração: mais partículas reagentes em dado volume elevam a probabilidade de encontros moleculares.',
          'Superfície de contato: sólidos triturados ou pulverizados expõem mais sítios reativos.',
          'Catalisador: reduz a barreira de energia de ativação sem alterar o calor da reação (ΔH) e sem se desgastar.',
        ],
      },
    ],
    summaryPoints: [
      'Soluções químicas: misturas homogêneas compostas por soluto e solvente; concentração = massa/volume.',
      'Diluição: adicionar solvente diminui a concentração sem alterar a massa de soluto (C1·V1 = C2·V2).',
      'Cinética química: mede a rapidez das transformações e depende de temperatura, concentração e superfície de contato.',
      'Catalisadores: aceleram reações ao criar caminho alternativo de menor energia de ativação sem serem consumidos.',
    ],
    exercises: [
      {
        id: 'ex-qui-1',
        question:
          'Um estudante possui 200 mL de uma solução aquosa com concentração de 40 g/L. Ele adiciona água até atingir o volume final de 800 mL. Qual é a nova concentração da solução diluída?',
        options: ['10 g/L', '20 g/L', '5 g/L', '80 g/L'],
        correctIndex: 0,
        explanation:
          'Aplicando a fórmula de diluição C1 · V1 = C2 · V2: 40 g/L · 200 mL = C2 · 800 mL → 8000 = 800 · C2 → C2 = 10 g/L.',
      },
      {
        id: 'ex-qui-2',
        question:
          'Na cinética química, de que maneira um catalisador atua para acelerar a velocidade de uma reação?',
        options: [
          'Aumentando a entalpia total dos produtos da reação',
          'Diminuindo a energia de ativação da reação sem ser consumido no processo',
          'Elevando a temperatura interna do sistema espontaneamente',
          'Consumindo os reagentes para gerar energia térmica extra',
        ],
        correctIndex: 1,
        explanation:
          'O catalisador oferece um mecanismo reacional alternativo com menor energia de ativação, sem ser consumido ou alterar o ΔH.',
      },
    ],
    materials: [
      {
        id: 'mat-qui-1',
        title: 'Soluções e Cinética Química - Profa. Gabriela.pdf',
        type: 'pdf',
        size: '4.1 MB',
        pages: 18,
      },
    ],
  },
];

// 4 Daily Class Schedule cards for Home Screen (as shown in the reference video)
export const LESSONS_DATA: LessonItem[] = [
  // 1. HUMANAS (Matheus, Tatiana, Katia e Olivia)
  {
    id: 'aula-humanas-1',
    key: 'humanas',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Humanas (Geografia, História, Sociologia e Filosofia)',
    title: 'HUMANAS',
    professorRole: 'Professores',
    professorName: 'Matheus, Tatiana, Katia e Olivia',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Dinâmicas Populacionais, Brasil Imperial, Decolonialismo e Ética',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'Aula integrada de Ciências Humanas com os professores Matheus (Geografia: dinâmica populacional, migrações e África), Tatiana (História: Período Regencial e Segundo Reinado), Katia (Sociologia: decolonialismo, África no Brasil e temas contemporâneos) e Olivia (Filosofia: ética e contemporaneidade).',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Geografia: Demografia & Migrações • Prof. Matheus',
        summary: 'Transição demográfica, pirâmides etárias, fluxos migratórios e o continente africano.',
      },
      {
        timeInSeconds: 620,
        label: 'História: Período Regencial & Segundo Reinado • Profa. Tatiana',
        summary: 'Revoltas regenciais, parlamentarismo às avessas, economia cafeeira e abolicionismo.',
      },
      {
        timeInSeconds: 1540,
        label: 'Sociologia: Decolonialismo & Contemporaneidade • Profa. Katia',
        summary: 'África e Brasil, direitos humanos, profissões do futuro e consumo sustentável.',
      },
      {
        timeInSeconds: 2280,
        label: 'Filosofia: Ética & Pensamento Político • Profa. Olivia',
        summary: 'Dilemas éticos contemporâneos e cidadania.',
      },
    ],
    summaryPoints: [
      'Geografia (Prof. Matheus): Dinâmica populacional, transição demográfica, migrações e aspectos da África.',
      'História (Profa. Tatiana): Período Regencial, instabilidade política, Segundo Reinado, café e abolição.',
      'Sociologia (Profa. Katia): Perspectiva decolonial, matrizes afro-brasileiras e temas contemporâneos.',
      'Filosofia (Profa. Olivia): Ética, moral e reflexão crítica social.',
    ],
    exercises: [
      {
        id: 'ex-hum-1',
        question:
          'Qual princípio fundamenta a universalidade dos Direitos Humanos segundo os tratados pós-1948?',
        options: [
          'A vinculação exclusiva à cidadania de países desenvolvidos',
          'A dignidade intrínseca a todos os membros da família humana',
          'A dependência de critérios estritamente econômicos',
          'A subordinação irrestrita às leis consuetudinárias locais',
        ],
        correctIndex: 1,
        explanation:
          'O preâmbulo da Declaração Universal de 1948 reconhece a dignidade inerente e os direitos iguais e inalienáveis de todos os seres humanos.',
      },
    ],
    materials: [
      {
        id: 'mat-hum-1',
        title: 'Caderno Integrado de Humanas - Matheus, Tatiana, Katia e Olivia.pdf',
        type: 'slides',
        size: '5.4 MB',
        pages: 32,
      },
    ],
  },

  // 2. NATUREZA (Camila, Rafael e Gabriela)
  {
    id: 'aula-natureza-1',
    key: 'natureza',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Natureza (Biologia, Física e Química)',
    title: 'NATUREZA',
    professorRole: 'Professores',
    professorName: 'Camila, Rafael e Gabriela',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Fisiologia Digestória/Circulatória, Termodinâmica e Soluções/Cinética',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'Imersão em Ciências da Natureza ministrada pelos professores Camila (Biologia: digestório comparado e circulatório humano), Rafael (Física: leis da termodinâmica e estudo dos gases) e Gabriela (Química: soluções, diluição e cinética química).',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Biologia: Fisiologia Digestória & Circulatória • Profa. Camila',
        summary: 'Absorção no intestino delgado e grosso; circulação fechada, dupla e completa.',
      },
      {
        timeInSeconds: 780,
        label: 'Física: Leis da Termodinâmica & Gases • Prof. Rafael',
        summary: 'ΔU = Q - W, sentido espontâneo do calor, rendimento e transformações gasosas.',
      },
      {
        timeInSeconds: 1620,
        label: 'Química: Soluções & Cinética Química • Profa. Gabriela',
        summary: 'Cálculo de concentração, diluição C1·V1=C2·V2 e fatores que aceleram reações.',
      },
    ],
    summaryPoints: [
      'Biologia (Profa. Camila): Digestão comparada, absorção intestinal e circulação humana fechada, dupla e completa.',
      'Física (Prof. Rafael): Primeira e Segunda Leis da Termodinâmica, Dinâmica e Estudo dos Gases.',
      'Química (Profa. Gabriela): Classificação de soluções, diluição e cinética química com catalisadores.',
    ],
    exercises: [
      {
        id: 'ex-nat-1',
        question:
          'Em uma transformação isobárica de um gás ideal, o que ocorre com o volume se a temperatura absoluta for duplicada?',
        options: [
          'O volume é reduzido pela metade',
          'O volume permanece constante',
          'O volume também duplica',
          'O volume quadruplica instantaneamente',
        ],
        correctIndex: 2,
        explanation:
          'Pela Lei de Charles (V/T = constante a pressão constante), volume e temperatura absoluta são diretamente proporcionais.',
      },
    ],
    materials: [
      {
        id: 'mat-nat-1',
        title: 'Roteiro Integrado de Natureza - Camila, Rafael e Gabriela.pdf',
        type: 'pdf',
        size: '4.7 MB',
        pages: 26,
      },
    ],
  },

  // 3. LINGUAGENS (Regina, Folks, Marcão e Iracema)
  {
    id: 'aula-linguagens-1',
    key: 'linguagens',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Linguagens (Português, Inglês, Artes e Ed. Física)',
    title: 'LINGUAGENS',
    professorRole: 'Professores',
    professorName: 'Regina, Folks, Marcão e Iracema',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Concordância/Regência, Esportes e Mídia, Expressões Corporais e Ergonomia',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'Área de Linguagens e Códigos com o corpo docente: Profa. Regina (Português: concordância e regência verbal e nominal), Prof. Folks (Inglês: cheerleading, hooliganism, flash mob e videogames), Prof. Marcão (Artes: expressões do corpo, dança/música e cosplay) e Profa. Iracema (Ed. Física: ergonomia e fisiologia).',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Português: Concordância & Regência • Profa. Regina',
        summary: 'Casos especiais do sujeito composto, transitividade verbal e preposições obrigatórias.',
      },
      {
        timeInSeconds: 700,
        label: 'Inglês: Sports, Media & Culture • Prof. Folks',
        summary: 'Cheerleading, hooliganism, flash mobs climáticos e povos indígenas nos videogames.',
      },
      {
        timeInSeconds: 1450,
        label: 'Artes: O Corpo e Expressões Estéticas • Prof. Marcão',
        summary: 'Dança, ancestralidade rítmica e a cultura do cosplay e fantasia.',
      },
      {
        timeInSeconds: 2180,
        label: 'Ed. Física: Fisiologia & Ergonomia • Profa. Iracema',
        summary: 'Saúde metabólica, postura corporal e sistemas energéticos.',
      },
    ],
    summaryPoints: [
      'Português (Profa. Regina): Regras de concordância e regência verbal e nominal.',
      'Inglês (Prof. Folks): Cheerleading, hooliganism, intervenções flash mob e games.',
      'Artes (Prof. Marcão): Corpo como suporte expressivo, linguagens coreográficas e cosplay.',
      'Ed. Física (Profa. Iracema): Postura ergonômica e atividade física consciente.',
    ],
    exercises: [
      {
        id: 'ex-port-1',
        question:
          'Em conformidade com a norma-padrão de regência verbal, assinale a oração correta:',
        options: [
          'Eles assistiram o filme no cinema ontem',
          'Eles assistiram ao filme no cinema ontem',
          'O candidato visa o cargo de diretor',
          'Ele aspirou ao ar puro da serra',
        ],
        correctIndex: 1,
        explanation:
          'O verbo "assistir" no sentido de ver/presenciar é transitivo indireto e exige a preposição "a" (assistir ao filme).',
      },
    ],
    materials: [
      {
        id: 'mat-port-1',
        title: 'Guia de Linguagens - Regina, Folks, Marcão e Iracema.pdf',
        type: 'pdf',
        size: '4.2 MB',
        pages: 24,
      },
    ],
  },

  // 4. MATEMÁTICA (Vilson)
  {
    id: 'aula-matematica-1',
    key: 'matematica',
    area: 'matematica',
    areaTitle: 'Matemática',
    subject: 'Matemática',
    title: 'MATEMATICA',
    professorRole: 'Professor',
    professorName: 'Prof. Vilson',
    professorRaw: 'vilson',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Trigonometria, Relações Métricas e Áreas de Figuras Planas',
    themeBg: 'bg-[#EF4444]',
    accentColor: '#EF4444',
    hexColor: '#EF4444',
    playIconColor: 'text-[#b91c1c]',
    badgeBg: 'bg-red-600/30',
    description:
      'Aula com o Prof. Vilson cobrindo: relações métricas no triângulo retângulo (Teorema de Pitágoras, projeções), relações trigonométricas (seno, cosseno, tangente), Lei dos Senos e Cossenos, e cálculo de áreas de figuras planas (triângulos, quadriláteros e círculos).',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Relações Métricas no Triângulo Retângulo',
        summary: 'Pitágoras (a² = b² + c²), projeções m e n, altura relativa (h² = m·n).',
      },
      {
        timeInSeconds: 610,
        label: 'Trigonometria no Triângulo Retângulo',
        summary: 'Seno, cosseno e tangente dos ângulos notáveis de 30°, 45° e 60°.',
      },
      {
        timeInSeconds: 1530,
        label: 'Lei dos Senos e Lei dos Cossenos',
        summary: 'Resolução de triângulos quaisquer e aplicações práticas.',
      },
      {
        timeInSeconds: 2250,
        label: 'Áreas de Figuras Planas',
        summary: 'Fórmulas de áreas para triângulos, trapézios, paralelogramos e círculos.',
      },
    ],
    summaryPoints: [
      'Professor de Matemática: Prof. Vilson.',
      'Relações métricas: a² = b² + c², c² = n·a, b² = m·a, a·h = b·c, h² = m·n.',
      'Trigonometria: sen = op/hip, cos = adj/hip, tan = op/adj.',
      'Lei dos senos (a/senÂ = b/senB̂ = c/senĈ = 2R) e cossenos (a² = b² + c² - 2bc·cosÂ).',
      'Áreas planas: triângulo (b·h/2), círculo (π·r²), trapézio ((B+b)·h/2).',
    ],
    exercises: [
      {
        id: 'ex-mat-1',
        question:
          'Em um triângulo retângulo, as projeções dos catetos sobre a hipotenusa medem m = 9 cm e n = 16 cm. Qual é a medida da altura (h) relativa à hipotenusa?',
        options: ['12 cm', '15 cm', '10 cm', '144 cm'],
        correctIndex: 0,
        explanation:
          'Pela relação métrica h² = m · n: h² = 9 · 16 = 144 → h = √144 = 12 cm.',
      },
    ],
    materials: [
      {
        id: 'mat-mat-1',
        title: 'Formulário Completo de Trigonometria e Métricas - Prof. Vilson.pdf',
        type: 'pdf',
        size: '1.8 MB',
        pages: 6,
      },
      {
        id: 'mat-mat-2',
        title: 'Lista de Exercícios Resolvidos SESI.pdf',
        type: 'pdf',
        size: '4.2 MB',
        pages: 18,
      },
    ],
  },
];
