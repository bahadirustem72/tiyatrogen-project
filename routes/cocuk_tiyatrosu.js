const express = require('express');
const router = express.Router();

// Children's Theater route
router.get('/', (req, res) => {
  res.render('cocuk_tiyatrosu', {title: 'Gökkuşağı Çocuk Tiyatrosu'});
});

module.exports = router;