import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  setInterval(generateCard, 10000);                               // Generamos carta cada 10 segundos.
  const button = document.querySelector('#buttonGenerate');       // Generamos carta cada vez que le damos al botón.
  button.addEventListener('click', generateCard);
  generateCard();                                                 // Generamos carta siempre que se recarga la página.
};

// Definición de constantes globales
const palos = ['♦', '♥', '♠', '♣'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'As'];

// Función para obtener un valor aleatorio del array
const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Función para configurar el contenido y el estilo del valor en la carta
const setCardValue = (valor, palo, span) => {
  span.innerHTML = valor === 'As' ? palo : valor; // Mostrar símbolo o valor
  const colorClass = (palo === '♦' || palo === '♥') ? 'text-danger' : 'text-dark';
  span.classList.add(colorClass);
  return span;
};

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

  // Insertar la carta en el contenedor y en el DOM
  document.body.appendChild(card);
};