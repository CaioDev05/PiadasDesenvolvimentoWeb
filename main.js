let categoria = new Array();

categoria.push(new Categoria(1, "Curta"));
categoria.push(new Categoria(2, "Tiozão"));
categoria.push(new Categoria(3, "Humor Negro"));

let piadas = new Array();

piadas.push(new Piada(
    "O segredo do casamento",
    "Um homem pergunta ao avô: `Vovô, qual é o segredo para estar casado há 50 anos?`. O avô responde: `Duas vezes por semana, nós vamos a um restaurante romântico, à luz de velas, com uma boa música e jantar fino. Ela vai às terças e eu vou às quintas.",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    categoria[0]
));

piadas.push(new Piada(
    "O teste do pavio",
    "O que o pavio disse para a bomba? `Hoje eu estou curtinho, não me amola!`",
    "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=800&q=80",
    categoria[1]
));

piadas.push(new Piada(
    "O site do deserto",
    "Por que o deserto do Saara mudou de nome para Saara.com? Porque ele tem muitos links (linces)!",
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
    categoria[1]
));

piadas.push(new Piada(
    "A herança do vovô",
    "Meu avô tinha o coração de um leão... e uma proibição perpétua de voltar ao zoológico de São Paulo.",
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    categoria[2]
));

piadas.push(new Piada(
    "O astrônomo",
    "Passar a noite inteira acordado procurando por onde o Sol nasce é cansativo, mas uma hora a ficha cai.",
    "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&w=800&q=80",
    categoria[0]
));

piadas.push(new Piada(
    "O elevador e o pontinho",
    "O que é um pontinho amarelo piscando no topo de um arranha-céu? Um milho no elevador com pressa.",
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80",
    categoria[0]
));

piadas.push(new Piada(
    "A doação generosa",
    "Eu doei um rim para o meu irmão e todo mundo me chamou de herói. Aí eu tentei doar mais cinco e me levaram para a delegacia.",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    categoria[2]
));

piadas.push(new Piada(
    "Joãozinho e a gramática",
    "A professora pergunta: `Joãozinho, se eu digo 'eu sou bonita', qual é o tempo?`. Joãozinho responde sem piscar: `É passado, professora, passado bem distante!`",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    categoria[1]
));

piadas.push(new Piada(
    "O dilema do paraquedas",
    "Se na primeira tentativa você não conseguir abrir o paraquedas... o paraquedismo definitivamente não é para você.",
    "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?auto=format&fit=crop&w=800&q=80",
    categoria[0]
));

piadas.push(new Piada(
    "A planta impaciente",
    "Qual é a planta que mais tem pressa no jardim? A vapt-vupt.",
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    categoria[1]
));

const selectCategorias = document.getElementById("categorias");

const option = document.createElement("option");

categoria.forEach(cat => {
    const option = document.createElement("option");

    option.value = cat.id;
    option.textContent = cat.descricao;

    selectCategorias.appendChild(option);
});

function getNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const titulo = document.getElementById("titulo-piada");
const imagem = document.getElementById("imagem-piada");
const texto = document.getElementById("texto-piada");
const categoriaPiada = document.getElementById("categoria-piada");

function piadaAleatoria() {
    const num = getNumeroAleatorio(0, 10)

    titulo.textContent = piadas[num].titulo;
    imagem.src = piadas[num].imagem;
    texto.textContent = piadas[num].texto;
    categoriaPiada.textContent = `Categoria: ${piadas[num].categoria.descricao}`;
}

let piadasCategoria = new Array();

function buscarPiadasCategoria(categoria) {
    piadas.forEach(piada => {
        if (piada.categoria.id == categoria) {
            piadasCategoria.push(piada);
        }
    });

    return piadasCategoria.length;
}

function piadaCategoria() {
    if (categoria !== null) {
        if (selectCategorias.value > 0) {
            let max;
            let num;

            piadasCategoria = new Array();

            if (selectCategorias.value === 1) {
                max = buscarPiadasCategoria(selectCategorias.value);

                num = getNumeroAleatorio(0, max)

                titulo.textContent = piadasCategoria[num].titulo;
                imagem.src = piadasCategoria[num].imagem;
                texto.textContent = piadasCategoria[num].texto;
                categoriaPiada.textContent = `Categoria: ${piadasCategoria[num].categoria.descricao}`;

            } else if (selectCategorias.value === 2) {
                max = buscarPiadasCategoria(selectCategorias.value);

                num = getNumeroAleatorio(0, max)

                titulo.textContent = piadasCategoria[num].titulo;
                imagem.src = piadasCategoria[num].imagem;
                texto.textContent = piadasCategoria[num].texto;
                categoriaPiada.textContent = `Categoria: ${piadasCategoria[num].categoria.descricao}`;

            } else {
                max = buscarPiadasCategoria(selectCategorias.value);

                num = getNumeroAleatorio(0, max)

                titulo.textContent = piadasCategoria[num].titulo;
                imagem.src = piadasCategoria[num].imagem;
                texto.textContent = piadasCategoria[num].texto;
                categoriaPiada.textContent = `Categoria: ${piadasCategoria[num].categoria.descricao}`;
            }
        }
    }
}

piadaAleatoria()
