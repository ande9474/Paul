//Width and height
var w = 500;
var h = 50;

var dataset = [5,10,15,20,25];

var svg = d3.select("body")
			.append("svg")
			.attr("width",w)
			.attr("height",h);

var circles = svg.selectAll("circle")
					.data(dataset)
					.enter()
					.append("circle");

circles.attr("cx", function(d, i) {
		return (i * 50) + 25;
	})
   .attr("cy", h/2)
   .attr("r", function(d) {
		return d;
   })
   .attr("fill", "yellow")
	.attr("stroke", "orange")
	.attr("stroke-width", function(d) {
		return d/2;
	});