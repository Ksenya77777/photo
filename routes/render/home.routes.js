const router = require('express').Router();

const Home = require('../../components/Home');
// const { Photo } = require('../../db/models');




router.route('/').get(async (req, res) => {
  try {
    const arrPhoto = await fetch(
      'https://api.unsplash.com/photos?per_page=22',
      {
        method: 'get',
        headers: {
          'Content-Type': 'Application/json',
          Authorization:
            'Client-ID iCxPxPog-dtW4SVjU4Qi1DtYOAE4l8JzU-61m2DmjKE',
        },
      }
    );

    const result = await arrPhoto.json();
    
    res.renderComponent(Home, { result});
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
