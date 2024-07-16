const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const sezonOyunlariPath = path.join(__dirname, '..', 'data', 'sezonOyunlari.json');
  const arsivOyunlariPath = path.join(__dirname, '..', 'data', 'arsivOyunlari.json');
  const hazirlikOyunlariPath = path.join(__dirname, '..', 'data', 'hazirlikOyunlari.json');

  fs.readFile(sezonOyunlariPath, 'utf8', (err, sezonOyunlariData) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Sunucu hatası');
    }
    const sezonOyunlari = JSON.parse(sezonOyunlariData);

    fs.readFile(arsivOyunlariPath, 'utf8', (err, arsivOyunlariData) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Sunucu hatası');
      }
      const arsivOyunlari = JSON.parse(arsivOyunlariData);

      fs.readFile(hazirlikOyunlariPath, 'utf8', (err, hazirlikOyunlariData) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Sunucu hatası');
        }
        const hazirlikOyunlari = JSON.parse(hazirlikOyunlariData);

        res.render('oyunlar', { title: 'Oyunlar', sezonOyunlari: sezonOyunlari, arsivOyunlari: arsivOyunlari, hazirlikOyunlari: hazirlikOyunlari });
      });
    });
  });
});

module.exports = router;