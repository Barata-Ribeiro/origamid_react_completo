// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => response.json()
// .then((json) => console.log(json)));

async function fetchProdutos(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const produtos = fetchProdutos('https://jsonplaceholder.typicode.com/todos/1');

console.log(produtos);
