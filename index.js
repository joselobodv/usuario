let usuarios = [
  {
    nome: "jose",
    email: "jose@gmail.com",
    idade: "23",
  },
  {
    nome: "joao",
    email: "joao@gmail.com",
    idade: "33",
  },
];

let entrada = "";

console.log("Digite seu nome:");

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim();

  for (let i = 0; i < usuarios.length; i++) {
    if (entrada == usuarios[i].nome) {
      console.log("Seja bem-vindo!");
      break;
     }else {
        console.log("Usuario não encontrado")
     }
  }
});
