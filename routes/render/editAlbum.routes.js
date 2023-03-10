const router = require('express').Router();
const { Album } = require('../../db/models');
const EditAlbom = require('../../components/EditAlbom');

router
  .route('/albums/:id')
  .get(async (req, res) => {
    try {
      res.renderComponent(EditAlbom);
    } catch ({ message }) {
      res.send(message);
    }
  })

  //create
  .put(async (req, res) => {
    try {
      let { id } = req.params;
          id = Number(id);
      const { name, visible, description } = req.body;
      console.log(name, visible, description, '=========');
      if (name && description) {
        console.log(1223);
        const editAlbum = await Album.update(
          { name, visible, description },
          {
            where: { id, userId: req.session.userId },
            raw: true,
            returning: true,
          }
        );
        console.log(65656565656565656);
    
        const response = await Album.findOne({ where: { id } });
        if (response) {
          res.json({ album: response });
        } else {
          res.json({ message: 'Введите данные корректно' });
        }
      } else {
        res.json({ message: 'Введите данные' });
      }
    } catch (error) {}
  });

module.exports = router;
