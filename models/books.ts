
import knex from '../db/knex'; // Your Knex instance

export const getAllBooks = () => {
  return knex('books').select('*');
};

export const getBooksByAuthor = (authorId: number) => {
  return knex('books').where({ author_id: authorId }).select('*');
};

export const getBookById = (id: number) => {
  return knex('books').where({ id }).first();
};

export const createBook = (book: {
  title: string;
  description?: string;
  published_date: string;
  author_id: number;
}) => {
  return knex('books').insert(book);
};

export const updateBook = (
  id: number,
  book: {
    title: string;
    description?: string;
    published_date: string;
    author_id: number;
  },
) => {
  return knex('books').where({ id }).update(book);
};

export const deleteBook = (id: number) => {
  return knex('books').where({ id }).del();
};
