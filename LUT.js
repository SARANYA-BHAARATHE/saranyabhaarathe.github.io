var row1 = ["19","78","5a","F0","D2","96","3C","B4"];
var row2 = ["A","AA","E6","D2","32","1E","96","5A","82","46","6E","BE"];
var row3 = ["FF","8C","28","14","78","DC","3C","A0","64","C8","50","B4"];

function myLoad()	{
	var rowIndex = 0;
	var row, thCell;
	var objTable = document.getElementById("LUTTable");
	if(objTable)	{
		for(var i = 0; i < row1.length; i++) {
			for(var j = 0; j < row2.length; j++) {
				for(var k = 0; k < row3.length; k++) {
					row = objTable.insertRow(rowIndex++);
					thCell = document.createElement("th");
					row.appendChild(thCell);
					var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
					svg.setAttribute('style', 'border: 1px solid black');
					svg.setAttribute('width', '50');
					svg.setAttribute('height', '20');
					svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
					thCell.appendChild(svg);
					var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
					rect.setAttributeNS(null, 'height', '20');
					rect.setAttributeNS(null, 'width', '50');
					rect.setAttributeNS(null, 'fill', '#'+ row1[i] + row2[j] + row3[k]);						
				}				
			}			
		}
	}
};