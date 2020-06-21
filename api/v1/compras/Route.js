const express = require('express');
const router = express.Router();

let db = {}

router.route('/')
  .post((req, res) => {
    const compra = req.body;

    console.log(compra);

    res.json({msg: 'Pedido realizado com sucesso!'})
  });

exports.default = router;