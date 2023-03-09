const router = require('express').Router();
const {Albom} = require('../../db/models')
const MyAlboms = require('../../components/MyAlboms');

router.route('/').get(async (req, res) => {
  try {
    res.renderComponent(MyAlboms);
  } catch (error) {
    res.status(500).json({ error });
  }
})
.post(async(req,res)=>{
  try {
    const {name,visible, description}=req.body

  } catch (error) {
    
  }
})
module.exports = router;
