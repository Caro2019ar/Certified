const baseDeDatos = {
    results: [{
    texto: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    nombre: "Tanya Sinclair",
    trabajo: "UX Engineer",
    img: "./img/image-tanya.jpg"
    },
    {
    texto: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    nombre: "John Tarkpor",
    trabajo: "Junior Front-end Developer",
    img: "./img/image-john.jpg"
    },
    {
        texto: "Hanamichi Sakuragi es el personaje principal de la serie japonesa de manga y anime Slam Dunk, creada por el mangaka japonés Takehiko Inoue.",
        nombre: "Hanamichi Sakuragi",
        trabajo: "Basketball Player",
        img: "./img/image-hanamichi.jpg"
    }]
}

let index = 0;
renderizarTarjeta(index);

let btnSiguiente = document.querySelector("#next");
let btnAnterior = document.querySelector("#prev");

function renderizarTarjeta(index) {
    
    let texto = baseDeDatos.results[index].texto;
    let nombre = baseDeDatos.results[index].nombre;
    let trabajo = baseDeDatos.results[index].trabajo;
    let img = baseDeDatos.results[index].img;

    let tarjeta = document.querySelector(".tarjeta");
    tarjeta.innerHTML =
    `<div class="info">
        <p id="texto">${texto}</p>
        <div class="datos">
            <h5 id="nombre">${nombre}</h5>
            <h6 id="posicion">${trabajo}</h6>
        </div>
    </div>
    <div class="imagen">
        <img src="${img}" alt="profile ${nombre}" class="picture"/>
        <div class="botones">
        <img id="prev" src="./img/icon-prev.svg" alt="previous image" />
        <img id="next" src="./img/icon-next.svg" alt="next image"/>
        </div>
    </div>`;

    aniadirListeners();
}

function aniadirListeners()
{
    let btnSiguiente = document.querySelector("#next");
    let btnAnterior = document.querySelector("#prev");

    btnSiguiente.addEventListener('click', function(e) {
        index++;
        if (index >= baseDeDatos.results.length)
            index = 0;
        renderizarTarjeta(index);
    });

    btnAnterior.addEventListener('click', function(e) {
        index--;
        if (index <= -1)
            index = baseDeDatos.results.length - 1;
        renderizarTarjeta(index);
    });
}