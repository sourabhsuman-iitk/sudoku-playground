const express = require("express");
const app = express();


app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("index")
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('sudoku has started on port ' + port);
});