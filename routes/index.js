const photoList = require("../models/photolist.js").photoList;

// module.exports.controller = class Controller {
//   home(req, res) {
//     res.render("index", {}); //{}はviewに対して、データを遅れる{photo: photolist}
//   }

//   index(req, res) {
//     res.render("list", { photoList });
//   }

//   show(req, res) {
//     let photo;
//     for (let i = 0; i < photoList.length; i++) {
//       if (photoList[i].id === req.params.id) {
//         photo = photoList[i];
//       }
//     }
//     res.json(photo);
//   }
// }

class Controller {
  home(req, res) {
    res.render("index", {}); //{}はviewに対して、データを遅れる{photo: photolist}
  }

  index(req, res) {
    res.render("list", { photoList });
  }

  show(req, res) {
    let photo;
    for (let i = 0; i < photoList.length; i++) {
      if (photoList[i].id === req.params.id) {
        photo = photoList[i];
      }
    }
    res.json(photo);
  }
}

module.exports.controller = Controller;
