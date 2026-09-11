const produtos = [
  { nome: "Produto 1", preco: "R$ 5,00", imagem: "https://picsum.photos/200/200" },
  { nome: "Produto 2", preco: "R$ 5,00", imagem: "https://picsum.photos/200/200" },
  { nome: "Produto 3", preco: "R$ 5,00", imagem: "https://picsum.photos/200/200" }
];

const containerProdutos = document.getElementById("grid-product");

containerProdutos.innerHTML = produtos.map(prod => `
  <div class="card-produto">
    <img src="${prod.imagem}" alt="${prod.nome}" style="width: 100%; max-width: 150px;">
    <h3>${prod.nome}</h3>
    <p>${prod.preco}</p>
    <button style="background-color: #b77ee4;">Comprar</button>
  </div>
`).join("");
