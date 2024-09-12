
import knex from '../db/knex'; // Your Knex instance

export const getAllAuthors = () => {
  return knex('authors').select('*');
};

export const getAuthorById = (id: number) => {
  return knex('authors').where({ id }).first();
};

export const createAuthor = (author: {
  name: string;
  bio?: string;
  birthdate: string;
}) => {
  return knex('authors').insert(author);
};

export const updateAuthor = (
  id: number,
  author: { name: string; bio?: string; birthdate: string },
) => {
  return knex('authors').where({ id }).update(author);
};

export const deleteAuthor = (id: number) => {
  return knex('authors').where({ id }).del();
};
