
function go () {

  var testdata = [
    {
      _id:"1",
      body:"first!",
      target_id:null
    },
    {
      _id:"2",
      body:"second",
      target_id:"1"
    }
  ]

  var nebula = new Nebula("#graph", 800, 600, testdata);

  console.log(nebula);
}
