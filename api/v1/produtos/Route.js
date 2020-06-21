const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    if(req.query.idCategoria)
      res.json(produtos.filter(p => p.categoria == req.query.idCategoria));
    else
      res.json(produtos);
  })

exports.default = router;

const produtos = [
  // CATEGORIA 1
  {
    id: 1,
    nome: 'Lenovo 81S90003BR0',
    descricao: "Notebook Ideapad S145-15IWL, Intel Core i7-8565U 8GB, 1TB, Placa de Vídeo NVIDIA GeForce MX110 com 2GB dedicados GDDR5, Tela Full HD 15.6'', Windows 10, Prata (Platinum Grey)",
    preco: 4198.99,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p01.jpg',
    categoria: 1
  },
  {
    id: 2,
    nome: 'Notebook Lenovo Ideapad S145',
    descricao: "Intel Core i3-8130U 4GB RAM, 1TB, Tela HD 15.6'', Windows 10, 81XM0002BR",
    preco: 2599.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p01.jpg',
    categoria: 1
  },
  {
    id: 3,
    nome: 'Lenovo 81WT0000BR Ideapad S145-15IGM - Notebook',
    descricao: 'Notebook, Intel Celeron N4000 4 GB RAM, Tela 15.6", Windows 10, Prata (Platinum Grey)',
    preco: 1999.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p01.jpg',
    categoria: 1
  },
  {
    id: 4,
    nome: 'Notebook Acer Aspire 3 A315-53-348W',
    descricao: "Intel Core i3 RAM de 4GB HD de 1TB 15.6' HD Windows 10",
    preco: 2708.11,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p02.jpg',
    categoria: 1
  },


  // CATEGORIA 2
  {
    id: 5,
    nome: 'Lenovo 81S90003BR0',
    descricao: "Notebook Ideapad S145-15IWL, Intel Core i7-8565U 8GB, 1TB, Placa de Vídeo NVIDIA GeForce MX110 com 2GB dedicados GDDR5, Tela Full HD 15.6'', Windows 10, Prata (Platinum Grey)",
    preco: 1198.99,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p03.jpg',
    categoria: 2
  },
  {
    id: 6,
    nome: 'Notebook Lenovo Ideapad S145',
    descricao: "Intel Core i3-8130U 4GB RAM, 1TB, Tela HD 15.6'', Windows 10, 81XM0002BR",
    preco: 1599.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p03.jpg',
    categoria: 2
  },
  {
    id: 7,
    nome: 'Lenovo 81WT0000BR Ideapad S145-15IGM - Notebook',
    descricao: 'Notebook, Intel Celeron N4000 4 GB RAM, Tela 15.6", Windows 10, Prata (Platinum Grey)',
    preco: 1500.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p04.jpg',
    categoria: 2
  },
  {
    id: 8,
    nome: 'Notebook Acer Aspire 3 A315-53-348W',
    descricao: "Intel Core i3 RAM de 4GB HD de 1TB 15.6' HD Windows 10",
    preco: 3708.11,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p04.jpg',
    categoria: 2
  },


  // CATEGORIA 3
  {
    id: 9,
    nome: 'Lenovo 81S90003BR0',
    descricao: "Notebook Ideapad S145-15IWL, Intel Core i7-8565U 8GB, 1TB, Placa de Vídeo NVIDIA GeForce MX110 com 2GB dedicados GDDR5, Tela Full HD 15.6'', Windows 10, Prata (Platinum Grey)",
    preco: 1198.99,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p05.jpg',
    categoria: 3
  },
  {
    id: 10,
    nome: 'Notebook Lenovo Ideapad S145',
    descricao: "Intel Core i3-8130U 4GB RAM, 1TB, Tela HD 15.6'', Windows 10, 81XM0002BR",
    preco: 1599.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p05.jpg',
    categoria: 3
  },
  {
    id: 11,
    nome: 'Lenovo 81WT0000BR Ideapad S145-15IGM - Notebook',
    descricao: 'Notebook, Intel Celeron N4000 4 GB RAM, Tela 15.6", Windows 10, Prata (Platinum Grey)',
    preco: 1500.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p06.jpg',
    categoria: 3
  },
  {
    id: 12,
    nome: 'Notebook Acer Aspire 3 A315-53-348W',
    descricao: "Intel Core i3 RAM de 4GB HD de 1TB 15.6' HD Windows 10",
    preco: 3708.11,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p06.jpg',
    categoria: 3
  },

  // CATEGORIA 4
  {
    id: 13,
    nome: 'Lenovo 81S90003BR0',
    descricao: "Notebook Ideapad S145-15IWL, Intel Core i7-8565U 8GB, 1TB, Placa de Vídeo NVIDIA GeForce MX110 com 2GB dedicados GDDR5, Tela Full HD 15.6'', Windows 10, Prata (Platinum Grey)",
    preco: 1198.99,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p04.jpg',
    categoria: 4
  },
  {
    id: 14,
    nome: 'Notebook Lenovo Ideapad S145',
    descricao: "Intel Core i3-8130U 4GB RAM, 1TB, Tela HD 15.6'', Windows 10, 81XM0002BR",
    preco: 1599.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p03.jpg',
    categoria: 4
  },
  {
    id: 15,
    nome: 'Lenovo 81WT0000BR Ideapad S145-15IGM - Notebook',
    descricao: 'Notebook, Intel Celeron N4000 4 GB RAM, Tela 15.6", Windows 10, Prata (Platinum Grey)',
    preco: 1500.00,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p02.jpg',
    categoria: 4
  },
  {
    id: 16,
    nome: 'Notebook Acer Aspire 3 A315-53-348W',
    descricao: "Intel Core i3 RAM de 4GB HD de 1TB 15.6' HD Windows 10",
    preco: 3708.11,
    img: 'https://lojavirtual-api--tarleylana.repl.co/img/produtos/p01.jpg',
    categoria: 4
  }
]