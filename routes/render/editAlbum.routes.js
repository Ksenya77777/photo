const router = require('express').Router();

const EditAlbom = require('../../components/EditAlbom');

router.route('/albums').get((req,res)=>{
    try {
        res.renderComponent(EditAlbom);
    } catch (error) {
        
    }
})

module.exports = router