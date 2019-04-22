/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

app.set('view engine', 'ejs');

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(process.env.PORT || 8080, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

/* 3. 以後、アプリケーション固有の処理 */

// 写真のサンプルデータ
var photoList = [
  {
    id: "001",
    name: "photo001.jpg",
    type: "jpg",
    dataUrl: "https://ic4-a.wowma.net/mis/gr/114/image.wowma.jp/31106436/ntc/kokoroes/cabinet/s227/5866187.jpg"
  }, {
    id: "002",
    name: "photo002.jpg",
    type: "jpg",
    dataUrl: "https://pug1.net/pughoney/wp-content/uploads/2016/08/ra9.jpg"
  }
]

app.get("/", function (req, res, next) {
  res.render("index", {}); //{}はviewに対して、データを遅れる{photo: photolist}
});

// 写真リストを取得するAPI
app.get("/api/photo/list", function (req, res, next) {
  res.json(photoList);
});

app.get("/api/photo/:photoId", function (req, res, next) {
  var photo;
  for (i = 0; i < photoList.length; i++) {
    if (photoList[i].id === req.params.photoId) {
      var photo = photoList[i];
    }
  }
  res.json(photo);
});
