const grupoA = 500;
const grupoB = 200;

if (grupoA > grupoB) {
    console.log(`O grupo de ${grupoA} é maior que o grupo de ${grupoB}.`);
} else {
    console.log(`O grupo de ${grupoB} é maior que o grupo de ${grupoA}.`);
}

const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';
console.log(vencedor);

console.log('------------------------------');

const active = true;
const button = active && 'Botão está ativo';

console.log(button);
