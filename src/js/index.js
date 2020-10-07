const h1 = document.getElementById('titulo')
const botao = document.getElementById('botao')

const bemVindoEmMuitasLinguas = [
  'Seja bem-vindo',
  'Welcome',
  'Bienvenue',
  'ようこそ',
  'Welkom',
  'Witamy'
]

const getRandomNumber = () => Math.floor((Math.random() * bemVindoEmMuitasLinguas.length))

botao.addEventListener('click', () => {
  let random, text

  do {
    random = getRandomNumber()
    text = bemVindoEmMuitasLinguas[random]
  } while (h1.textContent === text)

  h1.textContent = bemVindoEmMuitasLinguas[random]
})
