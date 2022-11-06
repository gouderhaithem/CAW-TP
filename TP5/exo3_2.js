
const path = require('path');
const fs = require('fs');

function searchFilesInDirectory(dir, filter) {
    

    const files = searchFilesInDirectory(dir);

    files.forEach(file => {
        console.log(file);
        const fileContent = fs.readFileSync(file);
        
        // We want full words, so we use full word boundary in regex.
        const regex = new RegExp( filter );
        if (regex.test(fileContent)) {
            console.log(`Your word was found in file: ${file}`);
        }
    });
}
searchFilesInDirectory('folder_text',"hello",)

