let categoria = new Array();

categoria.push(new Categoria("Curta"));
categoria.push(new Categoria("Tiozão"));
categoria.push(new Categoria("Humor Negro"));

console.log(categoria);

let piadas = new Array();

piadas.push(new Piada("O segredo do casamento", "Um homem pergunta ao avô: `Vovô, qual é o segredo para estar casado há 50 anos?`. O avô responde: `Duas vezes por semana, nós vamos a um restaurante romântico, à luz de velas, com uma boa música e jantar fino. Ela vai às terças e eu vou às quintas.", "", categoria[0]));

piadas.push(new Piada("O teste do pavio", "O que o pavio disse para a bomba? `Hoje eu estou curtinho, não me amola!`", "", categoria[1]));

piadas.push(new Piada("O site do deserto", "Por que o deserto do Saara mudou de nome para Saara.com? Porque ele tem muitos links (linces)!", "", categoria[1]));

piadas.push(new Piada("A herança do vovô", "Meu avô tinha o coração de um leão... e uma proibição perpétua de voltar ao zoológico de São Paulo.", "", categoria[2]));

piadas.push(new Piada("O astrônomo", "Passar a noite inteira acordado procurando por onde o Sol nasce é cansativo, mas uma hora a ficha cai.", "", categoria[0]));

piadas.push(new Piada("O elevador e o pontinho", "O que é um pontinho amarelo piscando no topo de um arranha-céu? Um milho no elevador com pressa.", "", categoria[0]));

piadas.push(new Piada("A doação generosa", "Eu doei um rim para o meu irmão e todo mundo me chamou de herói. Aí eu tentei doar mais cinco e me levaram para a delegacia.", "", categoria[2]));

piadas.push(new Piada("Joãozinho e a gramática", " A professora pergunta: `Joãozinho, se eu digo 'eu sou bonita', qual é o tempo?`. Joãozinho responde sem piscar: `É passado, professora, passado bem distante!`", "", categoria[1]));

piadas.push(new Piada("O dilema do paraquedas", " Se na primeira tentativa você não conseguir abrir o paraquedas... o paraquedismo definitivamente não é para você.", "", categoria[0]));

piadas.push(new Piada("A planta impacient", "Qual é a planta que mais tem pressa no jardim? A vapt-vupt.", "", categoria[1]));

console.log(piadas)