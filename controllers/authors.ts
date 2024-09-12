import { Request, Response } from 'express';
import knex from '../db/knex';

export const getAuthors = async (req: Request, res: Response) => {
  const authors = await knex('authors').select('*');
  res.json(authors);
};

export const getAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const author = await knex('authors').where({ id }).first();
  if (!author) return res.status(404).json({ message: 'Author not found' });
  res.json(author);
};

export const createAuthor = async (req: Request, res: Response) => {
  const { name, bio, birthdate } = req.body;
  const newAuthor = { name, bio, birthdate };
  const [id] = await knex('authors').insert(newAuthor);
  res.status(201).json({ id });
};

export const updateAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, bio, birthdate } = req.body;
  await knex('authors').where({ id }).update({ name, bio, birthdate });
  res.json({ message: 'Author updated' });
};

export const deleteAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  await knex('authors').where({ id }).del();
  res.json({ message: 'Author deleted' });
};
