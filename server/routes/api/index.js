const express = require('express');
const noteController = require('../../controllers/note');

const router = express.Router();

router.get('/', noteController.getAllNotes);
router.get('/:id', noteController.getNoteById);
router.post('/', noteController.createNote);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
