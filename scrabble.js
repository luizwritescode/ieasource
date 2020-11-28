const fs = require('fs');

var scores = ""

const points = {
    a: 1,
    b: 3,
    c: 2,
    d: 2,
    e: 1,
    f: 4,
    g: 4,
    h: 4,
    i: 1,
    j: 5,
    k: 8,
    l: 2,
    m: 1,
    n: 3,
    o: 1,
    p: 2,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 8,
    x: 8,
    y: 8,
    z: 8,
    cc: 3
}

function processFile(string) {
    var words = string.split("\n")

    for( i = 0; i < words.length; i++) {
       words[i] = words[i].trim().replace('\r', '').replace(/\s/g, '').replace('-', '').toLowerCase()
       words[i] = words[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    words.forEach( (word) => {
        console.log(score(word))
    })
}

function score(word) {
    var split = word.split("")
    var ret = 0
    for ( i = 0; i < split.length; i++) {
        ret = ret + points[split[i]]
    }
    ret = word + ", " + ret
    return ret
}


fs.readFile('objetos.txt', function read(err,data) {
    if(err) 
        throw err
    else
        processFile(data.toString())
})


// fs.writeFile("pontos.txt", "oi", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// }); 

