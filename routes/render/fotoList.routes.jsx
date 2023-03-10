const router = require('express').Router();
const Foto = require('../../components/Foto');
const FotoList = require('../../components/FotoList');
const { Photo } = require('../../db/models');
const { Album } = require('../../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const arrFoto = await Photo.findAll({
        where: { albumId: Number(id) },
        raw: true,
      });
      res.renderComponent(FotoList, { arrFoto, albumId: Number(id) });
    } catch (error) {}
  })
  .post(async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const { nameFoto, descriptionFoto, urlFoto } = req.body;

      const foto = await Photo.create({
        name: nameFoto,
        description: descriptionFoto,
        url: urlFoto,
        userId: req.session.userId,
        albumId: Number(id),
      });
      res.status(200).json({
        html: res.renderComponent(Foto, { foto }, { htmlOnly: true }),
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  });

router.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const delFoto = await Photo.destroy({ where: { id: Number(id) } });
    res.json(delFoto);
  } catch (error) {}
});

module.exports = router;
