const path=require('path')


const mycurrentpath=__filename

console.log(path.basename(mycurrentpath))// last er nama ta dibe



console.log(path.extname(mycurrentpath)) //extension name


// let pathobj={


//     dir:"usr/local",
//     name:'testfile',
//     ext:'.js'
// }

// console.log(path.format(pathobj))



console.log(path.isAbsolute(mycurrentpath))


