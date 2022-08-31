const fs = require('fs')
const path = require('path')

function update(id, file){
    let deleteNote = id
    for(let i = 0; i < file.length; i++){
        if (deleteNote === file.length[i].id){
            file.splice(i,1)
        }
    }
}