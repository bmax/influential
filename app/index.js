import * as d3 from 'd3';

var groups = [];
var rects  = [];
var text   = [];
var svg    = d3.select("svg");

var b_stroke = "#9C9AA2",
    c_stroke = "#243030";

var ident_style = {
    "stroke": "#aeaeae",
    "stroke-width": 2,
    "fill": "none"
};

const width        = svg.attr('width'),
      height       = svg.attr('height'),
      centerWidth  = width/2+50,
      centerHeight = height/2-100;

const rect_template = { x: centerWidth, y: centerHeight, width: 200, height: 150, rx: 75, ry: 75 };

groups = [ svg.append('g'), svg.append('g'), svg.append('g'), svg.append('g') ];

// create 3 inital rects
rects[0] = groups[1]
    .append('rect')
        .attr('x', rect_template.x)
        .attr('y', rect_template.y)
        .attr('width', rect_template.width)
        .attr('height', rect_template.height)
        .attr('rx', rect_template.rx)
        .attr('ry', rect_template.ry)
        .style('fill', '#FF2525');
text[0] = groups[1]
    .append('text')
        .attr('x', rect_template.x+50)
        .attr('y', rect_template.y+75)
        .attr('font-family', 'Verdana')
        .attr('font-size','15')
        .attr('fill', '#243030')
        .text( '@bmaxhacks' );
rects[1] = groups[2]
    .append('rect')
        .attr('x', rect_template.x-rect_template.width-50)
        .attr('y', rect_template.y-rect_template.height-50)
        .attr('width', rect_template.width)
        .attr('height', rect_template.height)
        .attr('rx', rect_template.rx)
        .attr('ry', rect_template.ry)
        .style('fill', '#FF2525');
text[1] = groups[2]
    .append('text')
        .attr('x', (rect_template.x-rect_template.width-50)+50)
        .attr('y', (rect_template.y-rect_template.height-50)+75)
        .attr('font-family', 'Verdana')
        .attr('font-size','15')
        .attr('fill', '#243030')
        .text( '@someoneelse' );
rects[2] = groups[3]
    .append('rect')
        .attr('x', rect_template.x-rect_template.width-50)
        .attr('y', rect_template.y+rect_template.height+50)
        .attr('width', rect_template.width)
        .attr('height', rect_template.height)
        .attr('rx', rect_template.rx)
        .attr('ry', rect_template.ry)
        .style('fill', '#FF2525');
text[2] = groups[3]
    .append('text')
        .attr('x', (rect_template.x-rect_template.width-50)+50)
        .attr('y', (rect_template.y+rect_template.height+50)+75)
        .attr('font-family', 'Verdana')
        .attr('font-size','15')
        .attr('fill', '#243030')
        .text( '@someoneelse' );

text.forEach( function (t) {
  var x = text[0].attr('x');
  var y = text[0].attr('y');
  var x1 = t.attr('x');
  var y1 = t.attr('y');

  var path = "M " + x + " " + y + " L " + x1 + " " + y1;

  groups[0].append("path").attr("d", path)
      .style("stroke", "#9C9AA2")
      .style("stroke-width", 5);
} );