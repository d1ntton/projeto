const questions= [
    {
      question: "Por que é importante ficarmos atentos enquanto navegamos na internet?",
      answers:[
        {text: "Para evitar encontrar amigos online", correct: false},
        {text: "Para proteger nossas informações pessoais e dispositivos contra ameaças cibernéticas", correct: true},
        {text: "Para compartilhar todas as nossas informações pessoais livremente", correct: false},
        {text: "Para baixar todos os arquivos que encontramos na internet", correct: false}
      ]
    },
    {
      question: "Quais são algumas maneiras de nos protegermos contra ameaças cibernéticas?",
      answers:[
        {text: "Clicar em qualquer link ou anexo de email que recebemos", correct: false},
        {text: "Compartilhar nossas senhas com estranhos", correct: false},
        {text: "Manter nossos dispositivos e programas atualizados e usar senhas fortes e únicas", correct: true},
        {text: "Ignorar completamente as mensagens de segurança do navegador", correct: false}
      ]
    },
    {
      question: "O que é um Trojan e como ele pode prejudicar nossos dispositivos?",
      answers:[
        {text: "Tipo de cavalo-marinho que nada na internet", correct: false},
        {text: "Um programa de computador criado para nos ajudar a proteger nossos dispositivos", correct: false},
        {text: "Um programa de computador criado para prejudicar ou causar danos aos nossos dispositivos, como roubar informações pessoais ou danificar o sistema", correct: true},
        {text: "Um tipo de vírus que só afeta dispositivos móveis", correct: false}
      ]
    },
    {
      question: "Por que é importante manter o sistema operacional atualizado para evitar baixar vírus?",
      answers:[
        {text: "Para garantir que os aplicativos funcionem corretamente", correct: false},
        {text: "Para evitar que hackers acessem o computador facilmente", correct: false},
        {text: "Para receber novos recursos de segurança", correct: true},
        {text: "Para economizar espaço de armazenamento no computador", correct: false}
      ]
    },
    {
      question: "Qual é a diferença entre um vírus e um adware?",
      answers:[
        {text: "Um vírus infecta o computador automaticamente, enquanto um adware exibe anúncios sem permissão", correct: true},
        {text: "Um vírus é um programa malicioso que rouba informações pessoais, enquanto um adware exibe anúncios invasivos", correct: false},
        {text: "Um vírus pode se espalhar para outros computadores, enquanto um adware exibe anúncios em um único dispositivo", correct: false},
        {text: "Um vírus bloqueia o acesso aos arquivos do computador, enquanto um adware não prejudica o funcionamento do sistema", correct: false}
      ]
    },
    {
      question: "Por que é recomendado não abrir anexos suspeitos em e-mails?",
      answers:[
        {text: "Para evitar que o e-mail seja marcado como spam", correct: false},
        {text: "Para proteger o computador contra worms que se replicam automaticamente", correct: true},
        {text: "Para garantir que o remetente receba uma resposta ao e-mail", correct: false},
        {text: "Para manter o sistema operacional atualizado automaticamente", correct: false}
      ]
    },
    {
      question: "Por que é importante verificar o remetente de um e-mail antes de clicar em qualquer link?",
      answers:[
        {text: "Para evitar spam na caixa de entrada", correct: false},
        {text: "Para garantir que o remetente seja uma pessoa conhecida", correct: false},
        {text: "Para identificar se o e-mail é legítimo ou suspeito", correct: true},
        {text: "Para enviar uma resposta ao remetente", correct: false}
      ]
    },
    {
      question: "Qual é a importância de evitar pressões ao receber mensagens suspeitas?",
      answers:[
        {text: "Para não se sentir pressionado", correct: false},
        {text: "Para garantir que a mensagem seja lida", correct: false},
        {text: "Para evitar ser enganado por táticas de phishing", correct: true},
        {text: "Para responder rapidamente à mensagem", correct: false}
      ]
    },
    {
      question: "Por que é recomendado usar ferramentas de segurança, como antivírus, ao lidar com links suspeitos?",
      answers:[
        {text: "Para proteger o computador contra vírus físicos", correct: false},
        {text: "Para detectar e bloquear links maliciosos antes de clicar neles", correct: true},
        {text: "Para enviar relatórios sobre links suspeitos aos desenvolvedores de software", correct: false},
        {text: "Para compartilhar informações sobre links suspeitos com amigos e familiares", correct: false}
      ]
    },
    {
      question: "Qual é uma maneira eficaz de confirmar a autenticidade de um link suspeito?",
      answers:[
        {text: "Clicar no link imediatamente para verificar seu conteúdo", correct: false},
        {text: "Comparar o link com outros links similares", correct: false},
        {text: "Entrar em contato com a empresa ou pessoa por telefone", correct: true},
        {text: "Compartilhar o link em redes sociais para obter feedback", correct: false}
      ]
    }
  ];
  
// Função para embaralhar as perguntas
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Chame a função shuffle para embaralhar as perguntas
shuffle(questions);