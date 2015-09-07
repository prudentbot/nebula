# Installation

```bower install nebula```

# About

This is a library for creating force-directed graph _interfaces_ for viewing and interacting with nested comments.

It allows you to build stuff like this ![](https://github.com/prudentbot/nebula/blob/master/resources/lookslikethis.png)

Really, it's just a wrapper around the d3 force-directed graph layout, but it makes some opinionated choices about the best way to interact with comments as force-directed nodes and so the idea is that there's a lot of usable functionality pre-made at the expense of some customizability.

[There's a project ready-made for testing it here](https://github.com/prudentbot/reddit-nebula)

# Example

```javascript
  // Our data
  var nodes = [
    {
      _id:0,
      target_id:undefined,
      value:1,
      author:"me",
      body:"first!"
    },
    {
      _id:1,
      target_id:0,
      value:2,
      author:"you",
      body:"second",
      extradata:"asdfasdf"
    }
  ]

  // Preparation
  var width = 800;
  var height = 600;

  var body = d3.select("body");

  body
    .append("svg")
      .attr("id", "graph")
      .attr("width", width)
      .attr("height", height);

  var onmouseover = function(d){
    console.log(d);
    //node's information is logged
  }
  
  //actually initialize the graph
  nebula = new Nebula("#graph", width, height, onmouseover, nodes);
  
  var newNode = {
      _id:3,
      target_id:0,
      value:1,
      author:"you",
      body:"third"
  },

  //adds a new node to the graph.
  nebula.addNode(newNode);
  
  //removes the node with id 1
  nebula.removeNode(1);
```
