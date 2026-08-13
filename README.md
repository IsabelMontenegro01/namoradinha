# para a nicole 💛

Site interativo de pedido de namoro — carta digital em 4 capítulos:
**Eu → Você → Nós → O Pedido**.

## Como rodar no seu computador

Você precisa ter o [Node.js](https://nodejs.org) instalado (qualquer versão 18 ou mais nova).

```bash
# instalar as dependências (só precisa fazer isso uma vez)
npm install

# rodar localmente, com atualização automática ao salvar
npm run dev
```

Isso abre um endereço tipo `http://localhost:5173` — abra no navegador
(ou no celular, se estiver na mesma rede Wi-Fi, usando o IP mostrado no terminal).

Quando estiver pronto para mostrar para a Nicole:

```bash
npm run build
```

Isso gera uma pasta `dist/` com o site pronto. Você pode:
- subir essa pasta em qualquer hospedagem gratuita (Vercel, Netlify, GitHub Pages, Cloudflare Pages — todas têm opção de "arrastar e soltar a pasta");
- ou simplesmente abrir `dist/index.html` direto no navegador para conferir.

## O que editar, e onde

| Quero mudar...                              | Vou em...                                   |
|-----------------------------------------------|----------------------------------------------|
| Qualquer texto do site                        | `src/data/story.js`                          |
| Fotos                                          | `src/assets/images/` (veja o README de lá)   |
| GIF de comemoração                             | `src/assets/gifs/` (veja o README de lá)     |
| Música de fundo                                | `src/assets/music/` (veja o README de lá)    |
| Cores gerais / fontes / espaçamentos           | `src/styles/global.css` (topo do arquivo)    |
| Visual só do capítulo "Eu"                     | `src/styles/eu.css`                          |
| Visual só do capítulo "Você"                   | `src/styles/voce.css`                        |
| Visual só do capítulo "Nós"                    | `src/styles/nos.css`                         |
| Visual só do capítulo "Pedido"                 | `src/styles/pedido.css`                      |
| Comportamento do botão "não" (o quanto ele encolhe) | `src/pages/Pedido.jsx`, constantes `NO_SCALE` e `YES_SCALE` no topo |
| Mensagens do loading antes da pergunta         | `loadingMessages` em `src/data/story.js`     |
| Linha do tempo do capítulo "Nós" (adicionar/remover momentos) | `nosTimeline` em `src/data/story.js` |
| Lista de protocolos quebrados                  | `protocols` em `src/data/story.js`           |

Nenhuma dessas edições exige entender React — a maioria é só trocar texto
dentro de aspas, ou trocar um valor de cor (tipo `#7f97ab`) por outro.

## Estrutura do projeto

```
src/
├── components/     → peças reutilizáveis (botões de navegação, moldura de foto,
│                     player de música, tela de loading, lista de protocolos,
│                     confete, badge do Yoda)
├── pages/          → um arquivo por capítulo (Intro, Eu, Voce, Nos, Pedido)
├── styles/         → um CSS por capítulo + global.css com as variáveis de cor/fonte
├── data/           → story.js, com TODOS os textos do site
├── assets/
│   ├── images/     → suas fotos (veja o README.txt lá dentro)
│   ├── gifs/       → o gif de comemoração
│   └── music/      → a trilha sonora
├── App.jsx         → só a navegação entre capítulos, nada de conteúdo
└── main.jsx         → ponto de entrada do React
```

## Detalhes técnicos que talvez você queira saber

- **Sem backend, sem banco de dados.** É só um site estático — os arquivos
  gerados por `npm run build` podem ser hospedados em qualquer lugar simples.
- **Recarregar a página sempre volta pro início** — de propósito, como pedido
  no briefing. Não há progresso salvo.
- **Se uma foto, o gif ou a música não estiverem lá**, o site não quebra —
  ele mostra um espaço reservado no lugar (fotos) ou simplesmente esconde o
  elemento (gif e música). Dá pra testar o site inteiro antes mesmo de ter
  todos os arquivos.
- **Mobile primeiro.** Testado para funcionar bem numa tela de celular, já
  que é provavelmente assim que você vai mostrar pra ela.
