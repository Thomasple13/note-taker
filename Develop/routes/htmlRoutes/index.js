const path = require('path')
const router = require('express').Router()

// GET route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

//GET route for notes page
router.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

//wildcard route to 404 page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

module.exports = router