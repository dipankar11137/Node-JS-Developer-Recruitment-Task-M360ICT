
import { Request, Response } from 'express';
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook
} from '../models/books';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const book = await getBookById(parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book' });
  }
};

export const createNewBook = async (req: Request, res: Response) => {
  const { title, description, published_date, author_id } = req.body;
  try {
    const [newBookId] = await createBook({
      title,
      description,
      published_date,
      author_id,
    });
    res.status(201).json({ id: newBookId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating book' });
  }
};

export const updateExistingBook = async (req: Request, res: Response) => {
  const { title, description, published_date, author_id } = req.body;
  const bookId = parseInt(req.params.id);
  try {
    await updateBook(bookId, { title, description, published_date, author_id });
    res.json({ message: 'Book updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
};

export const deleteExistingBook = async (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  try {
    await deleteBook(bookId);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book' });
  }
};
