import { Router } from 'express';
import { check } from 'express-validator';
import {
  createAuthor,
  deleteAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
} from '../controllers/authors';

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post(
  '/',
  [check('name').not().isEmpty(), check('birthdate').isDate()],
  createAuthor,
);
router.put(
  '/:id',
  [check('name').not().isEmpty(), check('birthdate').isDate()],
  updateAuthor,
);
router.delete('/:id', deleteAuthor);

export default router;
