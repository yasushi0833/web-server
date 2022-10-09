const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//     res.send("<h1>トップページ<h1>");
// });

// app.get('/about', function (req, res) {
//     res.send("about ページ");
//   });

app.post("/api/v1/quiz", (req, res) => {
    const answer = req.body.answer;
    if (answer === "2"){
        // res.send("<h1>正解</h1>");
        res.redirect("/correct.html");
    } else {
        // res.send("不正解");
        res.redirect("/wrong.html");
    }
})

app.listen(3000, function () {
    console.log("i am running!");
});