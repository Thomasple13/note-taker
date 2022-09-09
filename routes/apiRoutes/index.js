const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {createNote, update} = require("./notes.js");
const {notes} = require("../../db/db.json");

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    console.log("notes:", notes)
    const newNote = createNote(req.body, notes);
    res.json(newNote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    console.log('delete:', params)
    update(params, notes);
    res.redirect('');
  });

  module.exports = router;