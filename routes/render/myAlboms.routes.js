const router = require('express').Router();
const { Album } = require('../../db/models');
const MyAlboms = require('../../components/MyAlboms');
const Albom = require('../../components/Albom');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const arr = await Album.findAll({
        where: { userId: req.session.userId },
        raw: true,
      });
      res.renderComponent(MyAlboms, { arr });
    } catch (error) {
      res.status(500).json({ error });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, visible, description } = req.body;
      const albom = await Album.create({
        name,
        visible,
        description,
        userId: req.session.userId,
      });
      res.status(201).json({
        html: res.renderComponent(Albom, { albom }, { htmlOnly: true }),
      });
    } catch (error) {}
  });

//delete
router.route('/myalbums/:id').delete(async (req, res) => {
  try {
    const album = await Album.findOne({ where: { id: req.params.id } });
    if (album.userId === req.session.userId) {
      const delAlbum = await Album.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json({ delAlbum });
    }
  } catch ({ message }) {
    res.status(400).json(message);
  }
});

module.exports = router;
