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
## Mapping

Internally, Nebula is doing all its operations on data that looks like this.

```
var newNode = {
    _id:3,
    target_id:0,
    value:1,
    author:"you",
    body:"third"
}
```

However, not everyone's data is going to follow this specific naming convention.  To address this, Nebula allows you to give it a mapping object which maps the Nebula-internal attribute names to your attribute names.  For example, data that looks like this:

```
var redditNode = {
  id: "41k93c",
  parent_id: "41k93d",
  score: 42,
  author: "gammaplay"
  body: "http://i.imgur.com/LawFIZO.gifv"
}
```
Should have a corresponding map that looks like this, which should be fed to the Nebula call as the last argument.

```
  var redditmap = {
    target_id:"parent_id",
    _id:"id",
    value:"score"
  }
  
  nebula = new Nebula("#graph", width, height, onmouseover, nodes);
```
