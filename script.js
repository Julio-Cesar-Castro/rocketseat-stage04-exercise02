// Random Number
let randomNumber = Math.round(Math.random() * 10)

// List 
let phrases = [
  "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!", 
  "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem", 
  "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!", 
  "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!", 
  "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!", 
  "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!", 
  "A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.", 
  "Só tenho gratidão por tudo o que enfrentei até chegar aqui. E também muita esperança no coração por todos os desafios que ainda virão!", 
  "Sucesso é um esporte coletivo. Demonstre gratidão a todos os que colaboram com suas vitórias.", 
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre."
];

// Elements

let Home = document.querySelector(".home")
let ResultPage = document.querySelector(".resultPage")
let btnNext = document.querySelector("#btnNext")
let btnBack = document.querySelector("#btnBack")
let Phrash = document.querySelector("#Phrase")

//functions 
function changePhrash(){
  return phrases[randomNumber]
}

function handleNextPage(event){
  event.preventDefault()

  ResultPage.classList.toggle("hide")
  Home.classList.toggle("hide")

  Phrash.innerHTML = changePhrash()
}

function handleBackPage(event) {
  
  ResultPage.classList.toggle("hide")
  Home.classList.toggle("hide")
}