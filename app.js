const path = require('path');
const fs = require('fs');
const logger = require('./logger');

let pathObj = path.parse('C:\\Users\\Equipo\\Desktop\\incluit');
logger.log('path', pathObj);
let dir = pathObj.dir;

fs.readdir(dir, (err, files) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Listado de archivos contenidos en la ruta: ', files);
        console.log('Listado ordenado descendente: ', files.reverse());
        comienzaCon(files, 'M');

        };

    });

comienzaCon = (files, letter) => {
    var cont = 0;
    for (var i=0; i<files.length; i++){
        if (files[i].startsWith(letter)){
            cont ++;
        }
    }
    console.log('Cantidad de archivos que comienzan con ' + letter + ': ', cont);
    }











