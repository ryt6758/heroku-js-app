/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
const express = require("express");
const Controller = require("./routes/index.mjs").controller;
const controller = new Controller();
const app = express();

app.set('view engine', 'ejs');

app.get("/", controller.home);
app.get("/api/photo/list", controller.index);
app.get("/api/photo/:id", controller.show);

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(process.env.PORT || 8080, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});
