const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'data', 'oyuncular.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Sunucu hatası');
    }
    const ekip = JSON.parse(data);
    res.render('hakkimizda', { title: 'Hakkımızda', ekip: ekip });
  });
});

module.exports = router;