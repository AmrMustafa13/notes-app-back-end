const Note = require("../models/Note");

// get all notes
const getNotes = async (req, res) => {
  const userId = req.user._id;

  try {
    const notes = await Note.find({
      userId,
    }).sort({ createdAt: "desc" });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// get single note
const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// create new note
const createNote = async (req, res) => {
  try {
    const userId = req.user._id;
    const note = await Note.create({ ...req.body, userId });
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// update note
const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    note.title = req.body.title;
    note.description = req.body.description;
    await note.save();
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// delete note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    await note.remove();
    res.json({ message: "Note removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
