const lista = [9, 2, 1, 4, 6];

function CalcularMediana() {
  lista.sort((a, b) => {
    return a - b;
  });

  const meio = Math.floor(lista.length / 2);
  const mediana =
    lista.length % 2 !== 0 ? lista[meio] : (lista[meio - 1] + lista[meio]) / 2;

  console.log(mediana);
}

CalcularMediana();
