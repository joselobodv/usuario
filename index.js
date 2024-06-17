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

console.log("Digite o e-mail a ser pesquisado:");

process.stdin.on("data", function (data) {
  let email = data.toString().trim();
  let usuario

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email == email) {
        usuario = usuarios[i]
      console.log("Seja bem-vindo!");
    }
  }
  if(usuario){
    console.log(usuario)
  }else{
    console.log("Usuario não encontrado")
  }
});


