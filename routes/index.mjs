import Hoge from 'models/photolist';

const photoList = Hoge.photoList;

class Controller {
  exportedPhotoList = Hoge.photoList;

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
