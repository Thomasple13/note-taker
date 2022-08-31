const fs = require('fs')
const path = require('path')

function update(id, file){
    let deleteNote = id
    for(let i = 0; i < file.length; i++){
        if (deleteNote === file.length[i].id){
            file.splice(i,1)
            fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify({notes: file}, null, 4), (err) => 
            err ? console.error(err) : console.info(`\nData written to ${path.join(__dirname)}`))
        }
    }
}

function createNote(body, file) {
    const newNote = body
    file.push(newNote);
    fs.writeFile(path.join(__dirname, "./db/db.json"),JSON.stringify({notes: file}, null, 4))
    return newNote;
  };

module.exports = {update, createNote}