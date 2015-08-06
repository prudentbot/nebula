
var internalMap = {
  _id:"_id",
  _body:"body",
  target_id:"target_id",
  author:"author",
  value:"value"
}

var selected;
var selectedData
var oldFill;

var minValue;
var maxValue;

// takes some nodes with targets and creates edges for d3.
var createEdges = function(nodes){
  var edgesForD3 = [];
  for (var outerIndex = 0; outerIndex < nodes.length; ++outerIndex){
    var outerNode = nodes[outerIndex];

    if(!outerNode[internalMap["target_id"]])
      continue;

    var targetIndex = -1;

    for (var innerIndex = 0; innerIndex < nodes.length; ++innerIndex){
      var innerNode = nodes[innerIndex];

      if (outerNode[internalMap["target_id"]] === innerNode[internalMap["_id"]]){
        targetIndex = innerIndex;
        break;
      }
    };

    // if target_id has no corresponding target
    if(targetIndex === -1)
      continue;

    edgesForD3.push({source:outerIndex, target:targetIndex});

    if(outerNode.value){
      if(!minValue)
        minValue = outerNode.value;
      if(!maxValue)
        maxValue = outerNode.value;

      minValue = Math.min(outerNode.value, minValue);
      maxValue = Math.max(outerNode.value, maxValue);
    }

  }


  return edgesForD3;
};


Nebula = function(svgSelector, width, height, userOnMouseover, data, map){

  function zoomed() {
    drawables.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }

  function dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
  }

  function dragged(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  function dragended(d) {
  }

  var onmouseover = function(d){
    // d.fixed = true;

    if(!!selected){
      selected.attr("fill", oldFill);
      // selectedData.fixed = false;
    }

    oldFill = d3.select(this).attr("fill");
    selected = d3.select(this);
    selectedData = d;

    d3.select(this).attr("fill", "yellow");
    userOnMouseover(d);
  }

  var svg = d3.select(svgSelector);
  if(svg.empty())
    return {error:"Selection for provided selector was empty."}

  if(!!map){
    try{
      for (var key in map) {
        if (map.hasOwnProperty(key)) {
          if(!!internalMap[key]){
            internalMap[key] = map[key];
          }
        }
      }
    }
    catch(e){
      console.log(e);
      return {error:"Bad map provided"}
    }
  }

  var zoom = d3.behavior.zoom()
      .scaleExtent([.2, 2])
      .on("zoom", zoomed);

  svg.call(zoom);

  var circleRadius = 10;

  var edges = createEdges(data);

  var rect = svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all");

  var drawables = svg
    .append("g")

  var force = d3.layout.force()
    .linkDistance(80)
    .charge(-160)
    .gravity(.05)
    .size([width, height])
    .nodes(data)
    .links(edges)
    .start()

  var drag = force.drag()
    .origin(function(d) { return d; })
    .on("dragstart", dragstarted)
    .on("drag", dragged)
    .on("dragend", dragended);

  var edge = drawables.selectAll(".edge")
      .data(edges)
    .enter().append("line")
      .attr("class", "edge")
      .attr("stroke", "black")
      .style("stroke-width", 2)
      .attr("marker-end", "url(#Triangle)")

  var node = drawables.selectAll(".node")
      .data(data)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", circleRadius)
      .attr("fill", function(d){ if(!d[internalMap["target_id"]]) {return "#666699"} else {return "gray"}})
      // .classed("nebula-original", function(d){return !d[internalMap["target_id"]]})
      .attr("stroke", "black")
      .on("mouseover", onmouseover)
      .call(drag);

  var arrow = drawables.append("defs").append("marker")
    .attr("id", "Triangle")
    .attr("viewBox", "-10 -10 30 30")
    .attr("markerWidth", "35")
    .attr("markerHeight", "35")
    .attr("orient", "auto");

  arrow.append("path")
    .attr("d", "M -3.5 0 l -6 -2 l 0 4 z");

  force.on("tick", function() {
    edge.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });


  var result = {};

  return result;
}
