/* ============================================================
   STORY.JS — todo o texto do site fica aqui.
   Se quiser trocar qualquer frase, título ou legenda de foto,
   é aqui que você mexe. Não precisa tocar em nenhum arquivo .jsx
   para editar textos.

   As fotos são referenciadas pelo NOME DO ARQUIVO. Para trocar
   uma foto, basta colocar o arquivo com esse nome dentro de:
   src/assets/images/
   (veja o README.md na raiz do projeto para a lista completa
   de arquivos esperados)
   ============================================================ */

export const intro = {
  lines: [
    'Oi, meu amor.',
    'Hoje eu queria te contar uma história que, há 3 meses, nem imaginei que daria em alguma coisa... maaaas, felizmente, acabou nos trazendo até aqui.',
  ],
  button: 'começar a história →',
}

export const eu = {
  eyebrow: 'capítulo 01 — eu',
  title: 'Antes de falar de nós duas, vou reapresentar a pessoa que começou essa história.',
  photo: { file: 'isabel1.jpg', caption: 'eu, antes de saber que você ia aparecer' },
  paragraphs: [
    'Pra você, Bebel, uma gaiatinha, zuerinha, implicante, de 25 anos, nerdolinha eee que está há 1 ano e meio no TÍTULO de solteira.',
    'Ela tinha certeza de que demoraria ainda um tempinho para se apaixonar, se entregar e achar alguém que prestasse e que valesse a pena sair da paz da solteirice hahahh.',
    'Ela tinha alguns protocolos criados na cabeça dela: ir com calma, observar o dia a dia da pessoa para ver como funcionariam juntas, saber se, na rotina corrida, nas semanas em que se veriam apenas 2 dias, saberiam lidar, observar os relacionamentos dela (passado amoroso, com os pais, amizades) antes de dar um passo importante. Protocolos de não demonstrar tanto e tão rápido, demorar 3 meses para falar "eu te amo" e uns 6 meses para pedir em namoro...',
    'Ela também tinha dificuldade de falar quando alguma coisa a incomodava. Preferia fingir que nada tava acontecendo (ou fazer um bico kakakka). Isso muito porque ela tinha um certo medo de entrar em algo novo e não estar disposta a ser a melhor versão dela.',
    'Queria alguém que a acompanhasse em todos os rolês, alguém que a incentivasse a ser melhor, que respeitasse a sua individualidade.',
  ],
  closing: [
    'Ela tinha algumas certezas sobre como queria que fosse o próximo relacionamento.',
    'Ela só não sabia que alguém apareceria para ela tornar seus protocolos levemente flexíveis hahahh.',
  ],
  button: 'conhecer você →',
}

export const voce = {
  eyebrow: 'capítulo 02 — meu amor',
  title: 'Agora deixa eu falar da pessoa mais importante dessa história: você, meu amor.',
  photo: { file: 'nicole1.jpg', caption: 'você, do jeito que eu mais gosto de olhar' },
  intro: [
    'Essa mulher linda, meiga, inteligente, carinhosa, atenciosa...',
  ],
paragraphs: [
    'Você, meu amor, sempre deixou muito claro o que sentia. Desde o começo, me fazia sentir especial, diferente das outras pessoas que você já tinha conhecido, e sempre fazia questão de demonstrar isso.',
    'Você me incentiva a ser mais disciplinada (mesmo que às vezes me dê um docinho no meio do caminho), me incentiva a ser mais gostosa, me motiva a ser mais estudiosa, a me dedicar mais às coisas e a ser mais família.',
    'Você me deixa confortável para ser esquisitinha em paz (até porque você também tem as suas peculiaridades heheh). É paciente com meu jeitinho brincalhão, com minhas esquisitices e as entende sem me julgar.',
    'Você, minha princesa, sempre se preocupa se eu estou confortável, se estou bem, se preciso de alguma coisa, independentemente de eu estar na minha casa, na sua casa ou até quando estamos longe. Percebe cada detalhe e está sempre prestando atenção, fazendo de tudo para que eu me sinta bem.',
    'E, além de tudo isso, você é organizada, cheirosa, educada, amorosa, lindaaaa, gostosaaa, deliciosa, tem mãozinhas incríveis hihihi, além de ter um coraçãozinho muito bom, que é desproporcional à sua altura. É a minha melhor dupla na cozinha e nos damos muito bem na organização no geral.',
    'Você tem os melhores presentes e mimos: o primeiro café que você me deu de presente, as cartinhas, o escapulário, os buquês mais mais lindos, o dia em que você pediu cookie no iFood só porque eu estava com vontade de doce. São essas inúmeras coisinhas que talvez pareçam pequenas, mas que sempre me marcam e me fizeram ter mais certeza de que você era a mulher para mim.',
],
  
  closing: [
    'Foram todos esses detalhes que fizeram você ocupar, aos poucos, um espaço cada vez maior na minha vida.',
  ],
  button: 'conhecer a nossa história →',
}

