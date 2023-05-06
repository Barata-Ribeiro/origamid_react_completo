// RELEMBRANDO
// Objetos...
const menu = {
    seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

// Arrow functions e expression...
console.log('--------------------------');
const upperName = function (name) {
    return name.toUpperCase();
};

const lowerName = (name) => name.toLowerCase();

console.log(lowerName('Barata'));
console.log(upperName('Ribeiro'));

// Destructuring...
console.log('--------------------------');
function handleMouse(event) {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);

const frutas = ['maçã', 'banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1);

const useQuadrado = [
    4,
    function (lado) {
        return 4 * lado;
    },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

// Rest & Spread...
console.log('--------------------------');
function showList(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa);
    });
}

showList('Google', 'John', 'Jane', 'Mary', 'Bob', 'Adalberto');

const numeros = [23, 423, 4, 234, 234, 26, 4, 645, 7, 876, 9, 8987];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [1, 2, 64, 57, 88, 456, 546, ...numeros, 2, 34, 645, 7, 568, 9, 76, 988, 4398];
const maior2 = Math.max(...numeros2);
console.log(maior2);

const carro = {
    cor: 'azul',
    portas: 4,
};

carroAno = { ...carro, ano: 2020 };
console.log(carroAno);
