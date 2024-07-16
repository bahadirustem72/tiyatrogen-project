const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const carouselPath = path.join(__dirname, '..', 'data', 'carousel.json');
  const eventsPath = path.join(__dirname, '..', 'data', 'events.json');

  fs.readFile(carouselPath, 'utf8', (err, carouselData) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Sunucu hatası');
    }
    const carouselItems = JSON.parse(carouselData);

    fs.readFile(eventsPath, 'utf8', (err, eventsData) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Sunucu hatası');
      }
      const events = JSON.parse(eventsData);

      res.render('index', { title: 'Ana Sayfa', carouselItems: carouselItems, events: events });
    });
  });
});

router.get('/api/event/:id', (req, res) => {
  const eventsPath = path.join(__dirname, '..', 'data', 'events.json');

  fs.readFile(eventsPath, 'utf8', (err, eventsData) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Sunucu hatası');
    }
    const events = JSON.parse(eventsData);
    const event = events.find(event => event.id == req.params.id);

    if (event) {
      res.json(event);
    } else {
      res.status(404).send('Etkinlik bulunamadı');
    }
  });
});

module.exports = router;