/* Linha do tempo do capítulo NÓS.
   Cada item pode ter uma foto (opcional). Se não existir o arquivo,
   o site mostra um espaço reservado elegante no lugar — então pode
   deixar sem foto por enquanto e completar depois. */
export const nosTimeline = [

  {
    date: '27 de maio de 2026 - Primeira conversa',
    text: 'Uma quarta-feira qualquer virou a primeira conversa. No Hinge, sem nenhuma perspectiva de dar certo, a gente foi trocando mensagens até tarde da madrugada, sem perceber a hora passar.',
  },

  {
    date: '3 de junho de 2026 - Primeiro encontro',
    text: 'Bar, depois balada, e a gente ficou por lá até quase 6h da manhã. Fomos tomar café na padaria. OBS: tomei a iniciativa do primeiro beijo e das saliências.',
    photo: 'primeiro-date.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '14 de junho de 2026 - Primeiro Airbnb',
    text: 'Ainda muito tímidas, nos divertimos no CTN, tivemos nossos primeiros toques e ainda bebemos vinho no Airbnb. Observação: eu estava há 5 dias bebendo direto hahha.',
    photo: 'primeiro-airbnb.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '24 de junho de 2026 - Primeira vez em Santo André',
    text: 'Jogo do Brasil mais emocionante da minha vida hahahh.',
    photo: 'santo-andre.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '27 de junho de 2026 - Festival de café',
    text: 'Festival que você já tinha comprado pouco depois de me conhecer, mesmo sem eu dar certeza de que conseguiria ir — ou melhor, sem saber se a gente estaria juntas kakak.',
    photo: 'festival-cafe.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: 'Semanas seguintes',
    text: 'Muitas idas ao Share, muitos vinhos, jantares cozinhados por nós duas juntas, convivência de casadas, discussões mais profundas, etc...',
    photo: 'semanas-seguintes.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '10 de julho de 2026 - Primeiras fotinhas no Share',
    photo: 'foto-share.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: 'Mais bares',
    photo: 'mais-bares.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '14 de julho de 2026 - Primeira videochamada',
    text: 'Eu estava em GV e você, com saudade (e eu também), sugeriu ligarmos por vídeo. Ficamos 2h conversando sem parar, com direito a uma mini DR.',   
    photo: 'primeira-videochamada.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '18 de julho de 2026 - Primeiro buquê',
    text: 'O buquê mais lindo que eu já ganhei, com uma sensação indescritível quando o vi no carro.',    
    photo: 'primeiro-buque.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '28 de julho de 2026 - Primeiro treino juntas',
    photo: 'primeiro-treino.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '29 de julho de 2026 - Primeiro "te amo"',
    text: 'Eu, toda gaizinha, já tinha percebido que te amava e coloquei a música de contexto para dizer que "amar você é leve".',    
    photo: 'te-amo.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '2 de agosto de 2026 - Primeiro rolê de eletrônica',
    text: 'Essa foi a festa de eletrônica a que fomos oficialmente juntas. Bebemos, dançamos e curtimos muito.',   
    photo: 'eletronica.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '9 de agosto de 2026 - Conhecendo sua mamãe',
    text: 'O festival que você já tinha comprado pouco depois de me conhecer, mesmo sem eu dar certeza de que conseguiria ir — ou melhor, sem saber se a gente estaria juntas kakak.',    
    photo: 'conhecendo-mae.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: '14 de agosto de 2026 - Primeira festa do Inteli',
    text: 'A primeira festa do Inteli juntas. Mais uma oportunidade de beber, dançar, curtir e criar mais uma memória nossa.',   
    photo: 'festa-inteli.jpg',
    aspect: '1080 / 1200',
  },

  {
    date: 'Mediocridade do dia a dia',
    text: 'Que possamos viver muito a mediocridade do dia a dia.',   
    photo: 'mediocridade.jpg',
    aspect: '1080 / 1200',
  },

]

