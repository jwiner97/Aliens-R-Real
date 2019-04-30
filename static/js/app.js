// from data.js
var tableData = data;

// build function used to generate html table
function appendTable(report){
    // define variable for table body and use d3 to select object
    var tbody = d3.select("tbody");
    // define a variable that creates a row object to append to table body
    var row = tbody.append("tr");
    // for each entry in report, assign a key and value and append the values to the html data cells
    Object.entries(report).forEach(([k, v]) => {
        var cell = row.append("td");
        cell.text(v);

    })}
// use appendTable function for each entry of data dictionary.s
tableData.forEach(appendTable);


// Level 1, task 3 -- date filter
// define a submit variable that selects the filter button on index.html
var submit = d3.select("#filter-btn");
 
// when clicked do the following:
submit.on("click", function() {
    // prevents page from reloading once clicked
    d3.event.preventDefault();
    // removes existing table
    d3.select("tbody").html("");
    // set variable that selects value of the input field from index.html where the user inputs date
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);
    // create a filtered data table by filtering on tableData and comparing to dateTime object from input in line 31
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData)
    // run the append table function for newly filtered data
    filteredData.forEach(appendTable);
});


