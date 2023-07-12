const fs = require('fs')

function writeDataToFile(filename, content){
    //we're going to make this easy for ourselves and write it synchronously
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if(err){
            console.log(err)
        }
    })
}

function getPostData(req){
return new Promise((resolve, reject) => {
    try {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        }).on('end', () =>{
        resolve(body)
        })    
    } catch (error) {
        reject(error )
    }
})
}


module.exports = {
    writeDataToFile,
    getPostData
}