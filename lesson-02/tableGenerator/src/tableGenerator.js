// REQUIRE THE NECESSARY PACKAGES
var pretty = require("pretty");
var cheerio = require("cheerio");

// LOAD CHEERIO
var $ = cheerio.load("");

	
function createLayout () {
	var layoutWrapper = $("<table></table>");
	var layoutSetupList = process.argv;

	// LOOP THROUGH LAYOUT SETUP LIST RECEIVED FROM THE COMMAND LINE
	for (var position = 2; position < layoutSetupList.length; position += 1) {
		var columnCount = layoutSetupList[position];

		// THE LAYOUT CAN'T CONTAIN ZERO OR NEGATIVE NUMBER OF COLUMNS
		if (columnCount < 1) {
			throw new Error ("The argument value has to be at least 1!");
		}

		// AND CERTAINLY WILL HAVE AN EMPTY ROW
		var tr = $("<tr></tr>");
		layoutWrapper.append(tr);

		// AND ADD A CELL IN
		var td = $("<td></td>");
		tr.append(td);

		// IF ELEMENT HAS MORE THAN ONE COLUMN, WE POPUATE THE CELL WITH
		// THE MULTI-COLUMN ELEMENT
		if (columnCount > 1) {
			td.append(createMultiColumn(columnCount));
		}
	}
	
	return layoutWrapper;
}

function createMultiColumn(columnCount) {

	var multiColTable = $("<table></table>");
	var tr = $("<tr></tr>");

	multiColTable.append(tr);

	for (var cols = 0; cols < columnCount; cols += 1) { 
		var td = $("<td></td>");
		tr.append(td);
	}
	
	return multiColTable;
}


var layout = createLayout();

$("body").append(layout);

console.log(pretty($.html()));
