
import { Router } from 'express';
import { check } from 'express-validator';
import {
  createNewBook,
  deleteExistingBook,
  getBook,
  getBooks,
  updateExistingBook,
} from '../controllers/books';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post(
  '/',
  [
    check('title').not().isEmpty(),
    check('published_date').isDate(),
    check('author_id').isInt(),
  ],
  createNewBook,
);
router.put(
  '/:id',
  [
    check('title').not().isEmpty(),
    check('published_date').isDate(),
    check('author_id').isInt(),
  ],
  updateExistingBook,
);
router.delete('/:id', deleteExistingBook);

export default router;
