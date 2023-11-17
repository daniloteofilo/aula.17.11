import './style.css'

const usuarios = [{
  nome: "Danilo",
  idade: 31,
  profissao: "Estudante"
},{
  nome: "Fabio",
  idade: 25,
  profissao: "Programador"
},{
  nome: "Julia",
  idade: 22,
  profissao: "Enfermeira"
},{
  nome: "Jose",
  idade: 24,
  profissao: "Estudante"
}];

const nomes = usuarios.map((usuario) => {
  return {nomes: usuario.nome, idades: usuario.idade}
})


const usuariosFiltrados = usuarios.filter((usuario)=> usuario.profissao === "Estudante")


const somaIdades = usuarios.reduce((acc, usuarios) => {
  return acc + usuarios.idade
}, 0)

const mediaIdades = somaIdades/usuarios.length



function chamaNome(nome, sobrenome){
  alert(`Meu nome é ${nome} e meu sobrenome é ${sobrenome}`)
}

chamaNome("nome", "sobrenome")
















