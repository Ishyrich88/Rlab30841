// Part1

let csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

function parseCSV(csvString) {
    
    let rows = csvString.split('\n');

    
    let headers = rows[0].split(',');

    
    let parsedData = [];

    // Iterate over the remaining rows to create objects
    for (let i = 1; i < rows.length; i++) {
        let values = rows[i].split(',');
        let obj = {};

        // Assign values to the object using headers as keys
        headers.forEach((header, index) => {
            obj[header] = values[index];
        });

        parsedData.push(obj);
    }

    return parsedData;
}


let result = parseCSV(csvString);
console.log(result);



// Part 2

function parseCSVTo2DArray(csvString) {
    
    let rows = csvString.split('\n');
    
    
    let headers = rows[0].split(',');

    
    let dataArray = [headers];

    
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i].split(',');
        dataArray.push(row);
    }

    return dataArray;
}

// Store the 2D array in a variable
let csvArray = parseCSVTo2DArray(csvString);

// Log the result
console.log(csvArray);



// part 3 

function transformToObjects(dataArray) {
    let headers = dataArray[0].map(header => header.toLowerCase()); // Convert headers to lowercase
    let objectsArray = [];

    // Iterate over each row (except the first header row)
    for (let i = 1; i < dataArray.length; i++) {
        let rowObject = {};
        
        // Map each column value to its corresponding header
        headers.forEach((header, index) => {
            rowObject[header] = dataArray[i][index];
        });

        objectsArray.push(rowObject);
    }

    return objectsArray;
}

// Transform the 2D array to an array of objects
let dataObjects = transformToObjects(csvArray);


console.log(dataObjects);


// Part 4 

// Remove the last element
dataObjects.pop();

// Insert a new object at index 1
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add a new object to the end of the array
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("After Manipulation:");
console.log(dataObjects);

// Calculate the average age
let totalAge = 0;
let count = 0;

for (let obj of dataObjects) {
    totalAge += parseInt(obj.age);
    count++;
}

let averageAge = totalAge / count;
console.log(`Average Age: ${averageAge}`);


// Part 5 

function transformToCSV(objectsArray) {
    
    let headers = Object.keys(objectsArray[0]);


    let csvString = headers.join(',') + '\n';

    
    objectsArray.forEach(obj => {
        let row = headers.map(header => obj[header]);
        csvString += row.join(',') + '\n';
    });

    return csvString;
}


let finalCSV = transformToCSV(dataObjects);


console.log(finalCSV);
