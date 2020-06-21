const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json(categorias)
  });

exports.default = router;

const categorias = [
  {
    id: 1,
    nome: "Android",
    ativa: true,
    img64: 'https://lojavirtual-api--tarleylana.repl.co/img/android/android_64x64.png',
    img128: 'https://lojavirtual-api--tarleylana.repl.co/img/android/android_128x128.png',
    img256: 'https://lojavirtual-api--tarleylana.repl.co/img/android/android_256x256.png'
  },
  {
    id: 2,
    nome: "IOS",
    ativa: true,
    img64: 'https://lojavirtual-api--tarleylana.repl.co/img/ios/ios_64x64.png',
    img128: 'https://lojavirtual-api--tarleylana.repl.co/img/ios/ios_128x128.png',
    img256: 'https://lojavirtual-api--tarleylana.repl.co/img/ios/ios_256x256.png'
  },
  {
    id: 3,
    nome: "Windows",
    ativa: true,
    img64: 'https://lojavirtual-api--tarleylana.repl.co/img/windows/windows_64x64.png',
    img128: 'https://lojavirtual-api--tarleylana.repl.co/img/windows/windows_128x128.png',
    img256: 'https://lojavirtual-api--tarleylana.repl.co/img/windows/windows_256x256.png'
  },
  {
    id: 4,
    nome: "Linux",
    ativa: true,
    img64: 'https://lojavirtual-api--tarleylana.repl.co/img/linux/linux_64x64.png',
    img128: 'https://lojavirtual-api--tarleylana.repl.co/img/linux/linux_128x128.png',
    img256: 'https://lojavirtual-api--tarleylana.repl.co/img/linux/linux_256x256.png'
  }
]
