
import express from 'express';
import authorsRoutes from './routes/authors';
import booksRoutes from './routes/books';

const app = express();

app.use(express.json());

app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
