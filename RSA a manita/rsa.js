// Función para calcular el máximo común divisor (MCD) utilizando el algoritmo de Euclides
function calcularMCD(a, b) {
    if (b === 0) {
      return a;
    }
    return calcularMCD(b, a % b);
  }
  
  // Función para verificar si un número es primo
  function esPrimo(numero) {
    for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero > 1;
  }
  
  // Función para generar un número primo de 4 dígitos de manera aleatoria
  function generarPrimo() {
    let numero;
    do {
      numero = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    } while (!esPrimo(numero));
    return numero;
  }
  
  // Función para calcular el valor de φ(n) (fhi)
  function calcularFhi(p, q) {
    return (p - 1) * (q - 1);
  }
  
  // Función para calcular el valor de 'n'
  function calcularN(p, q) {
    return p * q;
  }
  
  // Función para calcular el valor de 'e'
  function calcularE(fhi) {
    let e = 2;
    while (e < fhi) {
      if (calcularMCD(e, fhi) === 1) {
        break;
      }
      e++;
    }
    return e;
  }
  
  // Función para calcular el valor de 'd'
  function calcularD(e, fhi) {
    let d = 1;
    while (true) {
      if ((d * e) % fhi === 1) {
        break;
      }
      d++;
    }
    return d;
  }
  
  // Función para cifrar un mensaje utilizando la clave pública (n, e)
  function cifrarMensaje(mensaje, n, e) {
    let mensajeCifrado = [];
    for (let i = 0; i < mensaje.length; i++) {
      const caracter = mensaje.charCodeAt(i);
      const cifrado = BigInt(caracter) ** BigInt(e) % BigInt(n);
      mensajeCifrado.push(cifrado);
    }
    return mensajeCifrado;
  }
  
  // Función para descifrar un mensaje cifrado utilizando la clave privada (n, d)
  function descifrarMensaje(mensajeCifrado, n, d) {
    let mensajeDescifrado = "";
    for (let i = 0; i < mensajeCifrado.length; i++) {
      const cifrado = mensajeCifrado[i];
      const descifrado = BigInt(cifrado) ** BigInt(d) % BigInt(n);
      mensajeDescifrado += String.fromCharCode(Number(descifrado));
    }
    return mensajeDescifrado;
  }
  
  // Obtener los elementos del DOM
  const pInput = document.getElementById('p-input');
  const qInput = document.getElementById('q-input');
  const calcularButton = document.getElementById('calcular-button');
  const mensajeInput = document.getElementById('mensaje-input');
  const cifrarButton = document.getElementById('cifrar-button');
  const descifrarButton = document.getElementById('descifrar-button');
  const resultadoDiv = document.getElementById('resultado-div');
  
  // Evento click para el botón "Calcular"
  calcularButton.addEventListener('click', () => {
    const p = parseInt(pInput.value);
    const q = parseInt(qInput.value);
  
    const fhi = calcularFhi(p, q);
    const n = calcularN(p, q);
    const e = calcularE(fhi);
    const d = calcularD(e, fhi);
  
    resultadoDiv.innerHTML = `
      φ(n): ${fhi}<br>
      n: ${n}<br>
      e: ${e}<br>
      d: ${d}
    `;
  });
  
  // Evento click para el botón "Cifrar"
  cifrarButton.addEventListener('click', () => {
    const mensaje = mensajeInput.value;
    const n = parseInt(pInput.value) * parseInt(qInput.value);
    const e = parseInt(document.getElementById('e-input').value);
  
    const mensajeCifrado = cifrarMensaje(mensaje, n, e);
  
    resultadoDiv.innerHTML = `Mensaje cifrado: ${mensajeCifrado.join(' ')}`;
  });
  
  // Evento click para el botón "Descifrar"
  descifrarButton.addEventListener('click', () => {
    const mensajeCifrado = mensajeInput.value.split(' ').map(Number);
    const n = parseInt(pInput.value) * parseInt(qInput.value);
    const d = parseInt(document.getElementById('d-input').value);
  
    const mensajeDescifrado = descifrarMensaje(mensajeCifrado, n, d);
  
    resultadoDiv.innerHTML = `Mensaje descifrado: ${mensajeDescifrado}`;
  });
  