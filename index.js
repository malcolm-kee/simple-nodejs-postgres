require('dotenv').config();

const express = require('express');
const movieController = require('./movie/movie.controller');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/movie', movieController);

app.all('*', (req, res) => {
  if (req.headers.accept === 'application/json') {
    return res.status(404).json({
      error: 'Not found',
    });
  }

  return res.status(404).send(`<!DOCTYPE html>
    <html>
      <body>
          <h1>Page Not Found</h1>
      </body>
      </html>`);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
