const express = require('express');
const router = express.Router();

const models = require('../models');

router.post('/get_discount', (req, res) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;

  if (!name || !phoneNumber) {
    const fields = [];
    if (!name) fields.push('name');
    if (!phoneNumber) fields.push('phoneNumber');
    res.json({
      ok: false,
      error: 'Обязательное поле',
      fields
    });
  } else if (phoneNumber.length < 7 || phoneNumber.length > 17) {
    res.json({
      ok: false,
      fields: ['phoneNumber'],
      error: 'Пример: +375(29)123-45-67'
    });
  } else if (name.length > 40 || name.length == 1) {
    res.json({
      ok: false,
      fields: ['name'],
      error: 'Неверное имя'
    });
  } else {
    models.Discount.create({
      name,
      phoneNumber
    })
      .then(consult => {
        console.log(consult);
        res.json({
          ok: true
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          ok: false
        });
      });
  }
});

module.exports = router;
