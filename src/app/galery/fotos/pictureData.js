const fileCount = 12;

function pathToArray(){
    let paths = [];
    for(let index = 1; index <= fileCount; index++){
        paths.push('imagen' +index + '.jpg');
    }
    //console.log(paths);
    return paths;
}

let images = {
  titles: ["Cumple ale", "Dia en la facu!!",'Escapando de clase','Ale y Santoss','Patio Olmos','Yendo a los bolos','Ale pool','Ale facu besties','Ale facu se aman','En casa de Tizii','Ale anime','Ale girlboss'],
  description: ["", ""],
  path: pathToArray(),
};


export default images;