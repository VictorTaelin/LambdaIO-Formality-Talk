var slides = [

`// Desmistificando tipos dependentes e provas formais //
// ================================================== //
//     O futuro inevitável de linguagens tipadas?     //
//                                                    //
//                   ============..                   //
//                   \\\\  \\\\      ||                   //
//                    \\\\  \\\\=====''                   //
//                     \\\\  \\\\===..                    //
//                     /\\\\  \\\\  ||                    //
//                    // \\\\  \\\\=''                    //
//                   //  /X\\\  \\\\                      //
//                  //  // \\\\  \\\\                     //
//                 |/__//   \\\\__\\\|                    //
//                                                    //
//                                                    //
//     por Victor Maia, CTO da Sunshine Cybernetics   //
//____________________________________________________//
//
//
//
// (busqueumaexplicaçãomaissimplesefalhecomoumprogramaimperativo)`,
//==============================================================================
`// Por que tipos dependentes importam?
// ===================================
//
// R: Permitem colocar valores e expressões no nível dos tipos,
//    possibilitando que o programador especifique e verifique
//    requisitos arbitrários em tempo de compilação.`,
//==============================================================================
`// Por que tipos dependentes importam?
// ===================================

# // JavaScript
function div(a, b) {
  return a / b;
} #

// Problema: div("foo", 0) = ?
`,
//==============================================================================
`// Por que tipos dependentes importam?
// ===================================

# // JavaScript
function div(a, b) {
  assert(typeof a === "number");
  assert(typeof b === "number");
  assert(b !== 0);
  return a / b;
} #

// Checagem em tempo de execução:
// 1. Afeta performance
// 2. O avião cai
`,
//==============================================================================
`// Por que tipos dependentes importam?
// ===================================

# // TypeScript
function div(a: Number, b: Number) {
  assert(b !== 0);
  return a / b;
} #

// Melhor, mas ainda checa algo em tempo de execução...`,
//==============================================================================
`// Por que tipos dependentes importam?
// ===================================

# // "FormalityScript"                  \\/ isso é um tipo!
function div(a: Number, b: Number, p: b != 0) {
  return a / b;
} #

// O terceiro argumento *depende* do valor do segundo.
// Ele restringe seu *valor* de forma arbitrária.
// É *impossível* div crashar seu programa.`,
//==============================================================================`
`// Por que provas formais importam?
// ================================

// 1. Sem provas formais, é impossível "satisfazer" tipos dependentes

# // "FormalityScript"
function foo(x: Number) {
  return div(10, x * x + 1, ????);
} #

// 2. Permite que a linguagem seja usada para prática da matemática!

// 3. Novo tipo de conhecimento
`,
//==============================================================================
`// Formality
// =========
// - Puramente funcional (como Haskell)
// - Tipos dependentes e provas formais
// - Minimalista: interpreter + type-checker = 500 LOC
// - Sintaxe familiar (estilo JavaScript)
// - Eficiente (compila pra .js, .hs ou fm-net)
// - Moonad.org: package manager ou rede social?`,
//==============================================================================
`// Hello, world!
// =============
// - Programa = série de declarações
// - Declaração = nome, tipo, corpo
// - IO(Unit) = um monad pra descrever efeitos

main: IO(Unit)
  IO.print("Hello, world!")
`,
//==============================================================================
`// Princípios do Formality
// =======================
// 1. Especificar tipos
// 2. Programar funções 
// 3. Provar teoremas
// 4. Rodar programas`,
//==============================================================================
`// Especificando um tipo
// =====================
// - Um tipo é como um conjunto com N elementos

T Cor
| amarelo;
| verde;
| azul;
| roxo;
| vermelho;
| laranja;

cor_favorita: Cor
  azul`,
//==============================================================================
`// Programando funções
// ===================
// - Funções são feitas por análise de casos (pattern-matching)

girar(cor: Cor): Cor
  case cor:
  | amarelo  => verde;
  | verde    => azul;
  | azul     => roxo;
  | roxo     => vermelho;
  | vermelho => laranja;
  | laranja  => amarelo;`,
//==============================================================================
`// Programando funções
// ===================
// - Funções são feitas por análise de casos (pattern-matching)

desgirar(cor: Cor): Cor
  case cor:
  | amarelo  => laranja;
  | verde    => amarelo;
  | azul     => verde;
  | roxo     => azul;
  | vermelho => roxo;
  | laranja  => amarelo;`,
//==============================================================================
`// Programando funções
// ===================
// - Funções são feitas por análise de casos (pattern-matching)

descer(cor: Cor): Cor
  case cor:
  | amarelo  => verde;
  | verde    => azul;
  | azul     => roxo;
  | roxo     => roxo;
  | vermelho => roxo;
  | laranja  => vermelho;`,
//==============================================================================
`// Programando funções
// ===================
// - Funções são feitas por análise de casos (pattern-matching)

subir(cor: Cor): Cor
  case cor:
  | amarelo  => amarelo;
  | verde    => amarelo;
  | azul     => verde;
  | roxo     => vermelho;
  | vermelho => laranja;
  | laranja  => amarelo;`,
//==============================================================================
`// Provando teoremas
// =================
// 
//                    \\/ Isso é um tipo! (com variáveis...)
verde_eh_verde: verde == verde
  proprio<_, verde>   // Isso é um valor... ou uma... *prova*!? :0

// Tipo dependente é só um              tipo com variáveis!
// Prova formal    é só um (valor cujo) tipo tem variáveis!










//                                sevcdiscordadessadefiniçãovemprox1noob
`, 
//==============================================================================
`// Provando teoremas
// =================

cor_favorita_eh_azul: cor_favorita == azul
  proprio<_, azul>
  
// Mas e se a gente mudar 'azul' pra 'amarelo'?
`,
//==============================================================================
`// Especificando um tipo
// =====================

T Sentido
| horario;
| anti_horario;`,
//==============================================================================
`// Programando funções
// ===================

// amarelar(cor: Cor): Sentido
//   case cor:
//   | amarelo  => ?what;
//   | verde    => anti_horario;
//   | azul     => anti_horario;
//   | roxo     => horario; // tanto faz
//   | vermelho => horario;
//   | laranja  => horario;`,
//==============================================================================
`// Programando funções
// ===================

# // TypeScript
function amarelar(cor: Cor): Sentido {
  switch (cor) {
    case "amarelo" : throw "Não se pode amarelar o amarelo.";
    case "verde"   : return "anti_horario";
    case "azul"    : return "anti_horario";
    case "roxo"    : return "horario"; // tanto faz
    case "vermelho": return "horario"; 
    case "laranja" : return "horario";
  }
} #`,
//==============================================================================
`// Programando funções
// ===================

amarelar(cor: Cor)<naorelo: cor != amarelo>: Sentido
  case cor:
  with naorelo : cor.self != amarelo = naorelo;
  | amarelo  => absurdo<>(naorelo(_));
  | verde    => anti_horario;
  | azul     => anti_horario;
  | roxo     => horario;
  | vermelho => horario;
  | laranja  => horario;

// Com tipos dependentes, é possível previnir qualquer erro de execução ("bug")!
`,
//==============================================================================
`// Programando funções
// ===================

// comparar(a: Cor, b: Cor): a == b ou a != b

test.0: Sentido
  amarelar(azul)<comparar(azul, amarelo)>

test.1: Sentido
  amarelar(verde)<comparar(verde, amarelo)>

// test.2: Sentido
//   amarelar(amarelo)<comparar(amarelo, amarelo)>
`,
//==============================================================================
`// Programando funções
// ===================

// alguma_funcao_0(cor: Cor): Sentido
//   amarelar(cor)<?what>

// Impossível chamar amarelar em uma variável "cor"!
`,
//==============================================================================
`// Programando funções
// ===================

// alguma_funcao_1(cor: Cor): Sentido
//   amarelar(descer(cor))<?what>

// Porém, e se a gente fizesse assim?
`,
//==============================================================================
`// Provando teoremas
// =================

cor_descida_nao_eh_amarelo(cor: Cor): descer(cor) != amarelo
  case cor:
  | amarelo  => comparar(verde, amarelo);
  | verde    => comparar(azul, amarelo);
  | azul     => comparar(roxo, amarelo);
  | roxo     => comparar(roxo, amarelo);
  | vermelho => comparar(roxo, amarelo);
  | laranja  => comparar(vermelho, amarelo);
  : descer(cor.self) != amarelo;
`,
//==============================================================================
`// Provando teoremas
// =================

alguma_funcao_2(cor: Cor): Sentido
  amarelar(descer(cor))<cor_descida_nao_eh_amarelo(cor)>

// Resumindo...
// 1. Tipos dependentes restringem o domínio da função arbitrariamente
// 2. Provas formais convencem o compilador que respeitamos restrições
// 3. Com isso, criamos funções impossíveis de crashar em execução
`,
//==============================================================================
`// Provando teoremas
// =================

// teorema_giratorio(cor: Cor): desgirar(girar(cor)) == cor
//  ?what
`,
//==============================================================================
`// Provando teoremas
// =================

// teorema_giratorio(cor: Cor): desgirar(girar(cor)) == cor
//   case cor:
//   | amarelo  => proprio<_, amarelo>;
//   | verde    => proprio<_, verde>;
//   | azul     => proprio<_, azul>;
//   | roxo     => proprio<_, roxo>;
//   | vermelho => proprio<_, vermelho>;
//   | laranja  => proprio<_, laranja>;
//   : desgirar(girar(cor.self)) == cor.self;

// Provar teoremas nos ajuda a achar problemas no nosso código!
`,
//==============================================================================
`// O tipo lista
// ============

// Uma lista de T é:
// - Uma lista vazia (nil);
// - Ou a junção (cons) de uma cor a uma lista de outras cores;

T List<T: Type>
| nil;
| cons(head: T, tail: List(T));
`,
//==============================================================================
`// A função head
// =============

// head<T: Type>(list: List(T)): T
//   case list:
//   | nil  => ?what;
//   | cons => list.head;

// No Haskell, chamar essa função numa lista vazia causa um erro de execução!
`,
//==============================================================================
`// Primeiro elemento
// =================

head<T: Type>(list: List(T), not_empty: list != nil<T>): T
  case list:
  with not_empty : list.self != nil<T> = not_empty;
  | nil  => absurdo<>(not_empty(_));
  | cons => list.head;

// No Formality, podemos evitar esse erro em tempo de compilação.
`,
//==============================================================================
`// O tipo vetor
// ============

T Vector<T: Type>                            ~ (size: Nat)
| v_nil                                      ~ (0);
| v_cons<n: Nat>(head: T, tail: Vector(T,n)) ~ (Nat.succ(n));

um_vetor: Vector(Cor, 3)
  v_cons<Cor,2>(verde,
  v_cons<Cor,1>(vermelho,
  v_cons<Cor,0>(azul,
  v_nil<Cor>)))
`,
//==============================================================================
`// Muitas outras coisas legais...
// ==============================
// - O tipo vazio ("do vazio, tudo se cria")
//   T Empty
//   void(empty: Empty): 1 == 0
//     case empty:
//     : 1 == 0;
// 
// - Pares dependentes como sub-tipos
//   - numeros que sejam primos...
//   - listas que sejam ordenadas...
// 
// - Funções que retornam tipos diferentes (e *não* um "Either")...
//   - polifun(x: Bool): if x then Nat else String
//       case x:
//       | true  => 1337;
//       | false => "biscoito";
// 
// - Interaction nets, optimal reductions, linearidade...
`,
//==============================================================================
//`// Funções podem retornar tipos diferentes!
//// ========================================

//polifun.type(x: Bool): Type
  //if x then
    //Nat
  //else
    //String

//polifun(x: Bool): polifun.type(x)
  //case x:
  //| 1337;
  //| "biscoito";
  //: polifun.type(x.self);

//usando_polifun_a: Nat
  //polifun(true)

//usando_polifun_b: String
  //polifun(false)
//`,
//==============================================================================
//`// O tipo vazio
//// ============

//// Cor tem 6 elementos, Bool tem 2, Unit tem 1... Vazio tem 0?

//// T Bool
//// | true;
//// | false;

//// T Unit
//// | unit;

//// T Empty`,
//==============================================================================
//`// O critério da análise de casos
//// ==============================

//bool_to_string(bool: Bool): String
  //case bool:
  //| true  => "true";
  //| false => "false";
  //: String;

//unit_to_string(unit: Unit): String
  //case unit:
  //| unit => "unit";
  //: String;

//empty_to_string(empty: Empty): String
  //case empty:
  //: String;
//`,
//==============================================================================
//`// Do vazio, tudo se cria
//// ======================

//void(empty: Empty): 1 == 0
  //case empty:
  //: 1 == 0;
//`,
//==============================================================================
//`// Usando o vazio para restringir funções
//// ======================================

//IsTrue(x: Bool): Type
  //case x:
  //| true  => Unit;
  //| false => Empty;

//so_verdadeiro(x: Bool, vdd: IsTrue(x)): String
  //"deu certo"

//chamando: String
  //so_verdadeiro(true, unit)
//`,
//==============================================================================
//`// O tipo Subset
//// =============

//T Subset<A: Type, B: A -> Type>
//| subset(a: A)<b: B(a)>;

//TrueBool: Type
  //Subset(Bool, IsTrue)

//so_verdadeiro_2(x: TrueBool): String
  //"deu certo"

//chamando_2: String
  //so_verdadeiro_2(subset<Bool,IsTrue>(true)<unit>)
//`,
//==============================================================================
`// Rodando
// =======
// npm i -g formality-lang
// fmjs exemplo >> cmp.js

somatorio(sum: Nat, n: Nat): Nat
  if Nat.eql(n, 0) then
    sum
  else
    somatorio(Nat.add(n, sum), Nat.sub(n, 1))

exemplo: Nat
  somatorio(0, 1000000)
`,
//==============================================================================
`// Moonad.org
// ==========

meu_exemplo: String
  MaiaVictor.example.0(Bool.true)
`,
];

var fs = require("fs");
for (var i = 0; i < slides.length; ++i) {
  fs.writeFileSync("f"+("00"+i).slice(-2)+".fm", slides[i]);
};