export const nosIntro = {
  eyebrow: 'capítulo 03 — nós',
  title: 'E então, começamos a construir a NOSSA história',
}

export const nosBridge = [
  'Agora, relembrando meus protocolos.',
]

/* O elemento central desta página: os protocolos que a Isabel
   quebrou, um por um, com você. */
export const protocols = [
  { id: '01', text: 'Ir com calma.' },
  { id: '02', text: 'Não se apaixonar rápido demais.' },
  { id: '03', text: 'Não criar expectativas.' },
  { id: '04', text: 'Esperar pelo menos três meses antes de dizer "eu te amo".' },
  { id: '05', text: 'Esperar pelo menos seis meses pedir em namoro.' },
]

export const nosReflection = [
  'Eu queria esperar uns três meses pra dizer que te amava. Disse com dois.',
  'Eu tinha medo de me perder em um relacionamento. Com você, comecei a perceber que talvez dividir a vida com alguém não signifique perder a minha, mas encontrar alguém com quem eu consiga continuar sendo eu enquanto construo algo novo e me transbordo.',
  'Numa conversa, você me perguntou do que eu mais tinha medo ao entrar em um relacionamento. Eu falei tudo: medo de não conseguir dizer quando algo me incomoda, medo de me anular, medo de sofrer um término, medo de não dar o meu melhor. Enquanto isso, você disse, sem titubear, que já estava pronta pra namorar. E isso me mostrou o quanto você é especial e o quanto você me fazia sentir especial.',
  'Em outro momento, você perguntou o que eu queria com você. Foi uma pergunta simples que me fez perceber que eu precisava melhorar a forma como falo sobre o que sinto e te dar mais segurança do que eestávamos construindo.',
  'Foi por isso, também, que comecei a considerar procurar ajuda, fazer terapia, para não repetir erros do passado. Percebi que eu queria ser alguém melhor e saber receber todo esse amor que você tinha pra me dar. Foi assim que eu percebi que EU ESTAVA AMANDO VOCÊ, MEU AMOR, porque amar é escolher aquela pessoa independentemente dos dias bons ou ruins e, principalmente, estar disposta a se doar para ela. E foi isso que eu estava disposta a fazer a partir dali.',
  'Depois de falar "eu te amo", nossa rotina foi ficando mais corrida e difícil de nos vermos. Mas foi aí que eu percebi o quanto eu sentia saudade, o quanto eu te queria perto de mim e presente em todos os momentos, o quanto eu quero fazer todos os rolês, explorar o mundo com você, o quanto e quero um filho com seus olhões, o quanto eu gosto de te ouvir contar sua história, o quanto eu te admiro, o quanto temos características parecidas e o quanto temos objetivos futuros parecidos.',
]

export const nosClosing = [
  'Tudo isso só me faz querer formalizar o que já estamos vivendo e sentindo...',
]

export const nosButton = 'tenho uma pergunta para você →'

export const pedido = {
  warningEyebrow: 'capítulo 04',
  warningTitle: 'Cuidado',
  warningText: 'A partir daqui não tem mais volta.',
  warningButton: 'continuar por sua conta e risco →',
  loadingMessages: [
    'Preparando pergunta importante...',
  ],
  question: {
    name: 'Nicole Ferreira da Silva,',
    ask: 'você quer oficialmente virar minha namorada linda perfeita gostosa?',
  },
  yes: 'SIM ❤️',
  no: 'NÃO',
  successTitle: 'NAMORADAS OFICIALMENTE. ❤️',
  successParagraphs: [
    'Eu te amo, Nicole.',
    'E não vejo a hora de chegarmos ao próximo pedido...',
  ],
}
