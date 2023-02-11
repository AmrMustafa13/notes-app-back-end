const express = require("express");

const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

const router = express.Router();

// @route   GET api/notes
// @desc    Get all notes
// @access  Public

router.get("/", getNotes);

// @route   GET api/notes/:id
// @desc    Get single note
// @access  Public

router.get("/:id", getNote);

// @route   POST api/notes
// @desc    Add new note
// @access  Public

router.post("/", createNote);

// @route   PUT api/notes/:id
// @desc    Update note
// @access  Public

router.put("/:id", updateNote);

// @route   DELETE api/notes/:id
// @desc    Delete note
// @access  Public

router.delete("/:id", deleteNote);

module.exports = router;
