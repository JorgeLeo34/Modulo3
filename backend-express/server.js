const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Datos de ejemplo
const items = [
  { id: 1, title: 'Libro A', category: 'Novela' },
  { id: 2, title: 'Libro B', category: 'Tecnología' },
  { id: 3, title: 'Libro C', category: 'Novela' },
];

// GET con filtrado por querystring: ?q=texto
app.get('/api/items', (req, res) => {
  const q = (req.query.q || '').toLowerCase();

  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q)
  );

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
