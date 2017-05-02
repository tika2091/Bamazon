var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});
console.log("Welcome to bamazon store");
start();



 function start() {
  inquirer.prompt({
    name: "VisitOrNo",
    message: "Do you like to visit [VISIT] or [NO]the store?",
    choices: ["VISIT", "N0"]
  }).then(function(answer) {
    if (answer.VisitOrNo.toUpperCase() === "VISIT") {
      visitStore();
    } else {
      console.log("Sorry to see you leaving");
    }
  });



  function visitStore() {
    var query = "SELECT * FROM products";
    var items = [];

    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log("success");
      console.log(res);


      // for (var i = 0; i <= res.length; i++) {
      //   products.push(res[i].product_name);
      //   console.log(res[i]);
    //   }
    });
  }
}
// connection.end();


// var visitStore = function(){
//   inquirer.prompt([{
//
// }
