
var internalMap = {
  _id:"_id",
  _body:"body",
  target_id:"target_id"
}

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
  }

  return edgesForD3;
};


Nebula = function(svgSelector, width, height, userOnMouseover, data, map){

  var circleRadius = 10;

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

  console.log(internalMap);

  var edges = createEdges(data);

  var selected;
  var selectedData
  var oldFill;

  var onmouseout = function(d){
    // d.fixed = false;
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



  var force = d3.layout.force()
    .linkDistance(80)
    .charge(-160)
    .gravity(.05)
    .size([width, height])
    .nodes(data)
    .links(edges)
    .start()


  var dragstart = function(d) {
    d.fixed = true;
  }

  var ondoubleclick = function(d) {
    d.fixed = false;
  }

  // var drag = force.drag()
  //   .on("dragstart", dragstart);


  var edge = svg.selectAll(".edge")
      .data(edges)
    .enter().append("line")
      .attr("class", "edge")
      .attr("stroke", "black")
      .style("stroke-width", 2)
      .attr("marker-end", "url(#Triangle)")

  var node = svg.selectAll(".node")
      .data(data)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", circleRadius)
      .attr("fill", function(d){ if(!d[internalMap["target_id"]]) {return "#666699"} else {return "gray"}})
      .attr("stroke", "black")
      .on("mouseover", onmouseover)
      .on("mouseout", onmouseout)
      .on("doubleclick", ondoubleclick)
      .call(force.drag());

  var arrow = svg.append("defs").append("marker")
    .attr("id", "Triangle")
    .attr("viewBox", "-10 -10 30 30")
    .attr("markerWidth", "35")
    .attr("markerHeight", "35")
    .attr("orient", "auto");

  arrow.append("path")
    .attr("d", "M -3 0 L -8 -2 L -8 2 z");


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
