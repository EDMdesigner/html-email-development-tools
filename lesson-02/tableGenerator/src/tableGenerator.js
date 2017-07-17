var fs = require("fs");
var pretty = require("pretty");
var cheerio = require("cheerio");

//var html = fs.readFileSync("index.html", "utf8");
var $ = cheerio.load("");

// CREATE TABLE


function createTable(row_count, col_count) {
	var row_count = row_count;
	var col_count = col_count;

	var table = $("<table></table>");

	for (var rows = 0; rows < row_count; rows += 1) {
		var tr = $("<tr></tr>");
		table.append(tr);

		for (var cols = 0; cols < col_count; cols += 1) {	
			var td = $("<td></td>");
			tr.append(td);
		}
	}

	return table;
};

var table = createTable((process.argv[3]), (process.argv[4]));

$("body").append(table);

console.log(pretty($.html()));
