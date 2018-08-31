//Getting arguments inputs
const fileOne = process.argv[2];
const fileTwo = process.argv[3];
const inputString = process.argv[4];
const fs = require("fs");

//Creating and Writing into file 
const writeIntoFile = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, error => {
            if (error) reject(error);
            resolve("file created successfully");
        });
    });
};

//Reading from file
const readFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

//Reversing strings
const reverseString = (str) => {
    if (str === "") return "";
    else return str.split('').reverse().join('');
};

writeIntoFile(fileOne, inputString)
    .then(result => {
        console.log(result);
        return readFile(fileOne);
    }).catch(error => {
        console.log(error)
    }).then(result => {
        console.log(`Reading: ${result}`);
        return writeIntoFile(fileTwo, reverseString(result.toString()));
    }).catch(error => {
        console.log(error);
    }).then(result => {
        console.log(result);
        return readFile(fileOne);
    }).catch(error => {
        console.log(error)
    })


//Run code
//$ node app.js inputFile.txt outputFile.txt "Hello World"