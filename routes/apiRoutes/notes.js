const fs = require('fs')
const path = require('path')

function update(id, file){
    const deletedNote = id
    for(let i = 0; i < file.length; i++){
        if (deletedNote === file[i].id){
            file.splice(i,1)
            fs.writeFileSync(path.join(__dirname, "../../db/db.json"),
             JSON.stringify({notes: file}, null, 2), (err) => 
            err ? console.error(err) : console.info(`\nData written to ${path.join(__dirname)}`))
        }
    }
}

function createNote(body, file) {
    console.log(body, file)
    const newNote = body
    file.push(newNote);
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"),JSON.stringify({notes: file}, null, 2))
    return newNote;
  };

module.exports = {update, createNote}