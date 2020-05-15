const fs          = require('fs');
const { Parser }  = require('json2csv');
const EOL         = require('os').EOL;

/**
 * @param {string} file 
 * @param {array} data
 * 
 * @returns {bool}
 */
let add_line_to_end_of_csv_file = function(file, data) {
  try {
    fs.readFileSync(file);
  } catch (e) {
    return false;
  }

  let parser = new Parser({
    header: false
  });

  let csv;
  try {
    csv = parser.parse(data);
  } catch (e) {
    return false;
  }

  try {
    fs.appendFileSync(file, csv + EOL);
  } catch (e) {
    return false;
  }

  return true;
}

let data = [{
  'Total': '100',
  'Name': 'myName1'
},
{
  'Total': '200',
  'Name': 'myName2'
}];
let result = add_line_to_end_of_csv_file('file.csv', data);

console.log(result);