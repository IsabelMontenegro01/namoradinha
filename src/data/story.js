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
    'Pra você, Bebel, uma gaiatinha de 25 anos, nerdolinha eee que está há 1 ano e meio no TÍTULO de solteira.',
    'Tinha certeza de que demoraria ainda um tempinho para se apaixonar, se entregar, e achar alguém que prestasse e que valesse a pena sair da paz de solterice.',
    'Ela tinha alguns protocolos criados na cabeça dela: ir com calma, observar o dia a dia da pessoa para ver como funcionariam juntas, saber se na rotina corrida, nas semanas em que se veriam apenas 2 dias, saberiam lidar, observar os relacionamtos dela (amoroso, com os pais, amizades), antes de tomar um passo importante. Protocolos de não demonstar tanto e tão rápido, demorar 3 meses para falar eu te amo e uns 6 meses para pedir em namoro...',
    'Ela também tinha dificuldade de falar quando alguma coisa a incomodava. Preferia fingir que nada tava acontecendo (ou fazer um bico kakakka. Isso muito porque ela tinha um certo medo de entrar em algo novo e não estar a disposta a ser a melhor versão dela.',
    'Queria alguém que a acompanhasse em todos os rolês, alguém que a incentivasse a ser melhor, que respeitasse a sua individualidade.',
  ],
  closing: [
    'Ela tinha algumas certezas sobre como queria que fosse o próximo relacionamento.',
    'Ela só não sabia que alguém apareceria para ela tornar suas certezas levemente flexíveis hahahh.',
  ],
  button: 'conhecer você →',
}

export const voce = {
  eyebrow: 'capítulo 02 — meu amor',
  title: 'Agora deixa eu falar de você.',
  photo: { file: 'nicole.jpg', caption: 'você, do jeito que eu mais gosto de olhar' },
  intro: [
    'Você demonstra carinho nas pequenas coisas.',
    'Em um café. Em um chocolate. Em uma carta escrita à mão. Em um buquê de flores que eu não esperava. Em uma mensagem perguntando se eu tomei meu remédio.',
    'Você percebe quando eu não como direito. Pede comida quando descobre que bateu vontade de doce. Lembra de detalhes que eu nem lembro ter contado.',
  ],
  paragraphs: [
    'Você me fez admirar não só a forma como você cuida de mim, mas a pessoa que você é fora disso.',
    'Você tem 25 anos, faz Ciência da Computação, e é organizada e esforçada de um jeito que eu reconheço e respeito — quer crescer profissionalmente, quer estudar, quer trabalhar, quer construir uma família de verdade, com rotina e propósito.',
    'E ao mesmo tempo, você simplifica as coisas de um jeito que eu não tenho. Onde eu ainda tento controlar cada variável, você olha e resolve com uma leveza que eu queria ter mais.',
    'Você já passou quatro anos solteira e, mesmo assim, resolveu apostar em mim. Isso eu não esqueço.',
    'Somos as duas meio ecléticas: gostamos de show de eletrônica e de forró, de balada até o amanhecer e de acordar cedo pra malhar, de restaurante chique e de boteco pé-de-serra sem frescura nenhuma. Um pouco doidinhas, cada uma à sua maneira.',
    'Você é mais baixa que eu, e eu adoro te lembrar disso. Também adoro provocar seu jeito mais quieto — às vezes eu falo, você responde só "sim" ou só "não", e nem percebe que a conversa esperava uma pergunta de volta. Não é falta de vontade de conversar comigo. É só você sendo você, e isso, também, eu acho bonito.',
  ],
  closing: [
    'Foram essas pequenas coisas — nenhuma delas grande o suficiente para virar história sozinha — que fizeram você ocupar, aos poucos, um espaço cada vez maior na minha vida.',
  ],
  button: 'conhecer a nossa história →',
}

/* Linha do tempo do capítulo NÓS.
   Cada item pode ter uma foto (opcional). Se não existir o arquivo,
   o site mostra um espaço reservado elegante no lugar — então pode
   deixar sem foto por enquanto e completar depois. */
