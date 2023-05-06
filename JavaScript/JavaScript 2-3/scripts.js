const precos = ['Crédito', 'R$ 200', 'R$ 400', 'Contas Pagar', 'R$ 300', 'R$ 500', 'Meus Dados'];

const precosFiltro = precos.filter((p) => p.includes('R$'));
const precosNumeros = precosFiltro.map((p) => Number(p.replace('R$', '')));

console.log(precosNumeros);
