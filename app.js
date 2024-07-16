const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to set active class
app.use((req, res, next) => {
  res.locals.active = req.path;
  next();
});

// Routes
const indexRouter = require('./routes/index');
const hakkimizdaRouter = require('./routes/hakkimizda');
const oyunlarRouter = require('./routes/oyunlar');
const cocukTiyatrosuRouter = require('./routes/cocuk_tiyatrosu');

app.use('/', indexRouter);
app.use('/hakkimizda', hakkimizdaRouter);
app.use('/oyunlar', oyunlarRouter);
app.use('/cocuk_tiyatrosu', cocukTiyatrosuRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});