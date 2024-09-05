// Part1

let csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

function parseCSV(csvString) {
    // Split the CSV string by new lines to get rows
    let rows = csvString.split('\n');

    // Split the first row to extract column headers
    let headers = rows[0].split(',');

    // Create an array to store the objects
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

// Test the function
let result = parseCSV(csvString);
console.log(result);
