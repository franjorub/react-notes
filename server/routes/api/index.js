const express = require('express');
const noteController = require('../../controllers/note');

const router = express.Router();

router.get('/', noteController.getAllNotes);
router.post('/', noteController.createNote);
