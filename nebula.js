
var internalMap = {
  _id:"_id",
  _body:"body",
  target_id:"target_id",
  author:"author",
  value:"value"
}

var color_standard = "gray";
var color_commonAuthor = "red";
var color_original = "#666699";
var color_selected = "yellow";

var selected;
var selectedData;
var oldCommonAuthors;

var minValue;
var maxValue;

var createEdge = function(n, nodes, sourceIndex){

  if(!n[internalMap["target_id"]])
    return null;

  for(var i = 0; i < nodes.length; ++i){
    if (n[internalMap["target_id"]] === nodes[i][internalMap["_id"]])
      return {source:sourceIndex, target:i}
  }
  return null;
}

// takes some nodes with targets and creates edges for d3.
var createEdges = function(nodes){
  var edgesForD3 = [];
  for (var outerIndex = 0; outerIndex < nodes.length; ++outerIndex){

    var outerNode = nodes[outerIndex];

    if(outerNode[internalMap["value"]]){
      if(!minValue)
        minValue = outerNode[internalMap["value"]];
      if(!maxValue)
        maxValue = outerNode[internalMap["value"]];

      minValue = Math.min(outerNode[internalMap["value"]], minValue);
      maxValue = Math.max(outerNode[internalMap["value"]], maxValue);
    }

    var e;
    if(e = createEdge(outerNode, nodes, outerIndex))
      edgesForD3.push(e);
  }

  return edgesForD3;
};


Nebula = function(svgSelector, width, height, userOnMouseover, data, map){

  var calculateIntersectionX = function(d){
    var theta = Math.atan2(d.source.y - d.target.y, d.source.x - d.target.x);
    return d.target.x + calculateRadius(d.target) * Math.cos(theta);
  }

  var calculateIntersectionY = function(d){
    var theta = Math.atan2(d.source.y - d.target.y, d.source.x - d.target.x);
    return d.target.y + calculateRadius(d.target) * Math.sin(theta);
  }

  var tick = function() {
    edge.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", calculateIntersectionX)
        .attr("y2", calculateIntersectionY);

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }

  function zoomed() {
    drawables.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }

  function dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
  }

  function dragged(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  var onmouseover = function(d){

    if(!!selectedData){
      if(!!selectedData[internalMap["target_id"]])
        selected.attr("fill", color_standard)
      else
        selected.attr("fill", color_original);
    }

    selected = d3.select(this);
    selectedData = d;

    if(!!oldCommonAuthors){
      oldCommonAuthors
        .attr("fill", function(d){ if(!d[internalMap["target_id"]]) {return color_original} else {return color_standard}})
    }

    oldCommonAuthors = node
      .filter(function(n) {return n[internalMap["author"]] === d[internalMap["author"]]})
      .attr("fill", color_commonAuthor)

    selected.attr("fill", color_selected);
    userOnMouseover(d);
  }

  var calculateRadius = function(d){
      if(d[internalMap["value"]]){
        return (20 * ((d[internalMap["value"]] - minValue) / (maxValue - minValue))) + 10;
      }
      else
        return 10;
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
      console.err(e);
      return {error:"Bad map provided"}
    }
  }

  var zoom = d3.behavior.zoom()
      .scaleExtent([.2, 2])
      .on("zoom", zoomed);

  svg.call(zoom);

  var nodes = data;
  var edges = createEdges(data);

  var rect = svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all");

  var drawables = svg
    .append("g")

  var lineGroup = drawables.append("g")
    .attr("id", "Nebula-edges");

  var circleGroup = drawables.append("g")
    .attr("id", "Nebula-nodes");

  var force = d3.layout.force()
    .nodes(nodes)
    .links(edges)
    .linkDistance(80)
    .charge(-160)
    .gravity(.05)
    .size([width, height])
    .on("tick", tick)

  var drag = force.drag()
    .origin(function(d) { return d; })
    .on("dragstart", dragstarted)
    .on("drag", dragged);

  var node = circleGroup.selectAll("*");
  var edge = lineGroup.selectAll("*");

  var arrow = drawables.append("defs").append("marker")
    .attr("id", "Triangle")
    .attr("viewBox", "-10 -10 30 30")
    .attr("markerWidth", "35")
    .attr("markerHeight", "35")
    .attr("orient", "auto");

  arrow.append("path")
    .attr("d", "M .5 0 l -6 -2 l 0 4 z");


  var start = function(){
    edge = edge.data(edges);
    edge.enter().append("line")
      .attr("class", "edge")
      .attr("stroke", "black")
      .style("stroke-width", 2)
      .attr("marker-end", "url(#Triangle)")

    edge.exit().remove();

    node = node.data(nodes, function(d) { return d[internalMap["_id"]];});
    node.enter().append("circle")
      .attr("class", "node")
      .attr("r", calculateRadius)
      .attr("fill", function(d){if(!d[internalMap["target_id"]]) {return color_original} else {return color_standard}})
      .attr("stroke", "black")
      .on("mouseover", onmouseover)
      .call(drag);

    node.exit().remove();

    force.start();
  }

  var addNode = function(newNode){
    nodes.push(newNode);
    var newEdge = createEdge(newNode, nodes, nodes.length - 1)
    if(newEdge)
      edges.push(newEdge)
    start();
  }

  var removeNode = function(_id){
    var result;
    for(var i = 0; i < nodes.length; ++i){
      if(nodes[i][internalMap["_id"]] === _id){
        result = nodes[i];
        nodes.splice(i, 1);
        break;
      }
    }
    for(var i = 0; i < edges.length; ){
      var e = edges[i];
      if(e.source[internalMap["_id"]] === _id || e.target[internalMap["_id"]] === _id)
        edges.splice(i, 1);
      else
        ++i;
    }
    if(!!result)
      start();
    return result;
  }

  start();

  var result = {};
  result.addNode = addNode;
  result.removeNode = removeNode;

  return result;
}
