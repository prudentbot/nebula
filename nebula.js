

// takes some nodes with targets and creates edges for d3.
var createEdges = function(nodes){
  var edgesForD3 = [];
  for (var outerIndex = 0; outerIndex < nodes.length; ++outerIndex){
    var outerNode = nodes[outerIndex];

    if(!outerNode.target_id)
      continue;

    var targetIndex = -1;

    for (var innerIndex = 0; innerIndex < nodes.length; ++innerIndex){
      var innerNode = nodes[innerIndex];

      if (outerNode.target_id === innerNode._id){
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


Nebula = function(svgSelector, width, height, data){

  var svg = d3.select(svgSelector)

  if(svg.empty())
    return {error:"Selection for provided selector was empty."}

  var edges = createEdges(data);

  var force = d3.layout.force()
    .linkDistance(80)
    .charge(-160)
    .gravity(.05)
    .size([width, height])
    .nodes(data)
    .links(edges)
    .start()


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
      .attr("r", 10)
      .attr("fill", "gray")
      .attr("stroke", "black")
      .call(force.drag);

  var arrow = svg.append("defs").append("marker")
    .attr("id", "Triangle")
    .attr("viewBox", "-10 -10 30 30")
    .attr("markerWidth", "40")
    .attr("markerHeight", "40")
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

// var newLink;
//
// Template.graph.rendered = function(){
//
//   Session.set('target_id', Router.current().params._id)
//
//   Session.set("state", new State("view"));
//   Session.set("selected", Router.current().params._id);
//   var self = this;
//
//   self.graphElem = d3.select('#graph');
//   self.edges = self.graphElem.select('#edges');
//   self.nodes = self.graphElem.select('#nodes');
//
//   var nodes = []
//   var links = []
//
//   var meteorNodes = [];
//   var meteorEdges = [];
//
//   var targetType;
//   var target;
//
//   var force = d3.layout.force()
//     .linkDistance(80)
//     .charge(-160)
//     .gravity(.05)
//     .size([1200, 500])
//     .on("tick", tick)
//
//   // Will change when target changes, loads all connected nodes.
//   // needed for separate link code, might need phasing out
//   Deps.autorun(function(){
//     var target_id = Session.get('target_id')
//
//     if(target = Nodes.findOne({_id:target_id})){
//       targetType = "node";
//     }
//     else if(target = Links.findOne({_id:target_id})){
//       targetType = "edge";
//     }
//   })
//
//   // Calculating node changes
//   Deps.autorun(function(){
//     meteorNodes = Nodes.find({root_id:target.root_id}).fetch();
//
//     if(nodes.length == 0)
//       var isFresh = true;
//
//     var newNodes = _.difference(meteorNodes, nodes);
//     newNodes.forEach(function(n){
//       nodes.push(n);
//     });
//
//
//     // LOOKINTO, does the selection change dynamically when elements are added?
//     var DOMnodes = self.nodes.selectAll("*")
//       .data(nodes, function(d){ return d._id});
//
//     // 'node' + d._id is because the id field isn't allowed to begin with numbers.
//     if(isFresh){
//       DOMnodes.enter()
//         .append("circle")
//         .attr("class",function(d) { return "node " + d.type; })
//         .attr("r", function(d) { return (Math.abs(d.value) + 5) * 1.5; }) // handles negative values
//         .attr("_id", function(d) { return "node" + d._id; })
//         .on("mouseover", mouseover)
//         .call(force.drag());
//
//         selectHighlighted();
//     }
//     else{
//       DOMnodes.enter()
//         .append("circle")
//         .attr("class", "node unread statement") // here's the difference, also the statement part is a bit ratchet.
//         .attr("r", function(d) { return (Math.sqrt(d.value*d.value) + 5) * 1.5; }) // handles negative values
//         .attr("_id", function(d) { return "node" + d._id; })
//         .on("mouseover", mouseover)
//         .call(force.drag());
//     }
//
//     // FIXME- This won't work as expected, get it to run like data selection.
//     DOMnodes.exit()
//       .remove()
//
//     force
//       .nodes(nodes)
//       .start()
//   })
//
//   // Calculates link changes.
//   Deps.autorun(function(){
//
//     //FIXME: This fetches all links?
//     var meteorLinks = Links.find().fetch();
//     var newLinks = _.difference(meteorLinks, links);
//     newLinks.forEach(function(e){
//       var sourceNode = nodes.filter(function(n) { return n._id === e.source; })[0],
//           targetNode = nodes.filter(function(n) { return n._id === e.target; })[0];
//
//       // Add the edge to the array
//       if(sourceNode && targetNode)
//         links.push({source: sourceNode, target: targetNode, type:e.type, _id:e._id});
//     });
//
//     var DOMLinks = self.edges.selectAll("*")
//       .data(links)
//
//     DOMLinks.enter()
//       .append("path")
//       .attr("class", function(e) { return "edge " + e.type + "-edge"})
//       .attr("_id", function(e) { return "edge" + e._id })
//       .attr("marker-end", "url(#Triangle)")
//       .on("mouseover", mouseover);
//
//     DOMLinks.exit()
//       .remove();
//
//     force
//       .links(links)
//       .start()
//   })
//
//   // handles logic for state changes
//   Deps.autorun(function(){
//     var state = Session.get('state');
//
//     // state should only be around when graph first spins up
//     if(!state){
//       Session.set('state', new State("view"));
//     }
//     // Just looking around at stuff.
//     else if(state.name == "view"){
//       if(newLink){
//         newLink.remove();
//         newLink = undefined;
//       }
//       self.graphElem.on('click', selectHighlighted);
//       self.graphElem.on('mousemove', null);
//     }
//     // after a doubleclick, choose the edge target
//     else if(state.name == "chooseTarget"){
//
//       var d = state.data.source;
//
//       newLink = self.graphElem.append('line')
//         .attr('id', 'potential-edge')
//         .attr('x1', d.x)
//         .attr('y1', d.y)
//         .attr('x2', d.x)
//         .attr('y2', d.y)
//         .attr("marker-end", "url(#Triangle)")
//         .attr("source", "node" + d._id)
//
//       self.graphElem.on('mousemove', function() {
//         var mouse = d3.mouse(this);
//         var offsets = getOffsetCoordinates({x: d.x, y: d.y}, {x: mouse[0], y: mouse[1]});
//         newLink.attr("x2", offsets.x);
//         newLink.attr("y2", offsets.y);
//       });
//
//       self.graphElem.on('click', chooseTarget);
//     }
//     // after the edge target is chosen, confirm submission
//     else if(state.name == "submittingEdge"){
//       self.graphElem.on('mousemove', null);
//       self.graphElem.on('click', selectHighlighted);
//     }
//
//     checkNotification();
//   })
//
//   function getOffsetCoordinates(source, target){
//       var s2 = target;
//       var s1 = source;
//
//       var slope = (s2.y - s1.y) / (s2.x - s1.x);
//       var radius = 20;
//
//       var tanx = radius / Math.sqrt(Math.pow(slope,2) + 1);
//       var arrowLength = 10;
//       var arrowWidth = 2;
//
//       if(s2.x > s1.x)
//         tanx = -tanx;
//
//       var tany = slope * tanx;
//
//       tanx += s2.x;
//       tany += s2.y;
//
//       return {x: tanx, y: tany};
//   }
//
//   function tick() {
//     var node = self.graphElem.selectAll('.node');
//     var link = self.graphElem.selectAll('.edge');
//     var potentialLink = self.graphElem.select('#potential-edge');
//
//     link.attr("d", function(d) {
//       var offsets = getOffsetCoordinates(d.source, d.target);
//
//       return "M " + d.source.x + " " + d.source.y + " L " + offsets.x + " " +
//       offsets.y;
//     })
//
//     node.attr("cx", function(d) { return d.x; })
//       .attr("cy", function(d) { return d.y; });
//   }
//
//   function mouseover(d) {
//     if (d3.event.defaultPrevented)
//       return;
//
//     var mousedOver = Session.get('mousedOver');
//     if(mousedOver){
//       var c = self.graphElem.select("circle[_id=node" + mousedOver._id + "]")
//       var p = self.graphElem.select("path[_id=edge"+ mousedOver._id + "]")
//
//
//       if(c[0][0])
//         c.classed('highlighted', false);
//
//       if(p[0][0])
//         p.classed('highlighted', false);
//     }
//
//     var c = self.graphElem.select("circle[_id=node" + d._id + "]")
//     var p = self.graphElem.select("path[_id=edge"+ d._id + "]")
//
//     if(c[0][0])
//       c.classed('highlighted', true);
//
//     if(p[0][0])
//       p.classed('highlighted', true);
//
//     Session.set('mousedOver', d);
//   }
//
//   function doubleclick(d){
//     if (d3.event.defaultPrevented)
//       return;
//
//     source = d;
//     Session.set("state", new State("chooseTarget", {source:d} ));
//   }
//
//   function chooseTarget(){
//     var source = Session.get("state").data.source
//     var clickedElem_id = d3.select(d3.event.target).attr('_id');
//     if(clickedElem_id && clickedElem_id.indexOf("node") != -1){
//       var target_id = clickedElem_id.replace("node", "");
//       var source_id = source._id.replace("node", "");
//       var newEdge = {
//         source: source_id,
//         target: target_id
//       }
//       Session.set("state", new State("submittingEdge", newEdge));
//     }
//     else{
//       Session.set("state", new State("view"));
//     }
//
//     self.graphElem.on('mousemove', null);
//   }
//
//   function selectHighlighted(){
//     //FIXME, keep track of last selectedDOMNode (globals vs same template)
//     var selected_id = Session.get('selected');
//     var c = self.graphElem.select("circle[_id=node" + selected_id + "]")
//     var p = self.graphElem.select("path[_id=edge"+ selected_id + "]")
//
//     if(c[0][0])
//       c.classed('selected', false);
//
//     if(p[0][0])
//       p.classed('selected', false);
//
//     var mousedOver = Session.get('mousedOver');
//
//     if(!mousedOver)
//       return;
//
//     var c = self.graphElem.select("circle[_id=node" + mousedOver._id + "]")
//     var p = self.graphElem.select("path[_id=edge"+ mousedOver._id + "]")
//
//     if(c[0][0]){
//       c.classed('selected', true);
//       c.classed('unread', false);
//     }
//
//     if(p[0][0])
//       p.classed('selected', true);
//
//     Session.set('selected', mousedOver._id);
//     checkNotification();
//   }
// }
//
// var checkNotification = function(){
//
//   if (!Meteor.user()){
//     return;
//   }
//
//   var selected_id = Session.get("selected");
//   Meteor.call("checkNotification", Meteor.user()._id, selected_id);
// }
//
// function State(name, data){
//   this.name = name;
//   this.data = data;
// }
