


 var fs = require('fs')
function grep(text, files) {
    const re = new RegExp(text);
    var FilesArray= [];
    for (let index = 0; index <files.length; index++) {
        try {
            const fileContent = fs.readFileSync(files[index]).toString();
            if (fileContent.match(re, 'gi') == null) {
                console.log('None');
            } else {
                // to add the files that contains text
                 FilesArray.push(files[index]);
            }
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.log(`File not found! ${files[index]}`);
            } else {
                throw error;
            }
        }
    }
    console.log(` this text found on ${FilesArray}`);
}
grep("hello",["example.txt","example2.txt",]);
let test = "haithem"
const re = new RegExp(test);
console.log(re);
