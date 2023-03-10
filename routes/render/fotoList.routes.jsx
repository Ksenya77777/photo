const router = require('express').Router();
const FotoList = require('../../components/FotoList');
const { Photo } = require('../../db/models');
const { Album } = require('../../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const arrFoto = await Photo.findAll({
        where: { userId: req.session.userId },
        raw: true,
      });
      res.renderComponent(FotoList, { arrFoto });
    } catch (error) {}
  })
  .post(async (req, res) => {
    try {
      const { nameFoto, descriptionFoto, urlFoto } = req.body;
      const foto = await Photo.create({
        nameFoto,
        descriptionFoto,
        urlFoto,
        userId: req.session.userId,
      });
      res.status(201).json()
    } catch (error) {}
  });

module.exports = router;