export const nosTimeline = [
  {
    date: '27 de maio de 2026',
    text: 'Uma quarta-feira qualquer virou a primeira conversa. No Hinge, sem nenhum plano por trás. A gente foi trocando mensagem até tarde da madrugada, e nenhuma das duas percebeu a hora passar.',
  },
  {
    date: '3 de junho',
    text: 'Primeiro encontro. Bar, depois balada, e a gente ficou por lá até quase 6h da manhã — o tipo de encontro que devia ter durado duas horas e durou a noite inteira. Fomos tomar café numa padaria enquanto a cidade acordava. Eu tomei a iniciativa do nosso primeiro beijo.',
    photo: 'primeiro-encontro.jpg',
  },
  {
    date: 'as semanas seguintes',
    text: 'Um festival de café que você já tinha comprado pouco depois de me conhecer — e que você já tinha até planejado o que fazer caso eu não pudesse ir. Isso, sozinho, já dizia muito sobre como você é.',
    photo: 'festival-cafe.jpg',
  },
  {
    date: 'depois de um jogo do Brasil, em Santo André',
    text: 'Eu bebi mais do que devia e o metrô fechou antes de eu voltar pra São Paulo. Você me chamou pra dormir na sua casa — com seus pais lá — sem pestanejar. Se preocupou se eu estava confortável, ofereceu pijama, e no dia seguinte fez café e misto pra mim antes de eu ir embora. Eu me senti acolhida de um jeito que eu não esperava sentir tão cedo.',
    photo: 'santo-andre.jpg',
  },
  {
    date: 'julho',
    text: 'De férias, a gente finalmente teve tempo de sobra. E foi aí que a relação deixou de ser só encontros e começou a virar rotina: cozinhar juntas, dormir juntas, assistir filme, conversar horas sem perceber, dividir tarefa boba de casa. Você chegava com cartinha, doce, chocolate, escapulário, energético, flor — sempre alguma coisinha, sempre sem eu pedir.',
    photo: 'ferias-julho.jpg',
  },
]

export const nosIntro = {
  eyebrow: 'capítulo 03 — nós',
  title: 'E então, em algum momento, deixou de ser eu e você. Virou nós.',
}

export const nosBridge = [
  'Eu tinha alguns protocolos.',
]

/* O elemento central desta página: os protocolos que a Isabel
   quebrou, um por um, com você. */
export const protocols = [
  { id: '01', text: 'Ir com calma.' },
  { id: '02', text: 'Não se apaixonar rápido demais.' },
  { id: '03', text: 'Esperar pelo menos três meses antes de dizer "eu te amo".' },
  { id: '04', text: 'Não criar expectativas.' },
  { id: '05', text: 'Não perder minha individualidade.' },
]

export const nosReflection = [
  'Eu queria esperar uns três meses pra dizer que te amava. Disse com dois.',
  'Eu tinha medo de me perder em um relacionamento. Com você, comecei a perceber que talvez dividir a vida com alguém não signifique perder a minha — talvez signifique encontrar alguém com quem eu consiga continuar sendo eu enquanto construo algo novo.',
  'Numa conversa, você me perguntou o que eu mais tinha medo em entrar num relacionamento. Eu falei tudo: medo de não conseguir dizer quando algo me incomoda, medo de me anular de novo, medo de sofrer um término, medo de largar minha própria vida pelo caminho. Você disse, sem rodeio, que já estava pronta pra namorar. E isso me mostrou o quanto você é especial — e o quanto eu ainda tinha trabalho a fazer.',
  'Em outro momento você perguntou o que eu queria com você. Foi uma pergunta simples que me fez perceber que eu precisava melhorar a forma como falo do que sinto, e te dar mais segurança do que eu vinha dando.',
  'Foi por isso, também, que comecei a considerar terapia — coisa que eu sempre resisti, porque achava que dava conta sozinha. O fato de eu estar disposta a tentar já foi, pra mim, uma prova de que aquilo importava de verdade.',
  'Porque amar alguém, eu percebi, também é escolher ser uma versão melhor de mim — e escolher a companhia dessa pessoa nos dias bons e nos ruins.',
]

export const nosClosing = [
  'Eu não sei exatamente como vai ser a nossa rotina.',
  'Mas hoje eu sei que quero descobrir.',
]

export const nosButton = 'tenho uma pergunta para você →'

export const pedido = {
  warningEyebrow: 'capítulo 04',
  warningTitle: 'Cuidado: conteúdo sensível',
  warningText: 'A partir daqui não tem mais volta.',
  warningButton: 'continuar por sua conta e risco →',
  loadingMessages: [
    'Preparando pergunta importante...',
    'Verificando batimentos cardíacos...',
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
