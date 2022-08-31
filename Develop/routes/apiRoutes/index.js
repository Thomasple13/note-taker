const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {createNewNote, update} = require("./routes/apiRoutes/notes.js");
const {notes} = require("./db/db.json");

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    update(params, notes);
    res.redirect('');
  });

  module.exports = router;