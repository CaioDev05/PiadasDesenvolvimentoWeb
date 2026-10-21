let categoria = new Array();

categoria.push(new Categoria(1, "Curta"));
categoria.push(new Categoria(2, "Tiozão"));
categoria.push(new Categoria(3, "Humor Negro"));

let piadas = new Array();

piadas.push(new Piada(
    "O segredo do casamento",
    "Um homem pergunta ao avô: `Vovô, qual é o segredo para estar casado há 50 anos?`. O avô responde: `Duas vezes por semana, nós vamos a um restaurante romântico, à luz de velas, com uma boa música e jantar fino. Ela vai às terças e eu vou às quintas.",
    "https://media.giphy.com/media/wG1i2KJyB3zlC/giphy.gif",
    categoria[0]
));

piadas.push(new Piada(
    "O teste do pavio",
    "O que o pavio disse para a bomba? `Hoje eu estou curtinho, não me amola!`",
    "https://media.giphy.com/media/ckCL6oQfuLUuVbB2OH/giphy.gif",
    categoria[1]
));

piadas.push(new Piada(
    "O site do deserto",
    "Por que o deserto do Saara mudou de nome para Saara.com? Porque ele tem muitos links (linces)!",
    "https://media.giphy.com/media/j3zyLmBRIJDVLMQxcS/giphy.gif",
    categoria[1]
));

piadas.push(new Piada(
    "A herança do vovô",
    "Meu avô tinha o coração de um leão... e uma proibição perpétua de voltar ao zoológico de São Paulo.",
    "https://media.giphy.com/media/6vjFBkdOYDGfK/giphy.gif",
    categoria[2]
));

piadas.push(new Piada(
    "O astrônomo",
    "Passar a noite inteira acordado procurando por onde o Sol nasce é cansativo, mas uma hora a ficha cai.",
    "https://media.giphy.com/media/B5ZErszcJYBlMijVsy/giphy.gif",
    categoria[0]
));

piadas.push(new Piada(
    "O elevador e o pontinho",
    "O que é um pontinho amarelo piscando no topo de um arranha-céu? Um milho no elevador com pressa.",
    "https://media.giphy.com/media/41V6pgW5Pb1WU/giphy.gif",
    categoria[0]
));

piadas.push(new Piada(
    "A doação generosa",
    "Eu doei um rim para o meu irmão e todo mundo me chamou de herói. Aí eu tentei doar mais cinco e me levaram para a delegacia.",
    "https://media.giphy.com/media/yUPFdwFjDXWJyibIdb/giphy.gif",
    categoria[2]
));

piadas.push(new Piada(
    "Joãozinho e a gramática",
    "A professora pergunta: `Joãozinho, se eu digo 'eu sou bonita', qual é o tempo?`. Joãozinho responde sem piscar: `É passado, professora, passado bem distante!`",
    "https://media.giphy.com/media/vtFZ8O85q8g3MmXK51/giphy.gif",
    categoria[1]
));

piadas.push(new Piada(
    "O dilema do paraquedas",
    "Se na primeira tentativa você não conseguir abrir o paraquedas... o paraquedismo definitivamente não é para você.",
    "https://media.giphy.com/media/7kCdD29XSk4fRnTOqN/giphy.gif",
    categoria[0]
));

piadas.push(new Piada(
    "A planta impaciente",
    "Qual é a planta que mais tem pressa no jardim? A vapt-vupt.",
    "https://media.giphy.com/media/VdoGzFHJ0JxftbhRzj/giphy.gif",
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
