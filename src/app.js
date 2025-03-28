import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


// DEFINICIÓN DE VARIABLES ------------------>

const palos = ['♦', '♥', '♠', '♣'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'As'];
const divContenedorTarjeta = document.querySelector('#divContenedorTarjeta');

// DEFINICIÓN DE FUNCIONES ------------------->

// Función para obtener un valor aleatorio del array
const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];


// Función para configurar el contenido y el estilo del valor en la carta
const setCardValue = (valor, palo, span) => {
  span.innerHTML = valor === 'As' ? palo : valor; // Mostrar símbolo o valor
  const colorClass = (palo === '♦' || palo === '♥') ? 'text-danger' : 'text-dark';
  span.classList.add(colorClass);
  return span;
};


// Función para insertar la carta en el HTML.
const insertCard = () => {
  // Crear un contenedor de columna
  const col = document.createElement('div');
  col.classList.add('col-12','col-sm-12','col-md-6','col-lg-4','mb-3','d-flex','justify-content-center');

  // Generar la tarjeta
  const card = generateCard();

  // Agregar la tarjeta dentro de la columna
  col.appendChild(card);

  // Insertar la columna dentro del contenedor de tarjetas (row)
  divContenedorTarjeta.prepend(col);
}


// Función principal para generar una carta
const generateCard = () => {
  // Valores aleatorios
  const palo = randomElement(palos);
  const valor = randomElement(valores);

  // Crear elementos de la carta
  const card = document.createElement('div');
  const up = document.createElement('div');
  const mid = document.createElement('div');
  const down = document.createElement('div');
  const spanPaloUp = document.createElement('span');
  const spanPaloDown = document.createElement('span');
  const spanValor = document.createElement('span');


  // Asignar clases y estilos
  card.classList.add('card');
  card.id = 'card';
  up.classList.add('card-up');
  mid.classList.add('card-mid');
  down.classList.add('card-down');

  spanPaloUp.innerHTML = palo;
  spanPaloDown.innerHTML = palo;

  const paloColor = (palo === '♦' || palo === '♥') ? 'text-danger' : 'text-dark';
  spanPaloUp.className = paloColor;
  spanPaloDown.className = paloColor;

  // Agregar los valores configurados
  up.appendChild(spanPaloUp);
  mid.appendChild(setCardValue(valor, palo, spanValor));
  down.appendChild(spanPaloDown);

  // Añadir jerarquía de elementos a la carta
  card.append(up, mid, down);
  return card;
};



// EVENTOS --------------------------------------------> 


window.onload = () => {                                                             // Siempre que se recarga la página cambiamos cambiamos la carta.
  insertCard();                    
};

setInterval(insertCard, 10000);                                                     // Insertamos una carta adicional carta cada 10 segundos.

const buttonGenerateCard = document.querySelector('#buttonGenerate');               // Insertamos una carta adicional cada vez que le damos al botón.
  buttonGenerateCard.addEventListener('click', insertCard);